---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

從 QuickBooks Online 匯入資料。


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        傳回列出 QuickBooks Online 中可用資料表的資料表。可指定選用記錄參數 <code>options</code> 來控制下列選項:          <ul>             <li><code>ConnectionTimeout</code>: 此期間控制放棄嘗試連線到伺服器之前，要等候多久的時間。</li>             <li><code>CommandTimeout</code>: 此期間控制在取消伺服器端查詢之前，允許其執行多久的時間。</li>          </ul>        記錄參數的指定形式為 [option1 = value1, option2 = value2...]。    


