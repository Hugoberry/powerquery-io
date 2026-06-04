---
title: Date.From
---

# Date.From


지정된 값에서 date를 만듭니다.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

지정된 값에서 날짜 값을 반환합니다.

-   `value`: 날짜로 변환할 값입니다. 지정된 값이 `null`인 경우 이 함수는 `null`을 반환합니다. 지정된 값이 `date`인 경우 `value`가 반환됩니다. 다음 형식의 값은 `date` 값으로 변환될 수 있습니다.
    -   `text`: 텍스트 표현의 `date` 값입니다. 자세한 내용은 `Date.FromText`를 참조하세요.
    -   `datetime`: `value`의 날짜 구성 요소입니다.
    -   `datetimezone`: `value`에 해당하는 현지 날짜/시간의 날짜 구성 요소입니다.
    -   `number`: 정수 계열 구성 요소가 1899년 12월 30일 자정 이전 또는 이후의 일 수를 나타내고, 소수점 구성 요소는 해당 날짜의 시간을 24로 나눈 값을 나타내는 부동 소수점 숫자의 날짜 구성 요소입니다. 예를 들어, 1899년 12월 31일 자정은 1.0으로 표시됩니다. 1900년 1월 1일 오전 6시는 2.25로, 1899년 12월 29일 자정은 -1.0으로, 1899년 12월 29일 오전 6시는 -1.25로 표시됩니다. 기본값은 1899년 12월 30일 자정입니다. 최소값은 0100년 1월 1일 자정이고, 최대값은 9999년 12월 31일의 마지막 순간입니다.
    -   `value`이(가) 다른 형식이면 오류가 반환됩니다.
-   `culture`: 지정된 값의 문화권입니다(예: "en-US").


## Examples

### Example #1
지정된 날짜 및 시간을 날짜 값으로 변환합니다.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
지정된 숫자를 날짜 값으로 변환합니다.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
게시된 날짜 열의 독일어 텍스트 날짜를 날짜 값으로 변환합니다.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 Januar 2023", 580},
        {"CA-8843", "18 Juli, 2023", 280},
        {"PA-1274", "12 Januar, 2022", 90},
        {"PA-4323", "14 April 2023", 187},
        {"US-1200", "14 Dezember, 2022", 350},
        {"PTY-507", "4 Juni, 2023", 110}
    }),
    #"Filtered rows" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.From(_, "de-DE"), type date}
    )
in
    #"Filtered rows"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2023, 7, 18), 280},
    {"PA-1274", #date(2022, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2022, 12, 14), 350},
    {"PTY-507", #date(2023, 6, 4), 110}
})
```




## Category
Date
