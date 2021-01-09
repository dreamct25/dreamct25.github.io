<h1>電商實作專案</h1>
<span>資料匣內容</span>
server (存放 node js server 各項設定檔與各支 Sql 串接的路由的引用模組設定 )
> serverConfig.js (node js server 主要引用與模組設定邏輯，為主要檔案)
> SqlConnetSetting.js (node mssql 載入模組與連線至 Docker 物件設定)
> SqlAccount.js (引用模組 SqlConnetSetting.js 連接至 Sql shopDB 的 Account 表單裡的主要邏輯與 RESTful API)
