---
title: List.Distinct
---

# List.Distinct


Zwraca listę wartości, z której zostały usunięte duplikaty.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Zwraca listę zawierającą wszystkie wartości z określonej listy z usuniętymi duplikatami. Jeśli określona lista jest pusta, wynik jest pustą listą.

-   `list`: lista, z której wyodrębniane są wyróżniające się wartości.
-   `equationCriteria`: (opcjonalnie) określa sposób, w jaki jest ustalana równość podczas porównywania wartości. Ten parametr może być funkcją selektora kluczy, funkcją porównującą, lub listą zawierającą zarówno selektor kluczy, jak i funkcję porównującą.


## Examples

### Example #1
Usuń duplikaty z listy \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Na końcu listy wybierz owoce o unikatowej długości tekstu.
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
Na samym początku listy wybierz unikatowe owoce, ignorując wielkość liter.
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
Wyodrębnij z listy list pierwsze listy z unikatowymi nazwami krajów/regionów, ignorując wielkość liter. Umieść wyodrębnione listy w wierszach nowej tabeli.
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
