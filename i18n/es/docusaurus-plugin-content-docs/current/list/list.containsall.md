---
title: List.ContainsAll
---

# List.ContainsAll


Indica dónde incluye una lista todos los valores en otra lista.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica si la lista incluye todos los valores de otra lista. Devuelve `true` si todos los valores se encuentran en la lista, de lo contrario devuelve `false`.

-   `list`: la lista en la que se va a buscar.
-   `values`: la lista de valores que se van a buscar en la primera lista.
-   `equationCriteria`: (Opcional) El comparador que se usa para determinar si dos valores son iguales.


## Examples

### Example #1
Determine si la lista \{1, 2, 3, 4, 5\} contiene 3 y 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2
Determine si la lista \{1, 2, 3, 4, 5\} contiene 5 y 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```


### Example #3
Determine si la lista contiene un perro y un caballo, sin tener en cuenta las mayúsculas y minúsculas.
```powerquery
List.ContainsAll({"dog", "cat", "racoon", "horse", "rabbit"}, {"DOG", "Horse"}, Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```


### Example #4
Determine si la lista contiene las fechas 8 de abril de 2022 y 6 de julio de 2021.
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
