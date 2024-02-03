---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

Elimină un interval de caractere şi inserează o nouă valoare într-o poziţie specificată.


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Details

Returnează rezultatul eliminării unui număr de caractere, <code>count</code>, din valoare text <code>text</code> începând de la poziţia <code>offset</code> şi al inserării valorii text <code>newText</code> în aceeaşi poziţie în <code>text</code>.


## Examples

### Example #1 
Înlocuiţi un singur caracter în poziţia 2 în valoarea text „ABGF” cu o nouă valoare text „CDE”.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
