import Vue from 'vue'
import moment from 'moment'
import {
	CONFIG
} from '../../config/config_dev'

const API_ROOT = CONFIG.serverApi;

function fetch(child) {
	return new Promise((resolve, reject) => {
		Vue.http.get(API_ROOT + child).then((response) => {
			resolve(response.body)
		}, reject)
	})
}

// add  by liqihan
export function fetchRegion() {
	return new Promise((resolve, reject) => {
        Vue.http.get("/src/asset/region.json").then((response) => {
            resolve(response.body)
        }, reject)
	})
}



export function fetchLatest() {
	return fetch('news/latest')
}

export function fetchItem(id) {
	return fetch(`news?id=${id}`).then((item) => {
		item.body = item.body.replace(/src="http/g, 'src="' + API_ROOT + 'pic?img=http')
		item.image = getPicUrl(item.image)
		item.images = item.images.map((img) => getPicUrl(img))
		return item
	})
}

export function fetchItems(ids) {
	return Promise.all(ids.map(id => fetchItem(id)))
}

export function fetchItemExtra(id) {
	return fetch(`extra?id=${id}`)
}

export function fetchItemComments(id) {
	return fetch(`comments?id=${id}`).then((response) => {
		response.comments.forEach((comment) => {
			comment.avatar = getPicUrl(comment.avatar)
		})
		return response
	})
}

export function fetchItemsByDate(date) {
	date = moment(date).add(1, 'days').format('YYYYMMDD');
	return fetch(`before?time=${date}`)
}

export function fetchThemes() {
	return fetch('themes')
}

export function fetchTheme(id) {
	return fetch(`theme?id=${id}`)
}

export function getPicUrl(img) {
	return API_ROOT + `pic?img=${img}`
}