---
title: Number.IsNaN
---

# Number.IsNaN


값이 NaN(Not a number)인지 여부를 나타냅니다.


## Syntax

```powerquery
Number.IsNaN(
    number as number
) as logical
```


## Remarks

값이 NaN(Not a number)인지 여부를 나타냅니다. `number`이(가) `Number.NaN`이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.


## Examples

### Example #1
0을 0으로 나눈 결과가 NaN인지 확인합니다.
```powerquery
Number.IsNaN(0/0)
```

Result: 
```powerquery
true
```


### Example #2
1을 0으로 나눈 결과가 NaN인지 확인합니다.
```powerquery
Number.IsNaN(1/0)
```

Result: 
```powerquery
false
```




## Category
Number.Information
