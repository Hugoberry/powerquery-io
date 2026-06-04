---
title: Text.ReplaceRange
---

# Text.ReplaceRange


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


## Remarks

Returnează rezultatul eliminării unui număr de caractere, `count`, din valoare text `text` începând de la poziţia `offset` şi al inserării valorii text `newText` în aceeaşi poziţie în `text`.


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
