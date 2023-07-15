import {
    LOAD_PRODUCTS,
    LOAD_SALE_PRODUCTS,
    LOAD_THREE_SALE_PRODUCTS,
    FILTER_PRODUCTS_BY_PRICE,
    FILTER_PRODUCTS_BY_DISCOUNT,
    SORT_PRODUCTS
} from './constants';


export const loadProducts = (payload) => ({ type: LOAD_PRODUCTS, payload });
export const loadSaleProducts = (payload) => ({
    type: LOAD_SALE_PRODUCTS,
    payload,
});
export const loadThreeSaleProducts = (payload) => ({
    type: LOAD_THREE_SALE_PRODUCTS,
    payload,
});
export const filterProductsByPriceAction = (payload) => ({
    type: FILTER_PRODUCTS_BY_PRICE,
    payload,
});
export const filterProductsByDiscountAction = (payload) => ({
    type: FILTER_PRODUCTS_BY_DISCOUNT,
    payload,
});
export const sortProductsAction = (payload) => ({
    type: SORT_PRODUCTS,
    payload,
});
const getThreeRundomProducts = (payload) => {
    const sliderState = [];
    const iterations = Math.min(3, payload.length);
    while (sliderState.length < iterations) {
        let randomNum = Math.floor(Math.random() * payload.length);
        if (sliderState.indexOf(payload[randomNum]) === -1)
            sliderState.push(payload[randomNum]);
    }
    return sliderState.map((el) => ({
        ...el,
        visible: true,
        realPrice: getRealPrice(el.price, el.discont_price),
        discountPercentage: calculateDiscountPercentage(el.price, el.discont_price),
    }));
};
const getRealPrice = (price, discountPrice) => discountPrice ? Math.round(discountPrice) : Math.round(price);
const calculateDiscountPercentage = (price, discountPrice) => discountPrice ? Math.round(100 - discountPrice / (price / 100)) : 0;

export const productReducer = (state = [], action) => {
    if (action.type === LOAD_PRODUCTS) {
        return action.payload.map((el) => ({
            ...el,
            visible: true,
            realPrice: getRealPrice(el.price, el.discont_price),
            discountPercentage: calculateDiscountPercentage(
                el.price,
                el.discont_price
            ),
        }));
    } else if (action.type === LOAD_SALE_PRODUCTS) {
        return action.payload
            .filter((el) => el.discont_price > 0)
            .map((el) => ({
                ...el,
                visible: true,
                realPrice: getRealPrice(el.price, el.discont_price),
                discountPercentage: calculateDiscountPercentage(
                    el.price,
                    el.discont_price
                ),
            }));
    } else if (action.type === LOAD_THREE_SALE_PRODUCTS) {
        return getThreeRundomProducts(action.payload);
    } else if (action.type === FILTER_PRODUCTS_BY_PRICE) {
        let { from, to } = action.payload;
        if (from === null || '') {
            from = 0;
        }
        if (to === null || '') {
            to = Infinity;
        }
        return state.map((el) => {
            el.visible = el.price >= from && el.price <= to;
            return el;
        });
    } else if (action.type === FILTER_PRODUCTS_BY_DISCOUNT) {
        //Здесь я все поломала
        if (action.payload) {
            return state.map((el) => ({ ...el, visible: el.discont_price != null }));
        } else {
            return state.map((el) => ({ ...el, visible: true }));
        }
    } else if (action.type === SORT_PRODUCTS) {
        if (action.payload === 'title') {
            state.sort((a, b) => a['title'].localeCompare(b['title']));
        } else if (action.payload === 'titleReverse') {
            state.sort((a, b) => b['title'].localeCompare(a['title']));
        } else if (action.payload === 'priceAscending') {
            state.sort((a, b) => a['realPrice'] - b['realPrice']);
        } else if (action.payload === 'priceDescending') {
            state.sort((a, b) => b['realPrice'] - a['realPrice']);
        } else if (action.payload === 'default') {
            state.sort((a, b) => a['id'] - b['id']);
        }
        return [...state];
    } else {
        return state;
    }
};
