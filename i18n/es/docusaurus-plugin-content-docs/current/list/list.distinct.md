---
title: List.Distinct
---

# List.Distinct


Devuelve una lista de valores con los duplicados quitados.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Devuelve una lista que contiene todos los valores de la lista especificada con duplicados quitados. Si la lista especificada estuviera vacía, el resultado será una lista vacía.

-   `list`: lista de la que se extraen valores distintos.
-   `equationCriteria`: (opcional) especifica cómo se determina la igualdad al comparar valores. Este parámetro puede ser una función de selector de claves, una función de comparador o una lista que contenga tanto un selector de claves como un comparador.


## Examples

### Example #1
Quitar duplicados de la lista \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
A partir del final de la lista, seleccione las frutas que tengan una longitud de texto única.
```powerquery
let
    Source = {"Apple", "Banana", "Cherry", "Date", "Fig"},
    Result = List.Distinct(List.Reverse(Source), each Text.Length(_))
in
    Result
```

Result: 
```powerquery
{"Fig", "Date", "Cherry", "Apple"}
```


### Example #3
A partir del principio de la lista, seleccione las frutas únicas sin tener en cuenta las mayúsculas y minúsculas.
```powerquery
let
    Source = {"apple", "Pear", "aPPle", "banana", "ORANGE", "pear", "Banana", "Cherry"},
    Result = List.Distinct(Source, Comparer.OrdinalIgnoreCase)
in
    Result
```

Result: 
```powerquery
{"apple", "Pear", "banana", "ORANGE", "Cherry"}
```


### Example #4
Extraiga de una lista de listas las primeras listas con nombres de país únicos sin tener en cuenta las mayúsculas y minúsculas. Coloque las listas extraídas en las filas de una nueva tabla.
```powerquery
let
    Source = {
        {"USA", #date(2023, 8, 1), 567},
        {"canada", #date(2023, 8, 1), 254},
        {"Usa", #date(2023, 7, 1), 450},
        {"CANADA", #date(2023, 6, 1), 357},
        {"Panama", #date(2023, 6, 2), 20},
        {"panama", #date(2023, 7, 1), 40}
    },
    DistinctByCountry = List.Distinct(
        Source,
        {each _{0}, Comparer.OrdinalIgnoreCase}
    ),
    ToTable = Table.FromRows(DistinctByCountry, {"Country", "Date", "Value"}),
    ChangeTypes = Table.TransformColumnTypes(
        ToTable, {{"Country", type text}, {"Date", type date}, {"Value", Int64.Type}}
    )
in
    ChangeTypes
```

Result: 
```powerquery
#table(type table[Country = text, Date = date, Value = Int64.Type],
{
    {"USA", #date(2023, 8, 1), 567},
    {"canada", #date(2023, 8, 1), 254},
    {"Panama", #date(2023, 6, 2), 20}
})
```




## Category
List.Selection
