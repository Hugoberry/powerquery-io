---
title: List.ContainsAny
---

# List.ContainsAny


Indica dónde incluye una lista alguno de los valores de otra lista.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica si la lista contiene alguno de los valores de otra lista. Devuelve `true` si los valores se encuentran en la lista, de lo contrario devuelve `false`.

-   `list`: la lista en la que se va a buscar.
-   `values`: la lista de valores que se van a buscar en la primera lista.
-   `equationCriteria`: (Opcional) El comparador que se usa para determinar si dos valores son iguales.


## Examples

### Example #1
Determine si la lista \{1, 2, 3, 4, 5\} contiene 3 o 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2
Determine si la lista \{1, 2, 3, 4, 5\} contiene 6 o 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```


### Example #3
Determine si la lista contiene un caballo o un búho, sin distinguir entre mayúsculas y minúsculas.
```powerquery
List.ContainsAny({"dog", "cat", "racoon", "horse", "rabbit"}, {"Horse", "OWL"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Determine si la lista contiene una fecha del 8 de abril de 2022 o del 12 de enero de 2021.
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
