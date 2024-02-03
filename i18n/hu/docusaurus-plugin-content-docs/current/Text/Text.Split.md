---
title: Text.Split
---

# Text.Split


## Description

Felosztja a szöveget szöveges értékek listájára a megadott elválasztó alapján.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

Szöveges értékek olyan listáját adja vissza, amely a(z) <code>text</code> szöveges értéknek a megadott <code>separator</code> elválasztó alapján történő felosztásának eredménye.


## Examples

### Example #1 
Lista létrehozása a „|” karakterrel elválasztott „Name|Address|PhoneNumber” szöveges értékből
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
