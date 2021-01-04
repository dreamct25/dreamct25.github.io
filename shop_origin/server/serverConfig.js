const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")
const server = express()

server.use(morgan("combined"))
server.use(bodyParser.json())
server.use(cors())

const sql = require("mssql")
const connectObject = {
    user:"SA",
    password:"testDB123",
    server:"127.0.0.1",
    port:1490,
    database:"shopDB"
}

function trans(text){
    let newText = ""
    text == null ? newText = null : newText = text
    return newText
}

//#region Account
server.get("/shop/account",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request()
        request.query("SELECT * FROM Account",(err,get)=>{
            if(err) console.log(err)
            res.send(get.recordset)
        })
    })
})

server.post("/shop/account/register",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request().
        input("name",req.body.name).
        input("account",req.body.account).
        input("password",req.body.password).
        input("tel",req.body.tel).
        input("email",req.body.email).
        input("address",req.body.address).
        input("time",req.body.time)
        request.query(`
        INSERT INTO Account VALUES(
            @name,
            @account,
            @password,
            @tel,
            @email,
            @address,
            @time,0,0)`,(err,create)=>{
                if(err) console.log(err)
                res.send(create)
            })
    })
})

server.post("/shop/account/login",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request().input("id",req.body.id)
        request.query(`
        UPDATE Account
        SET LoginState = 1
        WHERE id = @id`,(err,update)=>{
            if(err) console.log(err)
            res.send(update)
        })
    })
})

server.post("/shop/account/login_off",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request().input("id",req.body.id)
        request.query(`
        UPDATE Account
        SET LoginState = 0
        WHERE id = @id`,(err,update)=>{
            if(err) console.log(err)
            res.send(update)
        })
    })
})
//#endregion

//#region Product
server.get("/shop/product/",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request()
        request.query("SELECT * FROM Product",(err,get)=>{
            if(err) console.log(err)
            res.send(get.recordset)
        })
    })
})

server.post("/shop/product/create",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request().
        input("productName",req.body.productName).
        input("productDescript",req.body.productDescript).
        input("productTypeName",req.body.productTypeName).
        input("productTypeNum",req.body.productTypeNum).
        input("productNew",req.body.productNew).
        input("productPice",req.body.productPice).
        input("productOriginPrice",req.body.productOriginPrice).
        input("productOnSalePrice",req.body.productOnSalePrice).
        input("productStatus",req.body.productStatus).
        input("productAddDate",req.body.productAddDate).
        input("productOnDate",trans(req.body.productOnDate)).
        input("productOffDate",trans(req.body.productOffDate)).
        input("productMainImg",req.body.productMainImg).
        input("productOtherImgI",trans(req.body.productOtherImgI)).
        input("productOtherImgII",trans(req.body.productOtherImgII))
        input("productMainImgDesc",req.body.productMainImgDesc).
        input("productOtherImgDescI",trans(req.body.productOtherImgDescI)).
        input("productOtherImgDescII",trans(req.body.productOtherImgDescII))
        request.query(`
        INSERT INTO Product VALUES(
            @productName,
            @productDescript,
            @productTypeName,
            @productTypeNum,
            @productNew,
            @productPice,
            @productOriginPrice,
            @productOnSalePrice,
            @productStatus,
            @productAddDate,
            @productOnDate,
            @productOffDate,
            @productMainImg,
            @productOtherImgI,
            @productOtherImgII,
            @productMainImgDesc,
            @productOtherImgDescI,
            @productOtherImgDescII)`,(err,create)=>{
            if(err) console.log(err)
            res.send(create)
        })
    })
})

