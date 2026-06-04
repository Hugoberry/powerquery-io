---
title: DateTime.From
---

# DateTime.From


지정된 값에서 datetime을 만듭니다.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Remarks

지정된 `value`에서 `datetime` 값을 반환합니다. 선택적 `culture`(예: “en-US”)이(가) 제공될 수도 있습니다. 지정된 `value`이(가) `null`이면 `DateTime.From`은 `null`을 반환합니다. 지정된 `value`이(가) `datetime`이면 `value`이(가) 반환됩니다. 다음 형식의 값을 `datetime` 값으로 변환할 수 있습니다.

-   `text`: 텍스트 표현에서 `datetime` 값으로 변환할 수 있습니다. 자세한 내용은 `DateTime.FromText`를 참조하세요.
-   `date`: 날짜 구성 요소로 `value`을(를) 사용하고 시간 구성 요소로 `12:00:00 AM`을 사용하여 `datetime`으로 변환할 수 있습니다.
-   `datetimezone`: `value`에 해당하는 현지 `datetime`으로 변환할 수 있습니다.
-   `time`: 날짜 구성 요소로 OLE 자동화 날짜 `0`에 해당하는 날짜를 사용하고 시간 구성 요소로 `value`을(를) 사용하여 `datetime`으로 변환할 수 있습니다.
-   `number`: `value`(으)로 표현되는 OLE 자동화 날짜에 해당하는 `datetime`으로 변환할 수 있습니다.

`value`이(가) 기타 형식이면 오류가 반환됩니다.


## Examples

### Example #1
`#time(06, 45, 12)`를 `datetime` 값으로 변환합니다.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2
`#date(1975, 4, 4)`를 `datetime` 값으로 변환합니다.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
