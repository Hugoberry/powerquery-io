---
title: Smartsheet.Query
---

# Smartsheet.Query


從 Smartsheet API 傳回 JSON 結果


## Syntax

```powerquery
Smartsheet.Query(
    endpoint as text,
    args as text,
    headers as record
) as any
```


## Remarks

呼叫位於指定端點的 Smartsheet 2.0 REST API，並以 JSON 記錄格式傳回結果。


## Examples

### Example #1 
指定額外的引數，從 Smartsheet API 端點工作表提取資料
```powerquery
Smartsheet.Content("sheets", "include=ownerInfo&includeAll=true", [])
```

Result: 
```powerquery
由 Smartsheet API 傳回內含工作表資訊的資料表
```



