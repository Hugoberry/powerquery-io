---
title: Text.TrimStart
---

# Text.TrimStart


## Description

Eltávolítja az összes kezdő szóközt.


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

A(z) <code>text</code> szöveges értékből az összes kezdő szóköz eltávolításával előállított eredményt adja vissza.


## Examples

### Example #1 
A kezdő szóközök eltávolítása a „     a b c d    ” szövegből
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
