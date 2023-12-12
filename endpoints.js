const ENDPOINTS = {
  BIGCOMMERCE: {
    PRODUCT: {
      GET_META_FIELDS: (productId) =>
        `/v3/catalog/products/${productId}/metafields`,
    },
    CART: {
      GET_CART: (cartId) => `/v3/carts/${cartId}?include=redirect_urls`,
      CREATE_CART: "/v3/carts?include=redirect_urls",
      ADD_ITEM_TO_CART: (cartId) =>
        `/v3/carts/${cartId}/items?include=redirect_urls`,
      UPDATE_ITEM_IN_CART: (cartId, itemId) =>
        `/v3/carts/${cartId}/items/${itemId}?include=redirect_urls`,
      DELETE_CART: (cartId) => `/v3/carts/${cartId}`,
      REMOVE_ITEM_FROM_CART: (cartId, itemId) =>
        `/v3/carts/${cartId}/items/${itemId}?include=redirect_urls`,
    },

    PROMOTIONS: {
      CREATE_PROMOTION: "/v3/promotions",
      CREATE_COUPON: (promotionId) => `/v3/promotions/${promotionId}/codes`,
    },
  },
};

module.exports = ENDPOINTS;
