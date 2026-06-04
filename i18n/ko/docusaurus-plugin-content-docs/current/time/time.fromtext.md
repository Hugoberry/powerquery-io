---
title: Time.FromText
---

# Time.FromText


현지 및 범용 및 사용자 지정 Time 형식에서 Time을 만듭니다.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

텍스트 표현 `text`의 `time` 값을 만듭니다. 추가 속성을 지정하기 위해 선택적 `record` 매개 변수 `options`이(가) 제공될 수 있습니다. `record`에는 다음 필드가 포함될 수 있습니다.

-   `Format`: 사용할 형식을 나타내는 `text` 값입니다. 자세한 내용은 https://go.microsoft.com/fwlink/?linkid=2180104 및 https://go.microsoft.com/fwlink/?linkid=2180105를 참조하세요. 이 필드를 생략하거나 `null`을 제공하면 최선을 다해 날짜를 구문 분석하게 됩니다.
-   `Culture`: `Format`이 null이 아니면 `Culture`가 일부 형식 지정자를 제어합니다. 예를 들어 `"en-US"`에서 `"tt"`는 `"AM" or "PM"`이지만, `"ar-EG"`에서는 `"tt"`가 `"ص" or "م"`입니다. `format`이 `null`이면 `Culture`는 사용할 기본 형식을 제어합니다. `Culture`가 `null`이거나 생략된 경우, `Culture.Current`가 사용됩니다.

레거시 워크플로를 지원하기 위해, `options`은(는) 텍스트 값일 수도 있습니다. 이는 `options = [Format = null, Culture = options]`인 경우와 동작이 동일합니다.


## Examples

### Example #1
`"10:12:31am"`을 Time 값으로 변환합니다.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
`"1012"`를 시간 값으로 변환합니다.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
`"10"`을 시간 값으로 변환합니다.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
