---
title: Number.RoundUp
---

# Number.RoundUp


다음의 가장 큰 정수를 반환합니다. 자릿수를 지정할 수 있습니다.


## Syntax

```powerquery
Number.RoundUp(
    number as number,
    optional digits as number
) as number
```


## Remarks

`number`을(를) 다음으로 높은 정수로 반올림한 결과를 반환합니다. `number`이(가) Null이면 이 함수는 Null을 반환합니다. `digits`이(가) 제공되면 `number`은(는) 지정된 소수 자릿수로 반올림됩니다.


## Examples

### Example #1
1.234를 정수로 반올림합니다.
```powerquery
Number.RoundUp(1.234)
```

Result: 
```powerquery
2
```


### Example #2
1.999를 정수로 반올림합니다.
```powerquery
Number.RoundUp(1.999)
```

Result: 
```powerquery
2
```


### Example #3
1.234를 소수점 이하 두 자리로 반올림합니다.
```powerquery
Number.RoundUp(1.234, 2)
```

Result: 
```powerquery
1.24
```




## Category
Number.Rounding
