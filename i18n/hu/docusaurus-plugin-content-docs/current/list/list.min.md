---
title: List.Min
---

# List.Min


A legkisebb értéket vagy üres lista esetén az alapértelmezett értéket adja vissza.


## Syntax

```powerquery
List.Min(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

A `list` lista legkisebb elemét, vagy üres lista esetén a nem kötelező `default` alapértelmezett értéket adja vissza. Megadható egy nem kötelező `comparisonCriteria` comparisonCriteria érték, amellyel meghatározható a lista elemeinek összehasonlítási módja. Ha ez a paraméter nullértékű, a függvény az alapértelmezett összehasonlítót használja.


## Examples

### Example #1
Az \{1, 4, 7, 3, -2, 5\} lista legkisebb elemének megkeresése
```powerquery
List.Min({1, 4, 7, 3, -2, 5})
```

Result: 
```powerquery
-2
```


### Example #2
Az \{\} lista legkisebb elemének megkeresése, illetve -1 érték visszaadása, ha a lista üres
```powerquery
List.Min({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Ordering
