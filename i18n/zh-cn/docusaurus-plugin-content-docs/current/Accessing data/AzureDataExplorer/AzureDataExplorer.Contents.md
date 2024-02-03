---
title: AzureDataExplorer.Contents
---

# AzureDataExplorer.Contents


## Description

从 Azure 数据资源管理器导入数据(Kusto)


## Syntax

```powerquery
AzureDataExplorer.Contents(
    cluster as text,
    optional database as text,
    optional tableOrQuery as text,
    optional options as record
) as table
```


## Details

从 Azure 数据资源管理器(Kusto)实例导入数据


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



