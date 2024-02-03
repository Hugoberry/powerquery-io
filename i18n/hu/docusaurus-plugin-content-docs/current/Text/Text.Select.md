---
title: Text.Select
---

# Text.Select


## Description

Kiválasztja a megadott karakter vagy karakterlista összes előfordulását a bemeneti szöveges értékből.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Details

A(z) <code>text</code> szöveges érték olyan másolatát adja vissza, amelyből az összes nem <code>selectChars</code> karakter el van távolítva.  


## Examples

### Example #1 
A szöveges érték összes, az a-tól z-ig eső tartományban található karakterének kiválasztása.
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
