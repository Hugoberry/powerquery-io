---
title: Text.ToList
---

# Text.ToList


Restituisce un elenco di valori di carattere dal valore di testo specificato.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Restituisce un elenco di valori di carattere dal valore di testo specificato `text`.


## Examples

### Example #1
Creare un elenco di valori di carattere dal testo "Hello World".
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
