---
title: Number.Round
---

# Number.Round


A kerekített számot adja vissza. A számjegyek száma és a kerekítési mód beállítható.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Visszaadja a(z) `number` legközelebbi kerekítési eredményét. Ha `number` null, a `Number.Round` null értéket ad vissza.  
  
Alapértelmezés szerint a rendszer a(z) `number` legközelebbi egész számú kerekített értékét veszi, és a nem egyértelmű kerekítési helyzeteket a legközelebbi páros számra való kerekítéssel oldja fel (a `RoundingMode.ToEven`, vagyis az ún. „banki/bankári kerekítés“ használatával).  
  
Azonban ezek az alapértékek felülírhatók a következő választható paraméterekkel.

-   `digits`: Hatására a rendszer a(z) `number` értékét a megadott számú tizedesjegyre kerekítve adja vissza.
-   `roundingMode`: Felülírja az alapértelmezett döntetlen döntési viselkedést, ha `number` két potenciális kerekített érték közötti középpontban van (a lehetséges értékekért lásd: `RoundingMode.Type`).


## Examples

### Example #1
Az 1,234 szám kerekítése a legközelebbi egész számra
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Az 1,56 szám kerekítése a legközelebbi egész számra
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3
Az 1,2345 szám kerekítése két tizedesjegyre
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4
Az 1,2345 szám kerekítése három tizedesjegyre (felfelé kerekítés)
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5
Az 1,2345 szám kerekítése három tizedesjegyre (lefelé kerekítés)
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
