---
title: Number.IsOdd
---

# Number.IsOdd


## Description

값이 홀수인지 여부를 나타냅니다.


## Syntax

```powerquery
Number.IsOdd(
    number as number
) as logical
```


## Details

값이 홀수인지 여부를 나타냅니다. <code>number</code>이(가) 홀수이면 <code>true</code>를 반환하고, 그렇지 않으면 <code>false</code>를 반환합니다.


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
