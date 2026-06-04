---
title: Comparer.Equals
---

# Comparer.Equals


A két megadott érték egyenlőségének ellenőrzésén alapuló logikai érték visszaadása.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Egy `logikai` értéket ad vissza a két megadott érték (`x` és `y`) egyenlőségvizsgálata alapján a megadott `comparer` használatával.

A(z) `comparer` egy `összehasonlító`, amely az összehasonlítást szabályozza. Az összehasonlító olyan függvény, amely két argumentumot vár, és -1, 0 vagy 1 értéket ad vissza attól függően, hogy az első megadott érték a másodikhoz képest kisebb, azzal egyenlő vagy nagyobb. Az összehasonlítók a kis- és nagybetűket meg nem különböztető, illetve kulturális környezetet és területi beállítást figyelembe vevő összehasonlítások megadására használhatók.

A következő beépített összehasonlítók érhetők el a képletnyelvben:

-   `Comparer.Ordinal`: Pontos sorrendi összehasonlítás végrehajtására szolgál.
-   `Comparer.OrdinalIgnoreCase`: Kis- és nagybetűk megkülönböztetése nélküli, pontos sorrendi összehasonlítás végrehajtására szolgál.
-   `Comparer.FromCulture`: Kulturális környezetet figyelembe vevő összehasonlítás végrehajtására szolgál


## Examples

### Example #1
Az „1” és az „A” érték egyenlőségvizsgálata az „en-US” nyelv szerint.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
