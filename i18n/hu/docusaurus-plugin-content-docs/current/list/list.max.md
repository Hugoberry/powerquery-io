---
title: List.Max
---

# List.Max


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


## Remarks

A lista maximális elemét adja vissza, vagy ha a lista üres, akkor a választható alapértelmezett értéket.

-   `list`: Értékek listája.
-   `default`: (Nem kötelező) Az az érték, amelyet akkor ad vissza, ha a lista üres.
-   `comparisonCriteria`: (Nem kötelező) Egy függvény, amely az értékeket átalakítja az összehasonlítás előtt. Ha ez a paraméter `null`, akkor az értékeket átalakítás nélkül hasonlítja össze.
-   `includeNulls`: (Nem kötelező) Megadja, hogy a lista `null` értékei szerepeljenek-e a maximális elem meghatározásában. Az alapértelmezett érték `true`.


## Examples

### Example #1
Keresse meg a megadott lista legnagyobb értékét.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Keresse meg a megadott lista legnagyobb értékét, vagy adjon vissza -1-et, ha a lista üres.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Keresse meg az ábécé szerint utolsó elemet a szöveges értékek listájában. Ha a lista üres, adja vissza a „none” értéket.
```powerquery
let
    Source = {"boy", "dog", "girl", "zebra", "cat", "mouse", "rabbit"},
    MaxText = List.Max(Source, "none")
in
    MaxText
```

Result: 
```powerquery
"zebra"
```


### Example #4
Keresse meg a legfrissebb dátumot a német dátumok listájából. Ha a lista üres, adja vissza a „2000 január 1.” értéket.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.Max(Source, #date(2000, 1, 1), each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
"15.05.2025"
```




## Category
List.Ordering
