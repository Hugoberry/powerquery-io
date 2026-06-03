---
title: List.MatchesAll
---

# List.MatchesAll


Restituisce true se la funzione di condizione viene soddisfatta da tutti i valori dell'elenco.


## Syntax

```powerquery
List.MatchesAll(
    list as list,
    condition as function
) as logical
```


## Remarks

Restituisce `true` se la funzione di condizione viene soddisfatta da tutti i valori dell'elenco; in caso contrario restituisce `false`.

-   `list`: l'elenco contenente i valori da controllare.
-   `condition`: la condizione da verificare rispetto ai valori nell'elenco.


## Examples

### Example #1
Determina se tutti i valori dell'elenco \{11, 12, 13\} sono maggiori di 0.
```powerquery
List.MatchesAll({11, 12, 13}, each _  > 10)
```

Result: 
```powerquery
true
```


### Example #2
Determina se tutti i valori dell'elenco \{1, 2, 3\} sono maggiori di 0.
```powerquery
List.MatchesAll({1, 2, 3}, each _  > 10)
```

Result: 
```powerquery
false
```


### Example #3
Determinare se tutti i valori di testo nell'elenco contengono "anna" ignorando la distinzione tra maiuscole e minuscole.
```powerquery
let
    Source = {"Savannah", "Annabelle", "Annals", "wannabe", "MANNA"},
    Result = List.MatchesAll(Source, each Text.Contains(_, "anna", Comparer.OrdinalIgnoreCase))
in
    Result
```

Result: 
```powerquery
true
```


### Example #4
Determinare se tutte le date contengono l'anno 2021.
```powerquery
let
    Source = {#date(2021, 11, 28), #date(2021, 1, 14), #date(2021, 12, 31), #date(2021, 7, 6)},
    Result = List.MatchesAll(Source, each Date.Year(_) = 2021)
in
    Result
```

Result: 
```powerquery
true
```




## Category
List.Selection
