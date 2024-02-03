---
title: Text.Split
---

# Text.Split


## Description

Razdeli besedilo v seznam besedilnih vrednosti glede na navedeno ločilo.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

Vrne seznam besedilnih vrednosti, ki nastane z razdelitvijo besedilne vrednosti <code>text</code> glede na navedeno ločilo, <code>separator</code>.


## Examples

### Example #1 
Ustvarite seznam iz besedilne vrednosti &#34;Name|Address|PhoneNumber&#34;, ločene z &#34;|&#34;.
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
