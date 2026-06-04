---
title: List.ContainsAll
---

# List.ContainsAll


Tiek norādīts, vai sarakstā ir ietvertas visas cita saraksta vērtības.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Norāda, vai saraksts satur visas vērtības no cita saraksta. Tiek atgriezts `true`, ja visas vērtības ir atrastas sarakstā, `false` pretējā gadījumā.

-   `list`: saraksts, kurā jāmeklē.
-   `values`: Vērtību saraksts, kas jāmeklē pirmajā sarakstā.
-   `equationCriteria`: (Neobligāts) Salīdzinātājs, kas tiek izmantots, lai noteiktu, vai divas vērtības ir vienādas.


## Examples

### Example #1
Nosaka, vai saraksts \{1, 2, 3, 4, 5\} satur 3 un 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Nosaka, vai saraksts \{1, 2, 3, 4, 5\} satur 5 un 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Nosakiet, vai sarakstā ir suns un zirgs, ignorējot lielos un mazos burtus.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Nosakiet, vai sarakstā ir datumi 2022. gada 8. aprīlis un 2021. gada 6. jūlijs.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAll(Source, {#date(2022, 4, 8), #date(2021, 7, 6)})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
