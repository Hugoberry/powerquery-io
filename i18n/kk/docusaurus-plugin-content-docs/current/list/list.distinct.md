---
title: List.Distinct
---

# List.Distinct


Көшірмелері жойылған мәндер тізімін қайтарады.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Көшірмелері жойылған көрсетілген тізімдегі барлық мәнді қамтитын тізімді қайтарады. Көрсетілген тізім бос болса, нәтижесі бос тізім болады.

-   `list`: Бірегей мәндер алынған тізім.
-   `equationCriteria`: (Міндетті емес) Мәндерді салыстыру кезінде теңдіктің қалай анықталатынын көрсетеді. Бұл параметр негізгі селектор функциясы, салыстырушы функциясы немесе кілт селекторы мен салыстырушыны да қамтитын тізім болуы мүмкін.


## Examples

### Example #1
\{1, 1, 2, 3, 3, 3\} тізімінен көшірмелерді жою.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Тізімнің соңынан бастап, бірегей мәтін ұзындығына ие жемістерді таңдаңыз.
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
Тізімнің басынан бастап, регистрді елемей, бірегей жемістерді таңдаңыз.
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
Регистрді елемей, бірегей ел атаулары бар тізімдер тізімінен алғашқы тізімдерді шығарыңыз. Шығарылған тізімдерді жаңа кестенің жолдарына орналастырыңыз.
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
