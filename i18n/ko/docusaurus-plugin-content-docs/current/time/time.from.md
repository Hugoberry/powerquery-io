---
title: Time.From
---

# Time.From


지정된 값에서 시간을 만듭니다.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Remarks

지정된 `value`에서 `time` 값을 반환합니다. 선택적 `culture`(예: “en-US”)이(가) 제공될 수도 있습니다. 지정된 `value`이(가) `null`이면 `Time.From`이 `null`을 반환합니다. 지정된 `value`이(가) `time`이면 `value`이(가) 반환됩니다. 다음 형식의 값은 `time` 값으로 변환할 수 있습니다.

-   `text`: 텍스트 표현의 `time` 값. 자세한 내용은 `Time.FromText`를 참조하세요.
-   `datetime`: `value`의 시간 구성 요소.
-   `datetimezone`: `value`의 현지 날짜/시간에 해당하는 값의 시간 구성 요소.
-   `number`: `value`(으)로 표현되는 소수 일 수에 해당하는 `time`. `value`이(가) 음수이거나 1보다 크거나 같으면 오류가 반환됩니다.

`value`이(가) 기타 형식이면 오류가 반환됩니다.


## Examples

### Example #1
`0.7575`를 `time` 값으로 변환합니다.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2
`#datetime(1899, 12, 30, 06, 45, 12)`을 `time` 값으로 변환합니다.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
