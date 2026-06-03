---
title: Text.Start
---

# Text.Start


Trả về phần đầu văn bản.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

Trả về `count` ký tự đầu tiên của `text` ở dạng giá trị văn bản.


## Examples

### Example #1
Nhận 5 ký tự đầu tiên của văn bản "Hello, World".
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```


### Example #2
Sử dụng bốn ký tự đầu tiên của tên và ba ký tự đầu tiên của họ để tạo địa chỉ email của một cá nhân.
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
