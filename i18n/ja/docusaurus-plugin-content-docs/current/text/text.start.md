---
title: Text.Start
---

# Text.Start


テキストの先頭を返します。


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

`text` の最初の `count` 文字をテキスト値として返します。


## Examples

### Example #1
"Hello, World" の最初の 5 文字を取得します。
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```


### Example #2
個人のメール アドレスを作成する場合は、名の最初の 4 文字と姓の最初の 3 文字を使用します。
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
