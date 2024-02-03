---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

從 HDInsight Interactive Query 匯入資料


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

自 HDInsight Interactive Query<code>server</code> 上 <code>database</code> 所指定之 HDInsight Interactive Query，傳回資料表清單。伺服器可能指定有連接埠號碼 (以冒號分隔)。可指定選擇性的 <code>options</code> 參數，以控制下列選項:<ul>        <li><code>ConnectionTimeout</code>: 控制在放棄前，可嘗試連線至伺服器的等待時間長度。預設值取決於驅動程式。</li>        <li><code>CommandTimeout</code>: 控制伺服器端查詢在取消前，可執行多長的時間。預設值取決於驅動程式。</li></ul>此 <code>options</code> 參數的指定方式為 [option1 = value1, option2 = value2...]。


