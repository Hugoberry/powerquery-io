---
title: AzureDataExplorer.Contents
---

# AzureDataExplorer.Contents


從 Azure 資料總管 (Kusto) 匯入資料


## Syntax

```powerquery
AzureDataExplorer.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Remarks

從您的 Azure 資料總管 (Kusto) 執行個體匯入資料


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



