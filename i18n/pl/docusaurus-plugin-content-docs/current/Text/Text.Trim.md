---
title: Text.Trim
---

# Text.Trim


## Description

Usuwa wszystkie spacje wiodące i końcowe.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

Zwraca wynik usunięcia wszystkich spacji wiodących i końcowych z wartości tekstowej <code>text</code>.


## Examples

### Example #1 
Usuń spacje wiodące i końcowe z wartości „     a b c d    ”.
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
