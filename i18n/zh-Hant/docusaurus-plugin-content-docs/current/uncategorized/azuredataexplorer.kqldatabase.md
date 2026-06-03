---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


在探索模式中從 Fabric Kusto 叢集匯入資料。


## Syntax

```powerquery
AzureDataExplorer.KqlDatabase(
    optional cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Remarks

從您的 KQL Database 執行個體匯入資料


## Examples

### Example #1
傳回內含 Storm 事件資訊的資料表
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
內含 Storm 事件的資料表，這些事件來自「說明」叢集中的「範例」資料庫
```



