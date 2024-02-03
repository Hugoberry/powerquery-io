---
title: Text.RemoveRange
---

# Text.RemoveRange


## Description

Eltávolítja a megadott darabszámú karaktert a megadott eltolásnál kezdve.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

A(z) <code>text</code> szöveges érték olyan másolatát adja vissza, amelyből az összes karakter el van távolítva a(z) <code>offset</code> pozíciótól kezdve.    A nem kötelező <code>count</code> paraméterrel megadható az eltávolítandó karakterek száma is. A(z) <code>count</code> alapértelmezett értéke 1. A pozíciók számozása 0-tól kezdődik.


## Examples

### Example #1 
1 karakter eltávolítása az „ABEFC” szöveges értékből a 2. pozícióból
```powerquery
Text.RemoveRange("ABEFC", 2)
```

Result: 
```powerquery
"ABFC"
```


### Example #2 
Két karakter eltávolítása az „ABEFC” szöveges értékből a 2. pozíciótól kezdődően
```powerquery
Text.RemoveRange("ABEFC", 2, 2)
```

Result: 
```powerquery
"ABC"
```




## Category
Text.Modification
