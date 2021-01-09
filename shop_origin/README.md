# 電商實作專案
## 資料匣內容
server ( 存放 node js server 各項設定檔與各支 Sql 串接的路由的引用模組設定 )
> `serverConfig.js` ( node js server 主要引用與模組設定邏輯，為主要檔案 )
>
> `SqlConnetSetting.js` ( node mssql 載入模組與連線至 Docker 物件設定 )
>
> `SqlAccount.js` ( 引用模組 `SqlConnetSetting.js` 連接至資料庫的 `Account 表單裡主要的 CRUD 邏輯` 與 `RESTful API`
>
> `SqlProduct.js` ( 引用模組 SqlConnetSetting.js 連接至資料庫的 `Product 表單裡主要的 CRUD 邏輯` 與 `RESTful API` )
>
> `SqlCoupon.js` ( 引用模組 SqlConnetSetting.js 連接至資料庫的 `Coupon 表單裡主要的 CRUD 邏輯` 與 `RESTful API` )
>
> `SqlOrderList.js` ( 引用模組 SqlConnetSetting.js 連接至資料庫的 `OrderList 表單裡主要的 CRUD 邏輯` 與 `RESTful API` )
>
> `SqlPayment.js` ( 引用模組 SqlConnetSetting.js 連接至資料庫的 `Payment 表單裡主要的 CRUD 邏輯` 與 `RESTful API` )
>
> `SqlCart.js` ( 引用模組 SqlConnetSetting.js 連接至資料庫的 `JOIN Product 與 OrderList 表單裡主要邏輯` 與 `RESTful API` )
>
src
> components (前台頁面分頁)
>> DashChild (後台頁面分頁)
