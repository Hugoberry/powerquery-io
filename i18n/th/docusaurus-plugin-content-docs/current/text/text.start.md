---
title: Text.Start
---

# Text.Start


ส่งกลับจุดเริ่มต้นของข้อความ


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

ส่งกลับอักขระ `count` ตัวแรกของ `text` เป็นค่าข้อความ


## Examples

### Example #1
รับอักขระ 5 ตัวแรกของ "Hello, World"
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```


### Example #2
ใช้สี่ตัวอักษรแรกของชื่อและสามตัวอักษรแรกของนามสกุลเพื่อสร้างที่อยู่อีเมลของบุคคล
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
