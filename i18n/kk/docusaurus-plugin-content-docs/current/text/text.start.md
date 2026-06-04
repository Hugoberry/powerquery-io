---
title: Text.Start
---

# Text.Start


Мәтіннің басын қайтарады.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

`text` бірінші `count` таңбасын мәтіндік мән ретінде қайтарады.


## Examples

### Example #1
"Сәлем, Әлем" мәтінінің бірінші 5 таңбасын алу.
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```


### Example #2
Тұлғаның электрондық пошта мекенжайын жасау үшін атының алғашқы төрт таңбасын және тегінің алғашқы үш таңбасын пайдаланыңыз.
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
