---
title: Number.IsEven
---

# Number.IsEven


## Description

값이 짝수인지 여부를 나타냅니다.


## Syntax

```powerquery
Number.IsEven(
    number as number
) as logical
```


## Details

값 <code>number</code>이(가) 짝수인지 여부를 나타냅니다. 짝수이면 <code>true</code>를 반환하고, 그렇지 않으면 <code>false</code>를 반환합니다.


## Examples

### Example #1 
625가 짝수인지 확인합니다.
```powerquery
Number.IsEven(625)
```

Result: 
```powerquery
false
```


### Example #2 
82가 짝수인지 확인합니다.
```powerquery
Number.IsEven(82)
```

Result: 
```powerquery
true
```




## Category
Number.Information
