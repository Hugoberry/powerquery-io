---
title: Text.Lower
---

# Text.Lower


## Description

Converteşte toate caracterele în litere mici.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Details

Returnează rezultatul conversiei tuturor caracterelor din <code>text</code> la litere mici. De asemenea, poate fi furnizat un parametru <code>culture</code> opțional (de exemplu, „ro-RO”).


## Examples

### Example #1 
Obţineţi versiunea în litere mici pentru „AbCd”.
```powerquery
Text.Lower("AbCd")
```

Result: 
```powerquery
"abcd"
```




## Category
Text.Transformations
