---
title: Text.Lower
---

# Text.Lower


Converteşte toate caracterele în litere mici.


## Syntax

```powerquery
Text.Lower(
    text as text,
    optional culture as text
) as text
```


## Remarks

Returnează rezultatul conversiei tuturor caracterelor din `text` la litere mici. De asemenea, poate fi furnizat un parametru `culture` opțional (de exemplu, „ro-RO”).


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
