---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


從 Hive LLAP 匯入資料


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Remarks

使用選取的`通訊協定`，從 Hive LLAP `伺服器`上之`資料庫`所指定的 Hive LLAP 傳回資料表清單。為伺服器指定連接埠號碼並非必要，但必須以冒號分隔。Thrift 傳輸通訊協定為列舉的類型，共有 "Standard" 及 "HTTP" 兩個值。您可以選擇是否要指定 `options` 參數，以控制下列選項:

-   `ConnectionTimeout`: 此期間控制放棄連線到伺服器前的等待時間。預設值為視驅動程式而定。
-   `CommandTimeout`: 此期間控制伺服器端查詢在取消之前所能執行的時間。預設值為視驅動程式而定。

指定 `options` 參數時，須使用下列格式: \[option1 = value1, option2 = value2...\]。


