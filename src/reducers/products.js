import * as types from './../constants/ActionType'
var initialState = [
    {
        id: 1,
        name: 'Iphone 7',
        price: 1000,
        image: 'https://cdn.tgdd.vn/Products/Images/42/74110/iphone-7-gold-600x600.jpg',
        description: 'Made In VietNam',
        inventory: 10,
        rating: 3
    },
    {
        id: 2,
        name: 'Samsung Note 9',
        price: 899,
        image: 'https://didongviet.vn/pub/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/s/a/samsung-galaxy-note-9-bac-dong-didongviet_2.jpg',
        description: 'Made In Korean',
        inventory: 23,
        rating: 5
    },
    {
        id: 3,
        name: 'Oppo F11',
        price: 499,
        image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2019/4/12/636906565297622951_oppo-f11-pro-den-1.png',
        description: 'Made In China',
        inventory: 33,
        rating: 2
    },
] ;

var products = (state = initialState, action) => {
    switch (action.type) {
        default: return state
    }
}

export default products;