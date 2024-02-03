---
title: Text.TrimEnd
---

# Text.TrimEnd


## Description

Eltávolítja az összes záró szóközt.


## Syntax

```powerquery
Text.TrimEnd(
    text as text,
    optional trim as any
) as text
```


## Details

A(z) <code>text</code> szöveges értékből az összes záró szóköz eltávolításával előállított eredményt adja vissza.


## Examples

### Example #1 
A záró szóközök eltávolítása a „     a b c d    ” szövegből
```powerquery
Text.TrimEnd("     a b c d    ")
```

Result: 
```powerquery
"     a b c d"
```




## Category
Text.Transformations
