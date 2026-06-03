---
title: List.Contains
---

# List.Contains


Indica se l'elenco contiene il valore.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica se l'elenco contiene il valore specificato. Restituisce `true` se il valore è presente nell'elenco, `false` in caso contrario.

-   `list`: elenco da cercare.
-   `value`: valore da cercare nell'elenco.
-   `equationCriteria`: (opzione facoltativa) operatore di confronto utilizzato per determinare se due valori sono uguali.


## Examples

### Example #1
Determinare se l'elenco \{1, 2, 3, 4, 5\} contiene 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Determinare se l'elenco \{1, 2, 3, 4, 5\} contiene 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Senza distinzione tra maiuscole e minuscole, determinare se l'elenco contiene "rhubarb".
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
Determinare se l'elenco contiene la data 8 aprile 2022.
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
