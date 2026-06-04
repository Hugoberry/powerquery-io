---
title: Text.From
---

# Text.From


지정된 값에서 텍스트 값을 만듭니다.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

지정한 값의 텍스트 표현을 반환합니다.

-   `value`: 텍스트로 변환할 값입니다. 값은 `number`, `date`, `time`, `datetime`, `datetimezone`, `logical`, `duration` 또는 `binary` 값일 수 있습니다. 지정된 값이 `null`인 경우 이 함수는 `null`을 반환합니다.
-   `culture`: (선택 사항) 값을 텍스트로 변환할 때 사용할 문화권입니다(예: "en-US").


## Examples

### Example #1
숫자 3에서 텍스트 값을 만듭니다.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
지정한 날짜 및 시간에 해당하는 텍스트를 가져옵니다.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
지정한 날짜 및 시간에 해당하는 독일어 텍스트를 가져옵니다.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
16진수로 인코딩된 텍스트에서 이진 값을 가져오고 값을 텍스트로 다시 변경합니다.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
테이블에 프랑스 데이터가 들어 있는 행을 가져오고 프랑스 문화권을 사용하여 날짜를 텍스트로 변환합니다.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Convert Dates" = Table.TransformColumns(
        Table.SelectRows(Source, each [Country] = "France"),
        {"Date", each Text.From(_, "fr-FR")}
    )
in
    #"Convert Dates"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"LT-331", "France", "05/10/2024"},
    {"LS-005", "France", "31/12/2023"}
})
```




## Category
Text.Conversions from and to text
