---
title: AzureDataExplorer.KqlDatabase
---

# AzureDataExplorer.KqlDatabase


在发现模式下从 Fabric Kusto 群集导入数据。


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

从 KQL 数据库实例导入数据


## Examples

### Example #1
返回 Storm Events 信息的表
```powerquery
Kusto.Contents("help", "Samples", "StormEvents", [])
```

Result: 
```powerquery
具有 "help" 群集中 "Samples" 数据库的 Storm Events 的表
```



