---
title: Smartsheet.Tables
---

# Smartsheet.Tables


從 Smartsheet API 傳回內含工作表、報表、資料夾與工作區的資料表


## Syntax

```powerquery
Smartsheet.Tables(

) as table
```


## Remarks

從 Smartsheet API 傳回內含可用工作表、報表、資料表與工作區的巢狀資料表。


## Examples

### Example #1 
傳回 Smartsheet 階層頂層中的可用工作表、資料夾、報表與工作區
```powerquery
Smartsheet.Tables()
```

Result: 
```powerquery
內含 Smartsheet 階層頂層中之可用工作表、資料夾、報表與工作區的資料表
```



