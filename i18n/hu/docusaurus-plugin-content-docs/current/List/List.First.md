---
title: List.First
---

# List.First


## Description

A lista első értékét adja vissza, vagy pedig a megadott alapértéket, ha üres.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

A(z) <code>list</code> lista első elemét adja vissza, vagy pedig a nem kötelező alapértéket (<code>defaultValue</code>), ha a lista üres.    Ha a lista üres, és nincs megadva alapértelmezett érték, a függvény <code>null</code> értéket ad vissza.


## Examples

### Example #1 
Az \{1, 2, 3} lista első értékének megkeresése
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
A \{} lista első értékének megkeresése. Ha a lista üres, -1-et ad vissza.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
