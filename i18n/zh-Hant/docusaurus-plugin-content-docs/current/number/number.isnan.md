---
title: Number.IsNaN
---

# Number.IsNaN


指出值是否為 NaN (不是數字)。


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

指出值是否為 NaN (不是數字)。如果 `number` 等於 `Number.NaN`，傳回 `true`，否則傳回 `false`。


## Examples

### Example #1
檢查 0 除以 0 是否為 NaN。
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
檢查 1 除以 0 是否為 NaN。
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
