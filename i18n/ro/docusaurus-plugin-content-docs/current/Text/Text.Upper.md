---
title: Text.Upper
---

# Text.Upper


## Description

Converteşte toate caracterele în litere mari.


## Syntax

```powerquery
Text.Upper(
    text as text,
    optional culture as text
) as text
```


## Details

Returnează rezultatul conversiei tuturor caracterelor din <code>text</code> în litere mari. De asemenea, poate fi furnizat un parametru <code>culture</code> opțional (de exemplu, „ro-RO”).


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
