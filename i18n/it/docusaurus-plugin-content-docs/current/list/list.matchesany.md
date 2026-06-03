---
title: List.MatchesAny
---

# List.MatchesAny


Restituisce true se la funzione di condizione viene soddisfatta da qualsiasi valore.


## Syntax

```powerquery
List.MatchesAny(
    list as list,
    condition as function
) as logical
```


## Remarks

Restituisce `true` se la funzione di condizione viene soddisfatta da uno dei valori dell'elenco; in caso contrario restituisce `false`.

-   `list`: l'elenco contenente i valori da controllare.
-   `condition`: la condizione da verificare rispetto ai valori nell'elenco.


## Examples

### Example #1
Determinare se uno dei valori dell'elenco \{9, 10, 11\} è maggiore di 10.
```powerquery
List.MatchesAny({9, 10, 11}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Determinare se uno dei valori dell'elenco \{1, 2, 3\} è maggiore di 10.
```powerquery
List.MatchesAny({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Determinare se uno dei valori di testo nell'elenco contiene "cat" ignorando la distinzione tra maiuscole e minuscole.
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
Determinare se una delle date contiene l'anno 2021.
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
