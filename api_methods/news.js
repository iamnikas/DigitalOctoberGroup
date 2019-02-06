import axios from 'axios'

export default {
	getAll(formData, callback) {
		return new Promise(function (resolve, reject) {
			const instance = axios.create({
				withCredentials: true
			});
			instance.get('http://localhost:3000/news')
			.then(function (res) {
				if(res.status == 200){
					resolve(res.data);
				}
			})
			.catch(function (err) {
                console.log('GET ')
				reject(err)
			})
		})
	},
	getOne(news_id, callback) {
		return new Promise(function (resolve, reject) {
			const instance = axios.create({
				withCredentials: true
			});
			instance.get('http://localhost:3000/news/get/'+news_id)
			.then(function (res) {
				console.log('getOne res:', res)
				if(res.status == 200){
					resolve(res.data);
				}
			})
			.catch(function (err) {
                console.log('GET ')
				reject(err)
			})
		})
	},
}