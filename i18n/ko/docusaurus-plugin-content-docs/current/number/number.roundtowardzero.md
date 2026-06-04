---
title: Number.RoundTowardZero
---

# Number.RoundTowardZero


양수는 내림하고 음수는 올림한 결과를 반환합니다. 자릿수를 지정할 수 있습니다.


## Syntax

```powerquery
Number.RoundTowardZero(
    number as number,
    optional digits as number
) as number
```


## Remarks

`number`을(를) 숫자의 부호에 따라 반올림한 결과를 반환합니다. 이 함수는 양수는 내림하고 음수는 올림합니다. `digits`이(가) 지정된 경우 `number`은(는) `digits`자리로 반올림됩니다.


## Examples

### Example #1
숫자 -1.2를 0에 가까워지도록 반올림합니다.
```powerquery
Number.RoundTowardZero(-1.2)
```

Result: 
```powerquery
-1
```


### Example #2
숫자 1.2를 0에 가까워지도록 반올림합니다.
```powerquery
Number.RoundTowardZero(1.2)
```

Result: 
```powerquery
1
```


### Example #3
숫자 -1.234를 소수점 이하 두 자리로 반올림합니다.
```powerquery
Number.RoundTowardZero(-1.234, 2)
```

Result: 
```powerquery
-1.23
```




## Category
Number.Rounding
