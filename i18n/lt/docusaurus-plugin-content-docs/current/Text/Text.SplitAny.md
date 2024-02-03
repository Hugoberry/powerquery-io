---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Pateikiamas sąrašas tekstinių reikšmių, išskaidytų ties bet kuriais skyriklio simboliais.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Pateikiamas sąrašas tekstinių reikšmių, gautų išskaidžius tekstinę reikšmę <code>text</code>, atsižvelgiant į bet kokį simbolį nurodytame skyriklyje, <code>separators</code>.


## Examples

### Example #1 
Sukurkite sąrašą iš tekstinės reikšmės „Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com“.
```powerquery
Text.SplitAny("Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com", "|")
```

Result: 
```powerquery
{
    "Jamie",
    "Campbell",
    "Admin",
    "Adventure Works",
    "www.adventure-works.com"
}
```




## Category
Text.Transformations
