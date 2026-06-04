---
title: List.Distinct
---

# List.Distinct


Returnează o listă de valori cu duplicatele eliminate.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Returnează o listă care conține toate valorile din lista specificată, cu dublurile eliminate. Dacă lista specificată este goală, rezultatul este o listă goală.

-   `list`: lista din care sunt extrase valorile distincte.
-   `equationCriteria`: (opțional) specifică modul în care se determină egalitate la compararea valorilor. Acest parametru poate fi o funcție selector de taste, o funcție de comparare sau o listă care conține atât un selector de taste, cât și un comparator.


## Examples

### Example #1
Eliminaţi duplicatele din lista \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Începând de la sfârșitul listei, selectați fructele care au o lungime unică de text.
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
Începând de la începutul listei, selectați fructele unice în timp ce ignorați literele mari și mici.
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
Extrageți dintr-o listă de liste primele liste cu nume unice de țări în timp ce se ignoră literele mari și mici. Plasați listele extrase în rândurile unui tabel nou.
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
