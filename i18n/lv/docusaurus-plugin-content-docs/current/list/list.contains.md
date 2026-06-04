---
title: List.Contains
---

# List.Contains


Tiek norādīts, vai sarakstā ir ietverta konkrētā vērtība.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Tiek norādīts, vai sarakstā ir ietverta konkrētā vērtība. Tiek atgriezts `true`, ja vērtība ir atrasta sarakstā, `false` pretējā gadījumā.

-   `list`: saraksts, kurā jāmeklē.
-   `value`: vērtība, kas jāmeklē sarakstā.
-   `equationCriteria`: (Neobligāts) Salīdzinātājs, kas tiek izmantots, lai noteiktu, vai divas vērtības ir vienādas.


## Examples

### Example #1
Nosaka, vai saraksts \{1, 2, 3, 4, 5\} satur 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Nosaka, vai saraksts \{1, 2, 3, 4, 5\} satur 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Ignorējot reģistru, noteikt, vai sarakstā ir “rabarbers”.
```powerquery
List.Contains({"Pears", "Bananas", "Rhubarb", "Peaches"},
    "rhubarb",
    Comparer.OrdinalIgnoreCase
)
```

Result: 
```powerquery
true
```


### Example #4
Nosakiet, vai sarakstā ir datums 2022. gada 8. aprīlis.
```powerquery
let
    Source = {#date(2024, 2, 23), #date(2023, 12, 2), #date(2022, 4, 8), #date(2021, 7, 6)},
    ContainsDate = List.Contains(Source, Date.From("4/8/2022"))
in
    ContainsDate
```

Result: 
```powerquery
true
```




## Category
List.Membership functions
