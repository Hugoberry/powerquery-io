---
title: List.ContainsAny
---

# List.ContainsAny


Indica on una llista inclou qualsevol dels valors en una altra llista.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica si la llista conté algun dels valors d'una altra llista. Retorna `cert` si els valors es troben a la llista, `fals` en cas contrari.

-   `list`: La llista per cercar.
-   `values`: La llista de valors a cercar en la primera llista.
-   `equationCriteria`: (Opcional) El comparador que es fa servir per determinar si dos valor són iguals.


## Examples

### Example #1
Determina si la llista \{1, 2, 3, 4, 5\} conté 3 o 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Determina si la llista \{1, 2, 3, 4, 5\} conté 6 o 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Determina si la llista conté un cavall o un mussol, mentre s'ignoren les majúscules i les minúscules.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Determina si la llista conté una data del 8 d'abril de 2022 o el 12 de gener de 2021.
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
