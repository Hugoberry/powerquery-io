---
title: List.MaxN
---

# List.MaxN


A listán szereplő legnagyobb érték(ek)et adja vissza. Meg kell adni a visszaadandó értékek számát vagy egy szűrési feltételt.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

A megadott listában szereplő maximális érték(eke)t adja vissza. A sorok rendezése után választható paraméterekkel tovább szűrhető az eredmény.

-   `list`: Az értékek listája.
-   `countOrCondition`: Megadja a visszaadandó értékek számát vagy egy szűrőfeltételt. Ha számot ad meg, a rendszer legfeljebb `countOrCondition` elemből álló listát ad vissza csökkenő sorrendben. Ha feltételt ad meg, a visszaadott lista tartalmazza az összes, a feltételnek megfelelő elemet.
-   `comparisonCriteria`: (Nem kötelező) Egy függvény, amely az értékeket átalakítja az összehasonlítás előtt. Ha ez a paraméter `null`, akkor az értékeket átalakítás nélkül hasonlítja össze.
-   `includeNulls`: (Nem kötelező) Megadja, hogy a lista `null` értékei szerepeljenek-e a maximális elem meghatározásában. Az alapértelmezett érték `true`.


## Examples

### Example #1
Keresse meg a megadott lista 5 legnagyobb értékét.
```powerquery
List.MaxN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{8, 7, 5, 4, 3}
```


### Example #2
Keresse meg a 3 karakternél hosszabb szavakat.
```powerquery
List.MaxN(
    {"boy", "dog", "pony", "cat", "rabbit", "bat"},
    each Text.Length(_) > 3
)
```

Result: 
```powerquery
{"rabbit", "pony"}
```


### Example #3
Keresse meg a három legfrissebb dátumot a német dátumok listájából.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.MaxN(Source, 3, each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
{
    "15.05.2025",
    "16.01.2025",
    "12.02.2024"
}
```




## Category
List.Ordering
