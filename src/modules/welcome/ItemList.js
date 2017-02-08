/*
* welcome Item list component
* create by mars
* create at 2017-2-6
*/

'use strict';


import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Dimensions,
	ListView,
	InteractionManager,
	RefreshControl,
	Platform,
} from 'react-native'
import { request } from '../../utils/http.js'
import LoadMoreFooter from './LoadMoreFooter.js'
import ItemCell from './ItemCell.js'
import NavigationBar from '../../common/NavigationBar.js'
import {
	getProductList,
	changeProductListRefreshing,
	changeProductListLoadingMore
} from './action.js'
import Storage from '../../common/Storage.js'
import backIcon from '../../Resources/images/back.png'

const { width, height } = Dimensions.get('window')

let _pageNo = 1;
const _pageSize = 10;

class ItemList extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props);
		this.props.welcomeAction.getProductList(_pageNo);		
	}

	_goToDetail(rowData) {
		const { navigator } = this.props;
		const imageUrl = `https:${rowData.imagePath}`;
		// console.log("去商品详情页",rowData);
		// Storage.removeValueForKey('lastestRecord');
		Storage.mergeArrayWithKeyValue('lastestRecord',{name: rowData.companyName,id: rowData.companyId, imagePath: rowData.imagePath, productName: rowData.productName});
		// if(navigator) {
		// 	navigator.push({
		// 	    component: ProductImageContainer,
		// 	    params: {
		// 	    	rowData
		// 	    }
		// 	})
		// }
	}

	_onRefresh() {
		this.props.welcomeAction.getProductList(1);
	}

	_loadMoreData() {
		const { products } = this.props.welcome;
		this.props.welcomeAction.changeProductListLoadingMore(true);
		_pageNo = Number.parseInt(products.length / _pageSize) + 1;
		this.props.welcomeAction.getProductList(_pageNo);
	}

	_toEnd() {
		const { products } = this.props.welcome;
		// console.log("加载更多？ ",reducer.isLoadingMore, reducer.products.length, reducer.totalProductCount,reducer.isRefreshing);
		//ListView滚动到底部，根据是否正在加载更多 是否正在刷新 是否已加载全部来判断是否执行加载更多
		if (this.props.welcome.isLoadingMore || products.length >= this.props.welcome.totalProductCount || this.props.welcome.isRefreshing) {
			return;
		};
		InteractionManager.runAfterInteractions(() => {
			// console.log("触发加载更多 toEnd() --> ");
			this._loadMoreData();
		});
	}

	_toAnotherDetail() {
		const { navigator, rowData } = this.props;
		if(navigator) {
			// navigator.push({
			//     component: ProductDetailContainer,
			//     params: {
			//     	rowData
			//     }
			// });
		}
	}

	_switchView(){
		const { logOn } = this.props.router;
		console.log("this.props.router", this.props.router);
		// logOn = !logOn;
		this.props.routerAction.switchView(!logOn)
	}

	render() {
		const { products } = this.props.welcome;
		const { logOn } = this.props.router;
		console.log("this.props.router", this.props.router);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return (
			<View style={{backgroundColor: 'blue', flex: 0.3}}>
				<NavigationBar title={'首页'} rightTitle={'to tabbar'} rightImage={ backIcon } rightAction={ this._switchView.bind(this)} />
				<ListView style={ styles.listViewContent } 
					dataSource={ ds.cloneWithRows(products) } 
					renderRow={ (rowData,SectionId,rowID) => {
						return <ItemCell rowData={rowData} rowID={ rowID } goToDetail={ this._goToDetail.bind(this) }/>
					} }
					
					onEndReached={ this._toEnd.bind(this) }
					onEndReachedThreshold={10}
					renderFooter={ this._renderFooter.bind(this) }
					enableEmptySections={true} 
					refreshControl={
						<RefreshControl
							refreshing={ this.props.welcome.isRefreshing }
							onRefresh={ this._onRefresh.bind(this) }
							tintColor="gray"
							colors={['#ff0000', '#00ff00', '#0000ff']}
							progressBackgroundColor="gray"/>
						}/>
			</View>
		)
	}

	_renderFooter() {
		const { products } = this.props.welcome;
		//通过当前product数量和刷新状态（是否正在下拉刷新）来判断footer的显示
		if (products.length < 1 || this.props.welcome.isRefreshing) {
			return null
		};
		if (products.length < this.props.welcome.totalProductCount) {
			//还有更多，默认显示‘正在加载更多...’
			return <LoadMoreFooter />
		}else{
			// 加载全部
			return <LoadMoreFooter isLoadAll={true}/>
		}
	}

}

const styles = StyleSheet.create({
	listViewContent: {
		flex: 1,
		paddingBottom: 20,
		marginBottom: 0,
		backgroundColor: '#FFEFDB',
		height: height - (Platform.OS === 'ios' ? 64 : 44),
	},
	searchBar: {
		backgroundColor: 'yellow',
		height: 40,
		flexDirection: 'row'
	}
})

export default ItemList
