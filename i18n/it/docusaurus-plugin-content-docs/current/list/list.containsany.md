---
title: List.ContainsAny
---

# List.ContainsAny


Indica se un elenco include uno dei valori di un altro elenco.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica se l'elenco contiene uno dei valori di un altro elenco. Restituisce `true` se i valori sono presenti nell'elenco, `false` in caso contrario.

-   `list`: elenco da cercare.
-   `values`: elenco di valori da cercare nel primo elenco.
-   `equationCriteria`: (opzione facoltativa) operatore di confronto utilizzato per determinare se due valori sono uguali.


## Examples

### Example #1
Determinare se l'elenco \{1, 2, 3, 4, 5\} contiene 3 o 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Determinare se l'elenco \{1, 2, 3, 4, 5\} contiene 6 o 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Determinare se l'elenco contiene un cavallo o un gufo, senza distinzione tra maiuscole e minuscole.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Determinare se l'elenco contiene la data 8 aprile 2022 o 12 gennaio 2021.
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
