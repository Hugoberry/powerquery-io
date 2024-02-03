---
title: Smartsheet.Query
---

# Smartsheet.Query


## Description

从 Smartsheet API 返回 JSON 结果


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Details

在指定终结点调用 Smartsheet 2.0 REST API，并将结果作为 JSON 记录返回。


## Examples

### Example #1 
从指定了其他参数的工作表 Smartsheet API 终结点拉取数据
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
包含由 Smartsheet API 返回的工作表信息的表
```



