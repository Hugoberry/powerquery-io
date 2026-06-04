---
title: Text.Upper
---

# Text.Upper


Converteşte toate caracterele în litere mari.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Remarks

Returnează rezultatul conversiei tuturor caracterelor din `text` în litere mari. De asemenea, poate fi furnizat un parametru `culture` opțional (de exemplu, „ro-RO”).


## Examples

### Example #1
Obţineţi versiunea în litere mari pentru „aBcD”.
```powerquery
Text.Upper("aBcD")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Transformations
