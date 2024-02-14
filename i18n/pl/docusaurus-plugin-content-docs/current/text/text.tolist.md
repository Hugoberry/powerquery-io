---
title: Text.ToList
---

# Text.ToList


Zwraca listę wartości znakowych z danej wartości tekstowej.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Zwraca listę wartości znakowych z danej wartości tekstowej <code>text</code>.


## Examples

### Example #1 
Utwórz listę wartości znakowych na podstawie tekstu „Hello World”.
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
