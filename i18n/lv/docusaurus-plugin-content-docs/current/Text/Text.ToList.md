---
title: Text.ToList
---

# Text.ToList


## Description

Tiek atgriezts rakstzīmju vērtību saraksts no sniegtās teksta vērtības.


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Details

Tiek atgriezts rakstzīmju vērtību saraksts no sniegtās teksta vērtības <code>text</code>.


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
