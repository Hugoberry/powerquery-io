---
title: Text.ToList
---

# Text.ToList


## Description

Retourneert een lijst met tekenwaarden uit de opgegeven tekstwaarde.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

Retourneert een lijst met tekenwaarden uit de opgegeven tekstwaarde <code>text</code>.


## Examples

### Example #1 
Een lijst met tekenwaarden van de tekst &#34;Hallo Wereld&#34; maken.
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
