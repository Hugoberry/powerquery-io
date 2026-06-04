---
title: Text.Remove
---

# Text.Remove


Eltávolítja a megadott karakter vagy karakterlista összes előfordulását a bemeneti szöveges értékből.


## Syntax

```powerquery
Text.Remove(
    text as text,
    removeChars as any
) as text
```


## Remarks

A(z) `text` szöveges érték olyan másolatát adja vissza, amelyből a(z) `removeChars` összes karaktere el van távolítva.


## Examples

### Example #1
A , és a ; karakter eltávolítása a szöveges értékből
```powerquery
Text.Remove("a,b;c", {",",";"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
