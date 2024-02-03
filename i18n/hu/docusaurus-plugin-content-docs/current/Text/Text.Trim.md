---
title: Text.Trim
---

# Text.Trim


## Description

Eltávolítja az összes kezdő és záró szóközt.


## Syntax

```powerquery
Text.Trim(
    text as text,
    optional trim as any
) as text
```


## Details

A(z) <code>text</code> szöveges értékből az összes kezdő és záró szóköz eltávolításával előállított eredményt adja vissza.


## Examples

### Example #1 
A kezdő és záró szóközök eltávolítása a „     a b c d    ” szövegből
```powerquery
Text.Trim("     a b c d    ")
```

Result: 
```powerquery
"a b c d"
```




## Category
Text.Transformations
