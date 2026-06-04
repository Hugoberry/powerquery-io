---
title: List.ContainsAny
---

# List.ContainsAny


Tiek norādīts, vai sarakstā ir ietverta kāda no cita saraksta vērtībām.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Norāda, vai sarakstā ir kāda no cita saraksta vērtībām. Tiek atgriezts `true`, ja vērtības ir atrastas sarakstā, `false` pretējā gadījumā.

-   `list`: saraksts, kurā jāmeklē.
-   `values`: Vērtību saraksts, kas jāmeklē pirmajā sarakstā.
-   `equationCriteria`: (Neobligāts) Salīdzinātājs, kas tiek izmantots, lai noteiktu, vai divas vērtības ir vienādas.


## Examples

### Example #1
Nosaka, vai saraksts \{1, 2, 3, 4, 5\} satur 3 un 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Nosaka, vai saraksts \{1, 2, 3, 4, 5\} satur 6 un 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Nosakiet, vai sarakstā ir zirgs vai pūce, ignorējot lielos un mazos burtus.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Nosakiet, vai sarakstā ir datums 2022. gada 8. aprīlis vai 2021. gada 12. janvāris.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDates = List.ContainsAny(Source, {Date.From("Apr 8, 2022"), Date.From("Jan 11, 2021")})
in
    ContainsDates
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
