---
title: Text.ToList
---

# Text.ToList


Retourneert een lijst met tekenwaarden uit de opgegeven tekstwaarde.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Retourneert een lijst met tekenwaarden uit de opgegeven tekstwaarde `text`.


## Examples

### Example #1
Een lijst met tekenwaarden van de tekst "Hallo Wereld" maken.
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
