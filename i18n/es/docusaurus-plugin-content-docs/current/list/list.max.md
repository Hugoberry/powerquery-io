---
title: List.Max
---

# List.Max


Devuelve el valor máximo o el valor predeterminado de una lista vacía.


## Syntax

```powerquery
List.Max(
    list as list,
    optional default as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as any
```


## Remarks

Devuelve el elemento máximo de la lista o el valor predeterminado opcional si la lista está vacía.

-   `list`: la lista de valores.
-   `default`: (Opcional) Valor que se devuelve si la lista está vacía.
-   `comparisonCriteria`: (Opcional) Función que se usa para transformar los valores antes de compararse. Si este parámetro es `null`, los valores se comparan sin ninguna transformación.
-   `includeNulls`: (Opcional) Indica si los valores `null` de la lista deben incluirse en la determinación del elemento máximo. El valor predeterminado es `true`.


## Examples

### Example #1
Busca el valor máximo en la lista especificada.
```powerquery
List.Max({1, 4, 7, 3, -2, 5}, 1)
```

Result: 
```powerquery
7
```


### Example #2
Busca el valor máximo en la lista especificada o devuelve -1 si está vacía.
```powerquery
List.Max({}, -1)
```

Result: 
```powerquery
-1
```


### Example #3
Busca el elemento en una lista de valores de texto que sea el último alfabéticamente. Si la lista está vacía, devuelve "none".
```powerquery
let
    Source = {"boy", "dog", "girl", "zebra", "cat", "mouse", "rabbit"},
    MaxText = List.Max(Source, "none")
in
    MaxText
```

Result: 
```powerquery
"zebra"
```


### Example #4
Busca la fecha más reciente en una lista de fechas alemanas. Si la lista está vacía, devuelve el 1 de enero de 2000.
```powerquery
let
    Source = {"12.02.2024", "15.05.2025", "10.10.2021", "16.01.2025", "30.12.2022"},
    MaxDate = List.Max(Source, #date(2000, 1, 1), each Date.FromText(_, [Culture = "de-DE"]))
in
    MaxDate
```

Result: 
```powerquery
"15.05.2025"
```




## Category
List.Ordering
