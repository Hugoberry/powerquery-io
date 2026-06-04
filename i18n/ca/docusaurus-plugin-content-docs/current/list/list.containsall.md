---
title: List.ContainsAll
---

# List.ContainsAll


Indica on una llista inclou tots els valors en una altra llista.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica si la llista inclou tots els valors d'una altra llista. Retorna `cert` si tots els valors es troben a la llista, `fals` en cas contrari.

-   `list`: La llista per cercar.
-   `values`: La llista de valors a cercar en la primera llista.
-   `equationCriteria`: (Opcional) El comparador que es fa servir per determinar si dos valor són iguals.


## Examples

### Example #1
Determina si la llista \{1, 2, 3, 4, 5\} conté 3 i 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Determina si la llista \{1, 2, 3, 4, 5\} conté 5 i 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Determina si la llista conté un gos i un cavall, mentre s'ignoren les majúscules i les minúscules.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Determina si la llista conté les dates del 8 d'abril de 2022 i del 6 de juliol de 2021.
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
