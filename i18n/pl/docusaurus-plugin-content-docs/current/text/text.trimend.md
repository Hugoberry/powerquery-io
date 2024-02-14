---
title: Text.TrimEnd
---

# Text.TrimEnd


Usuwa wszystkie spacje końcowe.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Remarks

Zwraca wynik usunięcia wszystkich spacji końcowych z wartości tekstowej <code>text</code>.


## Examples

### Example #1 
Usuń spacje końcowe z wartości „     a b c d    ”.
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
