---
title: Text.ToList
---

# Text.ToList


Returnerar en lista med teckenvärden från det angivna textvärdet.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Returnerar en lista med teckenvärden från det angivna textvärdet `text`.


## Examples

### Example #1
Skapa en lista med teckenvärden från texten "Hello World".
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
