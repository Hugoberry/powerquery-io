---
title: Text.Select
---

# Text.Select


Kiválasztja a megadott karakter vagy karakterlista összes előfordulását a bemeneti szöveges értékből.


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

A(z) `text` szöveges érték olyan másolatát adja vissza, amelyből az összes nem `selectChars` karakter el van távolítva.


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
