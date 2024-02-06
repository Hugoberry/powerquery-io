---
title: Number.IsEven
---

# Number.IsEven


指示值是否为偶数。


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

通过以下方式指示值 <code>number</code> 是否为偶数: 如果为偶数，则返回 <code>true</code>；否则返回 <code>false</code>。


## Examples

### Example #1 
检查 625 是否为偶数。
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2 
检查 82 是否为偶数。
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
