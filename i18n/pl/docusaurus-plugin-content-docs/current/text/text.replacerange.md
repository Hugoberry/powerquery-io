---
title: Text.ReplaceRange
---

# Text.ReplaceRange


Usuwa zakres znaków i wstawia nową wartość na określonej pozycji.


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

Zwraca wynik usunięcia określonej liczby znaków (`count`) z wartości tekstowej `text`, zaczynając od pozycji `offset`, a następnie wstawienia wartości tekstowej `newText` na tej samej pozycji w wartości `text`.


## Examples

### Example #1
Zamień jeden znak na pozycji 2 w wartości tekstowej „ABGF” na nową wartość „CDE”.
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
