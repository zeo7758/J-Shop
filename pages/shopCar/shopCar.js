
let DATA={
"meta": {
"limit": 1,
"next": null,
"offset": 0,
"previous": null,
"total_count": 1
},
"objects": [
{
"id": 379924,
"products": [
{
"cover_image": "https://media.ifanrusercontent.com/user_files/canton/04/2f/042f67c629ff9f94036698bc1100b383bed10388-a380c7070b963b1ef353095e4bd7f0a8264d9538.jpg",
"created_at": 1535292162,
"inventory": 5000,
"original_price": "196.00",
"price": "608.00",
"product_id": 8627,
"product_sku_id": 132414,
"product_status": "in_stock",
"purchase_limit": 0,
"purchase_number": 0,
"quantity": 4,
"sku_image": "https://media.ifanrusercontent.com/user_files/canton/b2/ea/b2ea6446902043ffa2026f2c3b548c27d3038f81-a15e10a660f6dd27f4caba070fcdee5dde6eaac0.jpg",
"spec_str": "猕猴桃规格:18颗礼盒装（两箱装）",
"title": "皮薄多汁超甜蜜的红心猕猴桃",
"unit_price": "152.00",
"vendor": "甜蜜研究所"
},
{
"cover_image": "https://media.ifanrusercontent.com/user_files/canton/04/2f/042f67c629ff9f94036698bc1100b383bed10388-a380c7070b963b1ef353095e4bd7f0a8264d9538.jpg",
"created_at": 1535292157,
"inventory": 5000,
"original_price": "216.00",
"price": "504.00",
"product_id": 8627,
"product_sku_id": 132413,
"product_status": "in_stock",
"purchase_limit": 0,
"purchase_number": 0,
"quantity": 3,
"sku_image": "https://media.ifanrusercontent.com/user_files/canton/db/21/db2103483b8e2b57533ffd99397a7cc9d45b9287-2c75e47f8e8ecf753c3171c72316a6915c6ac1f2.jpg",
"spec_str": "猕猴桃规格:24颗家庭装（两箱装）",
"title": "皮薄多汁超甜蜜的红心猕猴桃",
"unit_price": "168.00",
"vendor": "甜蜜研究所"
},
{
"cover_image": "https://media.ifanrusercontent.com/user_files/canton/04/2f/042f67c629ff9f94036698bc1100b383bed10388-a380c7070b963b1ef353095e4bd7f0a8264d9538.jpg",
"created_at": 1535292155,
"inventory": 4993,
"original_price": "78.00",
"price": "156.00",
"product_id": 8627,
"product_sku_id": 132345,
"product_status": "in_stock",
"purchase_limit": 0,
"purchase_number": 0,
"quantity": 2,
"sku_image": "https://media.ifanrusercontent.com/user_files/canton/dd/2e/dd2e1c21cd2d9f5afca294c3ddf5da9cff5776c7-9d371daa57bd847ec8cb727952669e3310c96a9a.jpg",
"spec_str": "猕猴桃规格:18颗礼盒装",
"title": "皮薄多汁超甜蜜的红心猕猴桃",
"unit_price": "78.00",
"vendor": "甜蜜研究所"
},
{
"cover_image": "https://media.ifanrusercontent.com/user_files/canton/04/2f/042f67c629ff9f94036698bc1100b383bed10388-a380c7070b963b1ef353095e4bd7f0a8264d9538.jpg",
"created_at": 1535292152,
"inventory": 4970,
"original_price": "88.00",
"price": "176.00",
"product_id": 8627,
"product_sku_id": 132344,
"product_status": "in_stock",
"purchase_limit": 0,
"purchase_number": 0,
"quantity": 2,
"sku_image": "https://media.ifanrusercontent.com/user_files/canton/9e/16/9e16a1d248e34d3c1c36ba501e2c1dfcfde5b978-b00d09ed8f96891678ea1049b2bf6ebd25acc053.jpg",
"spec_str": "猕猴桃规格:24颗家庭装",
"title": "皮薄多汁超甜蜜的红心猕猴桃",
"unit_price": "88.00",
"vendor": "甜蜜研究所"
},
{
"cover_image": "https://media.ifanrusercontent.com/user_files/canton/f8/6a/f86acf4fdeefa858f4d8ac142f251105b6abb3ba-b2794d3d4e922492476f0bf4846d7cc80afcabc6.jpg",
"created_at": 1535272511,
"inventory": 140,
"original_price": "599.00",
"price": "349.00",
"product_id": 8251,
"product_sku_id": 130910,
"product_status": "in_stock",
"purchase_limit": 0,
"purchase_number": 0,
"quantity": 1,
"sku_image": "https://media.ifanrusercontent.com/user_files/canton/e9/f8/e9f8c6735f860dd275718929c8e5895a1b4f5dfb-7f741fb9365da1d4a859ec06801dd48ea1567f04.jpg",
"spec_str": "颜色:黑色",
"title": "柔软舒适改善睡眠的智能止鼾眼罩",
"unit_price": "349.00",
"vendor": "云中飞"
}
],
"total_amount": 1793,
"total_quantity": 12
}
]
}
Page({
    data: {
        list: DATA
    },
    onLoad: function () {
        this.getShopCar()
    },
    add(e) {
        let dataset = e.currentTarget.dataset,
            id = dataset.id,
            quantity = Number(dataset.quantity) + 1,
            product_sku_id = dataset.sku_id
        this.changeNum(id,quantity,product_sku_id)
    },
    decrease() {
        let dataset = e.currentTarget.dataset,
            id = dataset.id,
            quantity = Number(dataset.quantity) - 1,
            product_sku_id = dataset.sku_id
        this.changeNum(id,quantity,product_sku_id)
    },
    changeNum(id,quantity,product_sku_id) {
        wx.request({
            url:`https://coolbuy.com/api/v1.4/shopping_cart/${id}/`,
            method:"PUT",
            data:{
                product_sku_id:product_sku_id,
                quantity:quantity
            },
            success:(res) => {
                console.log(res.data);
            }
        })
    },

    getShopCar() {

        wx.request({
            url:'https://coolbuy.com/api/v1.4/shopping_cart/',
            data:{
                limit:1
            },
            success:(res) => {
                console.log(res.data);
            }
        })
    }
})
