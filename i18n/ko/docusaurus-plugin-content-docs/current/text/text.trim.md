---
title: Text.Trim
---

# Text.Trim


지정된 선행 및 후행 문자를 모두 제거합니다.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Remarks

지정된 `text`에서 선행 및 후행 문자를 모두 제거한 결과를 반환합니다. 기본적으로 선행 및 후행 공백 문자는 모두 제거됩니다.

-   `text`: 선행 및 후행 문자를 제거할 텍스트입니다.
-   `trim`: 기본적으로 트리밍되는 공백 문자를 재정의합니다. 이 매개 변수는 단일 문자 또는 단일 문자 목록일 수 있습니다. 트리밍되지 않은 문자가 발견되면 각 선행 및 후행 트리밍 작업이 중지됩니다.


## Examples

### Example #1
" a b c d "에서 선행 및 후행 공백을 제거합니다.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```


### Example #2
숫자의 텍스트 표현에서 선행 및 후행 0을 제거합니다.
```powerquery
Text.Trim("0000056.4200", "0")
```

Result: 
```powerquery
"56.42"
```


### Example #3
HTML 태그에서 선행 및 후행 대괄호를 제거합니다.
```powerquery
Text.Trim("<div/>", {"<", ">", "/"})
```

Result: 
```powerquery
"div"
```


### Example #4
보류 중인 판매 상태 주위에 사용되는 특수 문자를 제거합니다.
```powerquery
let
    Source = #table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
    {
        {"1620 Ferris Way", #date(2024, 8, 22), "##@@Pending@@##"},
        {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
        {"22303 Fillmore", #date(2024, 10, 2), "##@@Pending@@##"}
    }),
    #"Trimmed Status" = Table.TransformColumns(Source, {"Sales Status", each Text.Trim(_, {"#", "@"})})
in
    #"Trimmed Status"
```

Result: 
```powerquery
#table(type table [Home Sale = text, Sales Date = date, Sales Status = text],
{
    {"1620 Ferris Way", #date(2024, 8, 22), "Pending"},
    {"757 1st Ave. S.", #date(2024, 3, 15), "Sold"},
    {"22303 Fillmore", #date(2024, 10, 2), "Pending"}
})
```




## Category
Text.Transformations