server.post("/shop/product/patch",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request().
        input("productName",req.body.productName).
        input("productDescript",req.body.productDescript).
        input("productTypeNum",req.body.productTypeNum).
        input("productNew",req.body.productNew).
        input("productPice",req.body.productPice).
        input("productOriginPrice",req.body.productOriginPrice).
        input("productOnsalePrice",req.body.productOnsalePrice).
        input("productStatus",req.body.productStatus).
        input("productOnDate",trans(req.body.productOnDate)).
        input("productOffDate",trans(req.body.productOffDate)).
        input("productMainImg",req.body.productMainImg).
        input("productOtherImgI",trans(req.body.productOtherImgI)).
        input("productOtherImgII",trans(req.body.productOtherImgII)).
        input("productMainImgDesc",req.body.productMainImgDesc).
        input("productOtherImgDescI",trans(req.body.productOtherImgDescI)).
        input("productOtherImgDescII",trans(req.body.productOtherImgDescII)).
        input("id",req.body.id)
        request.query(`
        UPDATE Product
        SET PDName = @productName,
            PDDesc = @productDescript,
            PDTypeNum = @productTypeNum,
            PDIsNew = @productNew,
            PDPice = @productPice,
            PDOriginPrice = @productOriginPrice,
            PDOnSalePrice = @productOnsalePrice,
            PDState = @productStatus,
            PDOnDate = @productOnDate,
            PDOffDate = @productOffDate,
            PDImgUrlI = @productMainImg,
            PDImgUrlII = @productOtherImgI,
            PDImgUrlIII = @productOtherImgII,
            PDImgDescI = @productMainImgDesc,
            PDImgDescII = @productOtherImgDescI,
            PDImgDescIII = @productOtherImgDescII
        WHERE PDID = @id`,(err,patch)=>{
            if(err) console.log(err)
            res.send(patch)
        })
    })
})

server.post("/shop/product/delete",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request().input("id",req.body.id)
        request.query("DELETE Product WHERE PDID = @id",(err,deletes)=>{
            if(err) console.log(err)
            res.send(deletes)
        })
    })
})

server.post("/shop/product/patch_total_pice",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request().
        input("productPice",req.body.productPice).
        input("id",req.body.id)
        request.query(`
        UPDATE Product
        SET PDPice = @productPice
        WHERE PDID = @id`,(err,patch)=>{
            if(err) console.log(err)
            res.send(patch)
        })
    })
})

server.post("/shop/product/get_single_product",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request().input("id",req.body.id)
        request.query(`SELECT * FROM Product WHERE PDID = @id`,(err,get)=>{
            if(err) console.log(err)
            res.send(get.recordset)
        })
    })
})
//#endregion

//#region Counpon
server.get("/shop/coupon/",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request()
        request.query("SELECT * FROM Coupon",(err,get)=>{
            if(err) console.log(err)
            res.send(get.recordset)
        })
    })
})

server.post("/shop/coupon/create",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request().
        input("couponName",req.body.couponName).
        input("couponCode",req.body.couponCode).
        input("couponPercent",req.body.couponPercent).
        input("couponAddDate",req.body.couponAddDate).
        input("couponEnableDate",trans(req.body.couponEnableDate)).
        input("couponDisableDate",trans(req.body.couponDisableDate)).
        input("couponStatus",req.body.couponStatus)
        request.query(`
        INSERT INTO Coupon VALUES(
            @couponName,
            @couponCode,
            @couponPercent,
            @couponAddDate,
            @couponEnableDate,
            @couponDisableDate,
            @couponStatus)`,(err,create)=>{
            if(err) console.log(err)
            res.send(create)
        })
    })
})

server.post("/shop/coupon/patch",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request().
        input("couponName",req.body.couponName).
        input("couponCode",req.body.couponCode).
        input("couponPercent",req.body.couponPercent).
        input("couponEnableDate",trans(req.body.couponEnableDate)).
        input("couponDisableDate",trans(req.body.couponDisableDate)).
        input("couponStatus",req.body.couponStatus).
        input("id",req.body.id)
        request.query(`
        UPDATE Coupon
        SET CPName = @couponName,
            CPCode = @couponCode,
            CPPercent = @couponPercent,
            CPEnableDate = @couponEnableDate,
            CPDisableDate = @couponDisableDate,
            CPState = @couponStatus
        WHERE CPID = @id`,(err,patch)=>{
            if(err) console.log(err)
            res.send(patch)
        })
    })
})

