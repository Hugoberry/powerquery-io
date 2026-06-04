---
title: Number.From
---

# Number.From


지정된 값에서 number를 만듭니다.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

지정된 `value`에서 `number` 값을 반환합니다. 선택적 `culture`(예: “en-US”)이(가) 제공될 수도 있습니다. 지정된 `value`이(가) `null`이면 `Number.From`은 `null`을 반환합니다. 지정된 `value`이(가) `number`이면 `value`이(가) 반환됩니다. 다음 형식의 값을 `number` 값으로 변환할 수 있습니다.

-   `text`: 텍스트 표현에서 `number` 값으로 변환할 수 있습니다. “15”, “3,423.10”, “5.0E-10” 같은 일반 텍스트 형식이 처리됩니다. 자세한 내용은 `Number.FromText`를 참조하세요.
-   `logical`: `true`의 경우 1로 변환되고, `false`의 경우 0으로 변환됩니다.
-   `datetime`: OLE 자동화 날짜에 해당하는 값이 포함된 배정밀도 부동 소수점 숫자로 변환할 수 있습니다.
-   `datetimezone`: 현지 날짜 및 시간 `value`의 OLE 자동화 날짜에 해당하는 값이 포함된 배정밀도 부동 소수점 숫자로 변환할 수 있습니다.
-   `date`: OLE 자동화 날짜에 해당하는 값이 포함된 배정밀도 부동 소수점 숫자로 변환할 수 있습니다.
-   `time`: 소수 일 수로 표현됩니다.
-   `duration`: 정수 및 소수 일 수로 표현됩니다.

`value`이(가) 기타 형식이면 오류가 반환됩니다.


## Examples

### Example #1
`"4"`의 `number` 값을 가져옵니다.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
`#datetime(2020, 3, 20, 6, 0, 0)`의 `number` 값을 가져옵니다.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
`"12.3%"`의 `number` 값을 가져옵니다.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
