'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    ShopifyBuy: any
  }
}

export default function ShopifyBuyButton() {
  useEffect(() => {
    const scriptId = 'shopify-buy-button-script'
    
    // Only load the script once
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script')
      script.id = scriptId
      script.async = true
      script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js'
      script.onload = ShopifyBuyInit
      document.body.appendChild(script)
    } else {
      ShopifyBuyInit()
    }
  }, [])

  function ShopifyBuyInit() {
    if (window.ShopifyBuy && window.ShopifyBuy.UI) {
      const client = window.ShopifyBuy.buildClient({
        domain: 'rydncr-w4.myshopify.com',
        storefrontAccessToken: '122fbd98d05c78345e9e2f9cbe00b253',
      })

      window.ShopifyBuy.UI.onReady(client).then((ui: any) => {
        ui.createComponent('product', {
          id: '8978272813286',
          node: document.getElementById('product-component-1743531047351'),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            "product": {
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px"
                  }
                }
              },
              "contents": {
                "img": false,
                "title": false,
                "price": false
              },
              "text": {
                "button": "Add to cart"
              }
            },
            "productSet": {
              "styles": {
                "products": {
                  "@media (min-width: 601px)": {
                    "margin-left": "-20px"
                  }
                }
              }
            },
            "modalProduct": {
              "contents": {
                "img": false,
                "imgWithCarousel": true,
                "button": false,
                "buttonWithQuantity": true
              },
              "styles": {
                "product": {
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0px",
                    "margin-bottom": "0px"
                  }
                }
              },
              "text": {
                "button": "Add to cart"
              }
            },
            "option": {},
            "cart": {
              "text": {
                "total": "Subtotal",
                "button": "Checkout"
              }
            },
            "toggle": {}
          }
        })
      })
    }
  }

  return <div id="product-component-1743531047351"></div>
} 