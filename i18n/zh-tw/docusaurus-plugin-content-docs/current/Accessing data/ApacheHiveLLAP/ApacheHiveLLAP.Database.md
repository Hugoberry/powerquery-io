---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


## Description

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


## Details

使用選取的<code>通訊協定</code>，從 Hive LLAP <code>伺服器</code>上之<code>資料庫</code>所指定的 Hive LLAP 傳回資料表清單。為伺服器指定連接埠號碼並非必要，但必須以冒號分隔。Thrift 傳輸通訊協定為列舉的類型，共有 "Standard" 及 "HTTP" 兩個值。您可以選擇是否要指定 <code>options</code> 參數，以控制下列選項:<ul>        <li><code>ConnectionTimeout</code>: 此期間控制放棄連線到伺服器前的等待時間。預設值為視驅動程式而定。</li>        <li><code>CommandTimeout</code>: 此期間控制伺服器端查詢在取消之前所能執行的時間。預設值為視驅動程式而定。</li></ul>指定 <code>options</code> 參數時，須使用下列格式: [option1 = value1, option2 = value2...]。


