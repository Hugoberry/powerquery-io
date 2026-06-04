---
title: List.Last
---

# List.Last


A lista utolsó értékét adja vissza, vagy pedig a megadott alapértéket, ha üres.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

A megadott lista utolsó elemét adja vissza, vagy ha a lista üres, az opcionális alapértelmezett értéket.

-   `list`: A vizsgálandó lista.
-   `defaultValue`: (Nem kötelező) Az üres lista esetén visszaadandó alapértelmezett érték. Ha a lista üres és nincs megadva alapértelmezett érték, a függvény `null` értéket ad vissza.


## Examples

### Example #1
Az \{1, 2, 3\} lista utolsó értékének megkeresése
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
A \{\} lista utolsó értékének megkeresése, illetve -1 érték visszaadása, ha a lista üres
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
