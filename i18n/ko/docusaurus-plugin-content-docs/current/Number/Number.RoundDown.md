---
title: Number.RoundDown
---

# Number.RoundDown


## Description

이전의 가장 큰 정수를 반환합니다. 자릿수를 지정할 수 있습니다.


## Syntax

```powerquery
Number.RoundDown(
    number as number,
    optional digits as number
) as number
```


## Details

<code>number</code>을(를) 이전 가장 높은 정수로 내림한 결과를 반환합니다. <code>number</code>이(가) null이면 이 함수는 null을 반환합니다.     <code>digits</code>이(가) 제공되면 <code>number</code>은(는) 지정된 소수 자릿수로 반올림됩니다.  


## Examples

### Example #1 
1.234를 정수로 내림합니다.
```powerquery
Number.RoundDown(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
1.999를 정수로 내림합니다.
```powerquery
Number.RoundDown(1.999)
```

Result: 
```powerquery
1
```


### Example #3 
1.999를 소수점 이하 두 자리로 내림합니다.
```powerquery
Number.RoundDown(1.999, 2)
```

Result: 
```powerquery
1.99
```




## Category
Number.Rounding
