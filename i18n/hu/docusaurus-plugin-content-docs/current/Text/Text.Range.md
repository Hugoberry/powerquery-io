---
title: Text.Range
---

# Text.Range


## Description

Visszaadja az eltolásnál talált sztringrészletet.


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Details

A(z) <code>text</code> szöveg <code>offset</code> eltolásánál található sztringrészletet adja vissza.    A nem kötelező <code>count</code> paraméterrel meghatározhatja, hogy a függvény hány karaktert adjon vissza. Hibát jelez, ha nincs elég karakter.


## Examples

### Example #1 
Megkeresi a „Hello World” szövegben a 6-os indexpozíciónál kezdődő sztringrészletet.
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
Megkeresi a „Hello World Hello” szövegben a 6-os indexpozíciónál kezdődő és 5 karakterre kiterjedő sztringrészletet.
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
