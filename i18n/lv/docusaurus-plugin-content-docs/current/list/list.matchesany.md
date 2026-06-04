---
title: List.MatchesAny
---

# List.MatchesAny


Tiek atgriezta vērtība True, ja kāda no vērtībām atbilst nosacījuma funkcijai.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Tiek atgriezta vērtība `true`, ja kāda no saraksta vērtībām atbilst nosacījuma funkcijai, pretējā gadījumā tiek atgriezta vērtība `false`.

-   `list`: Saraksts, kurā ir vērtības, kuras jāpārbauda.
-   `condition`: Nosacījums, kas jāpārbauda attiecībā uz saraksta vērtībām.


## Examples

### Example #1
Nosakiet, vai kāda no saraksta \{9, 10, 11\} vērtībām ir lielāka par 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Nosakiet, vai kāda no saraksta \{1, 2, 3\} vērtībām ir lielāka par 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Nosakiet, vai kāda no sarakstā iekļautajām teksta vērtībām satur "kaķis", ignorējot reģistru.
```powerquery
let
    Source = {"A Brown Fox", "A Loyal Dog", "A Curious Cat", "A Wild Horse", "A Rascally Rabbit"},
    Result = List.MatchesAny(Source, each Text.Contains(_, "cat", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
Nosakiet, vai kādā no datumiem ir 2021. gads.
```powerquery
let
    Source = {#date(2024, 11, 28), #date(2023, 1, 14), #date(2021, 12, 31), #date(2025, 7, 6)},
    Result = List.MatchesAny(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
