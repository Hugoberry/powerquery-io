---
title: DateTimeZone.From
---

# DateTimeZone.From


지정된 값에서 datetimezone을 만듭니다.


## Syntax

```powerquery
DateTimeZone.From(
    value as any,
    optional culture as text
) as datetimezone
```


## Remarks

지정된 값에서 `datetimezone`을 만듭니다.

-   `value`: `datetimezone`을 만드는 데 사용되는 값입니다.
-   `culture`: (선택 사항) 값을 변환할 때 사용할 문화권입니다(예: "en-US").

다음 형식의 값은 `datetimezone` 값으로 변환될 수 있습니다.

-   `text`: 텍스트 표현에서 `datetimezone` 값을 반환합니다. 자세한 내용은 `DateTimeZone.FromText`를 참조하세요.
-   `date`: 날짜 구성 요소로 `value`과(와) 함께 `datetimezone`, 시간 구성 요소로 `12:00:00 am` 그리고 현지 표준 시간대에 해당하는 오프셋을 반환합니다.
-   `datetime`: 날짜/시간 구성 요소로 `value`과(와) 함께 `datetimezone` 그리고 현지 표준 시간대에 해당하는 오프셋을 반환합니다.
-   `datetimezone`: `value`을(를) 반환합니다.
-   `time`: 날짜 구성 요소로 `0`의 OLE 자동화 날짜와 동일한 날짜로 `datetimezone`, 시간 구성 요소로 `value` 그리고 현지 표준 시간대에 해당하는 오프셋을 반환합니다. OLE 자동화 날짜는 정수 계열 구성 요소가 1899년 12월 30일 이전 또는 이후의 일 수를 나타내고, 소수점 구성 요소는 해당 날짜의 시간을 24로 나눈 값을 나타내는 부동 소수점 숫자로 구성되어 있습니다. 예를 들어, 1899년 12월 31일 자정은 1.0으로 표시됩니다. 1900년 1월 1일 오전 6시는 2.25로, 1899년 12월 29일 자정은 -1.0으로, 1899년 12월 29일 오전 6시는 -1.25로 표시됩니다. 기본값은 1899년 12월 30일 자정입니다. 최소값은 0100년 1월 1일 자정이고, 최대값은 9999년 12월 31일의 마지막 순간입니다.
-   `number`: `value`(으)로 표현된 OLE 자동화 날짜와 동일한 날짜/시간과 함께 `datetimezone` 그리고 현지 표준 시간대에 해당하는 오프셋을 반환합니다.
-   `null`: `null`을 반환합니다.

`value`이(가) 다른 유형이면 오류가 반환됩니다.  
  
현지 표준 시간대에 해당하는 오프셋 값은 온라인으로 실행하는 것과 달리 현지에서 이 기능을 실행할 때 다릅니다. 현지에서 실행하면 현지 표준 시간대가 반환됩니다. 온라인으로 실행하면 UTC 표준 시간대(+00:00)가 반환됩니다.


## Examples

### Example #1
날짜, 시간 및 표준 시간대의 텍스트 표현을 `datetimezone` 값으로 변환합니다.
```powerquery
DateTimeZone.From("2020-10-30T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2020, 10, 30, 01, 30, 00, -8, 00)
```


### Example #2
브라질(포르투갈어) 날짜, 시간 및 표준 시간대의 텍스트 표현을 `datetimezone` 값으로 변환합니다.
```powerquery
DateTimeZone.From("13 de agosto de 2025 15:43:00 -03:00", "pt-BR")
```

Result: 
```powerquery
#datetimezone(2025, 08, 13, 15, 43, 00, -3, 00)
```


### Example #3
2025년 1월 1일 오후 12시를 나타내는 숫자를 `datetimezone` 값으로 변환합니다. 결과의 표준 시간대는 예제가 현지에서 실행되는지 온라인에서 실행되는지에 따라 달라집니다.
```powerquery
DateTimeZone.From(45658.5)
```

Result: 
```powerquery
#datetimezone(2025, 01, 01, 12, 00, 00, 0, 00)
```




## Category
DateTimeZone
