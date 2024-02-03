---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

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


## Details

Zwraca wynik usunięcia określonej liczby znaków (<code>count</code>) z wartości tekstowej <code>text</code>, zaczynając od pozycji <code>offset</code>, a następnie wstawienia wartości tekstowej <code>newText</code> na tej samej pozycji w wartości <code>text</code>.


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
