---
title: Text.TrimStart
---

# Text.TrimStart


Usuwa wszystkie spacje wiodące.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Remarks

Zwraca wynik usunięcia wszystkich spacji wiodących z wartości tekstowej <code>text</code>.


## Examples

### Example #1 
Usuń spacje wiodące z wartości „     a b c d    ”.
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
