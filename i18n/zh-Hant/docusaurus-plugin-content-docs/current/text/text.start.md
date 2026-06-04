---
title: Text.Start
---

# Text.Start


傳回文字的開頭。


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

將 `text` 的前 `count` 個字元傳回成文字值。


## Examples

### Example #1
取得 "Hello, World" 的前 5 個字元。
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```


### Example #2
使用名字的前四個字元和姓氏的前三個字元來建立個人的電子郵件位址。
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
