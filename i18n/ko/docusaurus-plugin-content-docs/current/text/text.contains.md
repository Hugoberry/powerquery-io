---
title: Text.Contains
---

# Text.Contains


텍스트에 부분 문자열이 포함되어 있는지 여부를 반환합니다.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

`text`에 `substring` 값이 포함되어 있는지 검색합니다. 값이 발견되면 true를 반환합니다. 이 함수는 와일드카드 또는 정규식을 지원하지 않습니다.  
  
선택적 인수 `comparer`을(를) 사용하여 대/소문자를 구분하지 않는 비교, 문화적 인식 비교 및 지역적 인식 비교를 지정할 수 있습니다. 다음 기본 제공 비교자를 수식 언어로 사용할 수 있습니다.

-   `Comparer.Ordinal`: 대/소문자를 구분하는 서수 비교하는 데 사용
-   `Comparer.OrdinalIgnoreCase`: 대/소문자를 구분하지 않는 서수를 비교하는 데 사용
-   `Comparer.FromCulture`: 문화적 인식을 비교하는 데 사용

첫 번째 인수가 null이면 이 함수는 null을 반환합니다.  
  
모든 문자는 문자 그대로 처리됩니다. 예를 들어 "DR", " DR", "DR ", " DR "은 서로 동일한 것으로 간주되지 않습니다.


## Examples

### Example #1
"Hello World" 텍스트에 "Hello"가 포함되어 있는지 여부를 찾습니다.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2
"Hello World" 텍스트에 "hello"가 포함되어 있는지 여부를 찾습니다.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3
대소문자를 구분하지 않는 비교자를 사용하여 "Hello World" 텍스트에 "hello"가 포함되어 있는지 확인합니다.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
계정 코드에서 "A-" 또는 "7"이 포함된 테이블에서 행을 찾습니다.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = date, Sales = number],
    {
        {"US-2004", #date(2023,1,20), 580},
        {"CA-8843", #date(2023,7,18), 280},
        {"PA-1274", #date(2022,1,12), 90},
        {"PA-4323", #date(2023,4,14), 187},
        {"US-1200", #date(2022,12,14), 350},
        {"PTY-507", #date(2023,6,4), 110}
    }),
    #"Filtered rows" = Table.SelectRows(
        Source,
        each Text.Contains([Account Code], "A-") or
            Text.Contains([Account Code], "7"))
in
    #"Filtered rows"
    
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"CA-8843", #date(2023,7,18), 280},
    {"PA-1274", #date(2022,1,12), 90},
    {"PA-4323", #date(2023,4,14), 187},
    {"PTY-507", #date(2023,6,4), 110}
})
    
```




## Category
Text.Membership
