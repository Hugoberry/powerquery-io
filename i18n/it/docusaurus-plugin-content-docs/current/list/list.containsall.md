---
title: List.ContainsAll
---

# List.ContainsAll


Indica se un elenco include tutti i valori di un altro elenco.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica se l'elenco include tutti i valori di un altro elenco. Restituisce `true` se tutti i valori sono presenti nell'elenco, `false` in caso contrario.

-   `list`: elenco da cercare.
-   `values`: elenco di valori da cercare nel primo elenco.
-   `equationCriteria`: (opzione facoltativa) operatore di confronto utilizzato per determinare se due valori sono uguali.


## Examples

### Example #1
Determinare se l'elenco \{1, 2, 3, 4, 5\} contiene 3 e 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Determinare se l'elenco \{1, 2, 3, 4, 5\} contiene 5 e 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Determinare se l'elenco contiene un cane e un cavallo, senza distinzione tra maiuscole e minuscole.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Determinare se l'elenco contiene le date 8 aprile 2022 e 6 luglio 2021.
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
