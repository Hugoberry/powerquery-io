---
title: Text.RemoveRange
---

# Text.RemoveRange


Eltávolítja a megadott darabszámú karaktert a megadott eltolásnál kezdve.


## Syntax

```powerquery
Text.RemoveRange(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

A(z) `text` szöveges érték olyan másolatát adja vissza, amelyből az összes karakter el van távolítva a(z) `offset` pozíciótól kezdve. A nem kötelező `count` paraméterrel megadható az eltávolítandó karakterek száma is. A(z) `count` alapértelmezett értéke 1. A pozíciók számozása 0-tól kezdődik.


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
