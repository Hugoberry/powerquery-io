---
title: Number.Round
---

# Number.Round


## Description

A kerekített számot adja vissza. A számjegyek száma és a kerekítési mód beállítható.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Visszaadja a(z) <code>number</code> legközelebbi kerekítési eredményét. Ha <code>number</code> null, a <code>Number.Round</code> null értéket ad vissza.<br />      <br />      Alapértelmezés szerint a rendszer a(z) <code>number</code> legközelebbi egész számú kerekített értékét veszi, és a nem egyértelmű kerekítési helyzeteket a legközelebbi páros számra való kerekítéssel oldja fel (a <code>RoundingMode.ToEven</code>, vagyis az ún. „banki/bankári kerekítés“ használatával).<br />      <br />      Azonban ezek az alapértékek felülírhatók a következő választható paraméterekkel.      <ul>        <li><code>digits</code>: Hatására a rendszer a(z) <code>number</code> értékét a megadott számú tizedesjegyre kerekítve adja vissza.</li>        <li><code>roundingMode</code>: Felülírja az alapértelmezett döntetlen döntési viselkedést, ha <code>number</code> két potenciális kerekített érték közötti középpontban van       (a lehetséges értékekért lásd: <code>RoundingMode.Type</code>).</li>      </ul>


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
