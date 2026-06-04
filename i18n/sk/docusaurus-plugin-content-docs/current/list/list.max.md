---
title: List.Max
---

# List.Max


Vráti maximálnu hodnotu alebo predvolenú hodnotu pre prázdny zoznam.


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

Vráti maximálnu položku v zozname alebo voliteľnú predvolenú hodnotu, ak je zoznam prázdny.

-   `list`: Zoznam hodnôt.
-   `default`: (Voliteľné) Hodnota, ktorá sa vráti, ak je zoznam prázdny.
-   `comparisonCriteria`: (Voliteľné) Funkcia, ktorá sa používa na transformáciu hodnôt pred ich porovnaním. Ak je tento parameter `null`, hodnoty sa porovnajú bez transformácie.
-   `includeNulls`: (Voliteľné) Označuje, či sa hodnoty `null` v zozname majú zahrnúť do určovania maximálnej položky. Predvolená hodnota je `true`.


## Examples

### Example #1
Nájdite maximálnu hodnotu v zadanom zozname.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Nájdite maximálnu hodnotu v zadanom zozname alebo vráťte -1, ak je prázdny.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Nájdite položku v zozname textových hodnôt, ktorá je posledná v abecednom poradí. Ak je zoznam prázdny, vráťte hodnotu none.
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
Nájdite najnovší dátum zo zoznamu nemeckých dátumov. Ak je zoznam prázdny, vráťte hodnotu 1. januára 2000.
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
