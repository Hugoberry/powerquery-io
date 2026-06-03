---
title: Text.Start
---

# Text.Start


Returns the start of the text.


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

Returns the first `count` characters of `text` as a text value.


## Examples

### Example #1
Get the first 5 characters of "Hello, World".
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```


### Example #2
Use the first four characters of the first name and the first three characters of the last name to create an individual's email address.
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
