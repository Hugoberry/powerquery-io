---
title: Number.IsOdd
---

# Number.IsOdd


값이 홀수인지 여부를 나타냅니다.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Remarks

값이 홀수인지 여부를 나타냅니다. `number`이(가) 홀수이면 `true`를 반환하고, 그렇지 않으면 `false`를 반환합니다.


## Examples

### Example #1
625가 홀수인지 확인합니다.
```powerquery
Number.IsOdd(625)
```

Result: 
```powerquery
true
```


### Example #2
82가 홀수인지 확인합니다.
```powerquery
Number.IsOdd(82)
```

Result: 
```powerquery
false
```




## Category
Number.Information
