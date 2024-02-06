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

指示值是否为 NaN (不是数字)。如果 <code>number</code> 与 <code>Number.IsNaN</code> 等效，则返回 <code>true</code>；否则返回 <code>false</code>。


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
