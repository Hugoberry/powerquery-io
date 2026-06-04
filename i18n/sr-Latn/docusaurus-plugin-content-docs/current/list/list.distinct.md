---
title: List.Distinct
---

# List.Distinct


Vraća listu vrednosti iz koje su uklonjeni duplikati.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Vraća listu koja sadrži sve vrednosti na navedenoj listi sa uklonjenim duplikatima. Ako je navedena lista prazna, rezultat je prazna lista.

-   `list`: Lista iz koje se izdvajaju jedinstvene vrednosti.
-   `equationCriteria`: (Opciono) Određuje način na koji se utvrđuje jednakost pri upoređivanju vrednosti. Ovaj parametar može biti funkcija selektora ključeva, funkcija upoređivanja ili lista koja sadrži i selektor ključeva i funkciju upoređivanja.


## Examples

### Example #1
Uklanjanje duplikata iz liste \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Počevši od kraja liste, izaberite voće koje ima jedinstvenu dužinu teksta.
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
Počevši od početka liste, izaberite jedinstveno voće zanemarujući velika i mala slova.
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
Izdvojite prve liste sa liste listi sa jedinstvenim nazivima zemalja zanemarujući velika i mala slova. Postavite izdvojene liste u redove nove tabele.
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
