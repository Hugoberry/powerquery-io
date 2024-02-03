---
title: Smartsheet.Content
---

# Smartsheet.Content


## Description

从 Smartsheet 索引终结点返回数据表。


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Details

在指定终结点调用 Smartsheet 2.0 REST API，并将返回的数据元素转换为表。


## Examples

### Example #1 
从 Smartsheet API 拉取用户信息表
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
包含由 Smartsheet API 返回的用户信息的表
```



