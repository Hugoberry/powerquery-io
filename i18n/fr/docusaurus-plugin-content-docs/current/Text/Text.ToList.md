---
title: Text.ToList
---

# Text.ToList


## Description

Retourne une liste de valeurs de caractère depuis la valeur de texte spécifiée.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

Retourne une liste de valeurs de caractère depuis la valeur de texte spécifiée <code>text</code>.


## Examples

### Example #1 
Crée une liste de valeurs de caractère à partir du texte &#34; Hello World &#34;.
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
