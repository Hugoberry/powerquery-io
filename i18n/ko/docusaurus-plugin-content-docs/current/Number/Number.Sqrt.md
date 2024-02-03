---
title: Number.Sqrt
---

# Number.Sqrt


## Description

숫자의 제곱근을 반환합니다.


## Syntax

```powerquery
Number.Sqrt(
    number as number
) as number
```


## Details

<code>number</code>의 제곱근을 반환합니다.    <code>number</code>이(가) Null인 경우 <code>Number.Sqrt</code>는 Null을 반환합니다. 음수 값인 경우에는 <code>Number.NaN</code>(Not a number)이 반환됩니다.


## Examples

### Example #1 
625의 제곱근을 구합니다.
```powerquery
Number.Sqrt(625)
```

Result: 
```powerquery
25
```


### Example #2 
85의 제곱근을 구합니다.
```powerquery
Number.Sqrt(85)
```

Result: 
```powerquery
9.2195444572928871
```




## Category
Number.Operations
