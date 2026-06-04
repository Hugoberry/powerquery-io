---
title: Number.IsEven
---

# Number.IsEven


指出值是否為偶數。


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Remarks

指出值 `number` 是否為偶數，如果是偶數，傳回 `true`，否則傳回 `false`。


## Examples

### Example #1
檢查 625 是否為偶數。
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2
檢查 82 是否為偶數。
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
