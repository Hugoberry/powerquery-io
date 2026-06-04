---
title: Text.TrimStart
---

# Text.TrimStart


지정된 선행 문자를 모두 제거합니다.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

지정된 `text`에서 모든 선행 문자를 제거한 결과를 반환합니다. 기본적으로 선행 공백 문자는 모두 제거됩니다.

-   `text`: 선행 문자를 제거할 텍스트입니다.
-   `trim`: 기본적으로 트리밍되는 공백 문자를 재정의합니다. 이 매개 변수는 단일 문자 또는 단일 문자 목록일 수 있습니다. 트리밍되지 않은 문자가 발견되면 각 선행 자르기 작업이 중지됩니다.


## Examples

### Example #1
" a b c d "에서 선행 공백을 제거합니다.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```


### Example #2
숫자의 텍스트 표현에서 선행 0을 제거합니다.
```powerquery
Text.TrimStart("0000056.420", "0")
```

Result: 
```powerquery
"56.420"
```


### Example #3
고정 너비 계정 이름에서 선행 안쪽 여백 문자를 제거합니다.
```powerquery
let
    Source = #table(type table [Name = text, Account Name= text, Interest = number],
    {
        {"Bob", "@****847263-US", 2.8410},
        {"Leslie", "@******4648-FR", 3.8392},
        {"Ringo", "@***2046790-DE", 12.6600}
    }),
    #"Trimmed Account" = Table.TransformColumns(Source, {{"Account Name", each Text.TrimStart(_, {"*", "@"})}})
in
    #"Trimmed Account"
```

Result: 
```powerquery
#table(type table [Name = text, Account Name = text, Interest = number],
{
    {"Bob", "847263-US", 2.841},
    {"Leslie", "4648-FR", 3.8392},
    {"Ringo", "2046790-DE", 12.66}
})
```




## Category
Text.Transformations