server.post("/shop/coupon/delete",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request().input("id",req.body.id)
        request.query("DELETE Coupon WHERE CPID = @id",(err,deletes)=>{
            if(err) console.log(err)
            res.send(deletes)
        })
    })
})

server.post("/shop/coupon/get_single_coupon",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request().input("id",req.body.id)
        request.query("SELECT * FROM Coupon WHERE CPID = @id",(err,get)=>{
            if(err) console.log(err)
            res.send(get.recordset)
        })
    })
})
//#endregion

//#region OrderList
server.get("/shop/order_list/",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request()
        request.query("SELECT * FROM OrderList",(err,get)=>{
            if(err) console.log(err)
            res.send(get.recordset)
        })
    })
})

server.post("/shop/order_list/create",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request().
        input("orderAccount",req.body.orderAccount).
        input("orderProductID",req.body.orderProductID).
        input("orderProductSize",req.body.orderProductSize).
        input("orderCount",req.body.orderCount)
        request.query(`
        INSERT INTO OrderList VALUES(
            @orderAccount,
            @orderProductID,
            @orderProductSize,
            @orderCount)`,(err,create)=>{
            if(err) console.log(err)
            res.send(create)
        })
    })
})

server.post("/shop/order_list/delete",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request().input("id",req.body.id)
        request.query("DELETE OrderList WHERE ODID = @id",(err,deletes)=>{
            if(err) console.log(err)
            res.send(deletes)
        })
    })
})
//#endregion

//#region cart
server.get("/shop/cart/",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request()
        request.query(`
        SELECT
        orders.ODID,
        orders.Account,
        products.PDName,
        products.PDID,
        orders.ODPDSize,
        orders.ODPDCount,
        products.PDOnSalePrice,
        products.PDImgUrlI 
        FROM Product products JOIN OrderList orders 
        On products.PDID = orders.PDID
        `,(err,get)=>{
            if(err) console.log(err)
            res.send(get.recordset)
        })
    })
})
//#endregion

//#region payment
server.get("/shop/payment/",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request()
        request.query("SELECT * FROM Payment",(err,get)=>{
            if(err) console.log(err)
            res.send(get.recordset)
        })
    })
})
server.post("/shop/payment/create",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request().
        input("paymentNum",req.body.paymentNum).
        input("paymentName",req.body.paymentName).
        input("paymentTel",req.body.paymentTel).
        input("paymentEmail",req.body.paymentEmail).
        input("paymentAddress",req.body.paymentAddress).
        input("payMethod",req.body.payMethod).
        input("paymentCouponUse",req.body.paymentCouponUse).
        input("paymentCouponID",req.body.paymentCouponID).
        input("payStatus",req.body.payStatus).
        input("createDate",req.body.createDate)
        request.query(`
        INSERT INTO Payment VALUES(
            @paymentNum,
            @paymentName,
            @paymentTel,
            @paymentEmail,
            @paymentAddress,
            @payMethod,
            @paymentCouponUse,
            @paymentCouponID,
            @payStatus,
            @createDate)`,(err,create)=>{
            if(err) console.log(err)
            res.send(create)
        })
    })
})
server.post("/shop/payment/paied",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request().
        input("payStatus",req.body.payStatus).
        input("id",req.body.id)
        request.query(`
        UPDATE Payment
        SET PMState = @payStatus
        WHERE PMID = @id`,(err,paied)=>{
            if(err) console.log(err)
            res.send(paied)
        })
    })
})
server.post("/shop/payment/delete",(req,res)=>{
    sql.connect(connectObject,err=>{
        if(err) console.log(err)
        const request = new sql.Request().input("id",req.body.id)
        request.query("DELETE Payment WHERE PMID = @id",(err,deletes)=>{
            if(err) console.log(err)
            res.send(deletes)
        })
    })
})
//#endregion

server.listen(process.env.PORT || 8088)