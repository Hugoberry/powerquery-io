---
title: Text.ToList
---

# Text.ToList


## Description

Vrne seznam vrednosti znakov iz dane besedilne vrednosti.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

Vrne seznam vrednosti znakov iz dane besedilne vrednosti <code>text</code>.


## Examples

### Example #1 
Ustvarite seznam vrednosti znakov iz besedila &#34;Hello World&#34;.
```powerquery
Text.ToList("Hello World")
```

Result: 
```powerquery
{
    "H",
    "e",
    "l",
    "l",
    "o",
    " ",
    "W",
    "o",
    "r",
    "l",
    "d"
}
```




## Category
Text.Conversions from and to text
