---
title: List.Max
---

# List.Max


## Description

A legnagyobb értéket – vagy üres lista esetén az alapértelmezett értéket – adja vissza.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Details

A(z) <code>list</code> lista legnagyobb elemét – vagy üres lista esetén a nem kötelezően megadott <code>default</code> alapértelmezett értéket – adja vissza.     Megadható egy nem kötelező <code>comparisonCriteria</code> comparisonCriteria érték, amellyel meghatározható a lista elemeinek összehasonlítási módja. Ha ez a paraméter null értékű, a függvény az alapértelmezett összehasonlítót használja.


## Examples

### Example #1 
Az \{1, 4, 7, 3, -2, 5} lista legnagyobb elemének megkeresése
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2 
Az \{} lista legnagyobb elemének megkeresése, illetve -1 érték visszaadása, ha a lista üres 
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
