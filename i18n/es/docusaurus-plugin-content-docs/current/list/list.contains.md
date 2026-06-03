---
title: List.Contains
---

# List.Contains


Indica si la lista contiene el valor.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica si la lista contiene el valor especificado. Devuelve `true` si el valor se encuentra en la lista, de lo contrario devuelve `false`.

-   `list`: la lista en la que se va a buscar.
-   `value`: el valor que se va a buscar en la lista.
-   `equationCriteria`: (Opcional) El comparador que se usa para determinar si dos valores son iguales.


## Examples

### Example #1
Determine si la lista \{1, 2, 3, 4, 5\} contiene 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Determine si la lista \{1, 2, 3, 4, 5\} contiene 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
Omitiendo mayúsculas y minúsculas, determine si la lista contiene "rhrbrb".
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
Determine si la lista contiene la fecha 8 de abril de 2022.
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
