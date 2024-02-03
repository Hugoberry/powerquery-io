---
title: Guid.From
---

# Guid.From


## Description

傳回指定值的 GUID 值。


## Syntax

```powerquery
Guid.From(
    value as text
) as text
```


## Details

傳回指定 <code>value</code> 的 <code>Guid.Type</code> 值。若指定的 <code>value</code> 是 <code>null</code>，則 <code>Guid.From</code> 會傳回 <code>null</code>。指定的 <code>value</code> 將經過檢查，以判斷其是否為可接受的格式。範例中提供可接受的格式。


## Examples

### Example #1 
GUID 可為連續 32 個十六進位數字。
```powerquery
Guid.From("05FE1DADC8C24F3BA4C2D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #2 
GUID 可以是用連字號分隔成 8-4-4-4-12 區塊的 32 個十六進位數字。
```powerquery
Guid.From("05FE1DAD-C8C2-4F3B-A4C2-D194116B4967")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #3 
GUID 可以是用連字號分隔並放在大括號中的 32 個十六進位數字。
```powerquery
Guid.From("{05FE1DAD-C8C2-4F3B-A4C2-D194116B4967}")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```


### Example #4 
GUID 可以是用連字號分隔並放在括號中的 32 個十六進位數字。
```powerquery
Guid.From("(05FE1DAD-C8C2-4F3B-A4C2-D194116B4967)")
```

Result: 
```powerquery
"05fe1dad-c8c2-4f3b-a4c2-d194116b4967"
```




## Category
Text.Conversions from and to text
