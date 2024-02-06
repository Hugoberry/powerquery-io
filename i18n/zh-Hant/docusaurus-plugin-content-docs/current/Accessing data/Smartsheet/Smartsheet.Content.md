---
title: Smartsheet.Content
---

# Smartsheet.Content


從 Smartsheet 索引端點傳回內含資料的資料表。


## Syntax

```powerquery
Smartsheet.Content(
    endpoint as text
) as any
```


## Remarks

呼叫位於指定端點的 Smartsheet 2.0 REST API，並將傳回的資料元素轉換成資料表。


## Examples

### Example #1 
從 Smartsheet API 提取內含使用者資訊的資料表
```powerquery
Smartsheet.Content("users")
```

Result: 
```powerquery
由 Smartsheet API 傳回內含使用者資訊的資料表
```



