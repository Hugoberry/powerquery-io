---
title: Text.ToList
---

# Text.ToList


Tiek atgriezts rakstzīmju vērtību saraksts no sniegtās teksta vērtības.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

Tiek atgriezts rakstzīmju vērtību saraksts no sniegtās teksta vērtības `text`.


## Examples

### Example #1
Izveidojiet rakstzīmju vērtību sarakstu no teksta Hello World.
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
