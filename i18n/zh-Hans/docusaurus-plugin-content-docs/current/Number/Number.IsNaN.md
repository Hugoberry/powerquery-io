---
title: Number.IsNaN
---

# Number.IsNaN


指示值是否为 NaN (不是数字)。


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

指示值是否为 NaN (不是数字)。如果 `number` 与 `Number.NaN` 等效，则返回 `true`；否则返回 `false`。


## Examples

### Example #1
检查 0 除以 0 是否为 NaN。
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
检查 1 除以 0 是否为 NaN。
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
