---
title: List.Distinct
---

# List.Distinct


Tiek atgriezts vērtību saraksts, no kura ir noņemti vērtību dublikāti.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Tiek atgriezts saraksts, kurā ir ietvertas visas norādītā saraksta vērtības ar noņemtiem dublikātiem. Ja norādītais saraksts ir tukšs, rezultāts ir tukšs saraksts.

-   `list`: saraksts, no kura tiek izvilktas atšķirīgas vērtības.
-   `equationCriteria`: (neobligāti) norāda, kā, salīdzinot vērtības, tiek noteikta vienādība. Šis parametrs var būt taustiņu atlasītāja funkcija, salīdzināšanas funkcija vai saraksts, kurā ir gan taustiņu atlasītājs, gan salīdzināšanas funkcija.


## Examples

### Example #1
Noņemiet vērtību dublikātus no saraksta \{1, 1, 2, 3, 3, 3\}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Sākot no saraksta beigām, atlasiet augļus, kuru teksta garums ir unikāls.
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
Sākot no saraksta sākuma, atlasiet unikālos augļus, ignorējot reģistru.
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
Ignorējot gadījumu, izvelciet no sarakstu saraksta pirmos sarakstus ar unikāliem valstu nosaukumiem. Ievietot izgūtos sarakstus jaunas tabulas rindās.
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
