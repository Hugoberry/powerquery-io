---
title: Text.Start
---

# Text.Start


텍스트 시작을 반환합니다.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

`text`의 처음 `count`개 문자를 텍스트 값으로 반환합니다.


## Examples

### Example #1
"Hello, World"의 처음 5개 문자를 가져옵니다.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```


### Example #2
이름의 처음 네 문자와 성의 처음 세 문자를 사용하여 개인의 전자 메일 주소를 만듭니다.
```powerquery
let
    Source = #table(type table [First Name = text, Last Name = text],
    {
        {"Douglas", "Elis"},
        {"Ana", "Jorayew"},
        {"Rada", "Mihaylova"}
    }),
    EmailAddress = Table.AddColumn(
        Source,
        "Email Address",
        each Text.Combine({
            Text.Start([First Name], 4),
            Text.Start([Last Name], 3),
            "@contoso.com"
        })
    )
in
    EmailAddress
```

Result: 
```powerquery
#table(type table [First Name = text, Last Name = text, Email Address = text],
{
    {"Douglas", "Elis", "DougEli@contoso.com"},
    {"Ana", "Jorayew", "AnaJor@contoso.com"},
    {"Rada", "Mihaylova", "RadaMih@contoso.com"}
})
```




## Category
Text.Extraction
