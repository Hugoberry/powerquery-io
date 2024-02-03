---
title: Text.Split
---

# Text.Split


## Description

Tekstas išskaidomas į tekstinių reikšmių sąrašą, atsižvelgiant į nurodytą skyriklį.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

Pateikiamas sąrašas tekstinių reikšmių, gautų išskaidžius tekstinę reikšmę <code>text</code>, atsižvelgiant į nurodytą skyriklį <code>separator</code>.


## Examples

### Example #1 
Sukurkite sąrašą iš „|“ atskirtos tekstinės reikšmės „Name|Address|PhoneNumber“.
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```




## Category
Text.Transformations
