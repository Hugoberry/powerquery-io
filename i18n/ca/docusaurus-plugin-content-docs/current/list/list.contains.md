---
title: List.Contains
---

# List.Contains


Indica si la llista conté el valor.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Remarks

Indica si la llista conté el valor especificat. Retorna `cert` si el valor es troba a la llista, `fals` en cas contrari.

-   `list`: La llista per cercar.
-   `value`: El valor a cercar a la llista.
-   `equationCriteria`: (Opcional) El comparador que es fa servir per determinar si dos valor són iguals.


## Examples

### Example #1
Determina si la llista \{1, 2, 3, 4, 5\} conté 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2
Determina si la llista \{1, 2, 3, 4, 5\} conté 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```


### Example #3
S'ignoren majúscules i minúscules, i determina si la llista conté "ruibarbre".
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
Determina si la llista conté la data 8 d'abril de 2022.
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
