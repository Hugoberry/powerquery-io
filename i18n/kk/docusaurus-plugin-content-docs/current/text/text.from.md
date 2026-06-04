---
title: Text.From
---

# Text.From


Көрсетілген мәннен мәтіндік мәнді жасайды.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Көрсетілген мәннің мәтіндік көрінісін қайтарады.

-   `value`: мәтінге түрлендіру керек мән. Бұл мән `number`, `date`, `time`, `datetime`, `datetimezone`, `logical`, `duration` немесе `binary` мәні болуы мүмкін. `null` мәні берілсе, бұл функция `null` мәнін қайтарады.
-   `culture`: (Міндетті емес) Мәнді мәтінге түрлендіру кезінде пайдалану керек тіл (мысалы, "en-US").


## Examples

### Example #1
3 санынан мәтіндік мәнді жасау.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Көрсетілген күн мен уақыттың мәтіндік баламасын алыңыз.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Көрсетілген күн мен уақыттың неміс мәтінінің баламасын алыңыз.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Екілік мәнді гексадецималды деп кодталған мәтіннен алыңыз және мәнді мәтінге қайта өзгертіңіз.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Францияға арналған деректерді қамтитын кестедегі жолдарды алыңыз және француз мәдениетін пайдаланып күндерді мәтінге түрлендіріңіз.
```powerquery
let
    Source = #table(type table [Company ID = text, Country = text, Date = date],
    {
        {"JS-464", "USA", #date(2024, 3, 24)},
        {"LT-331", "France", #date(2024, 10, 5)},
        {"XE-100", "USA", #date(2024, 5, 21)},
        {"RT-430", "Germany", #date(2024, 1,18)},
        {"LS-005", "France", #date(2023, 12, 31)},
        {"UW-220", "Germany", #date(2024, 2, 25)}
    }),
    #"Convert Dates" = Table.TransformColumns(
        Table.SelectRows(Source, each [Country] = "France"),
        {"Date", each Text.From(_, "fr-FR")}
    )
in
    #"Convert Dates"
```

Result: 
```powerquery
#table(type table [Company ID = text, Country = text, Date = text],
{
    {"LT-331", "France", "05/10/2024"},
    {"LS-005", "France", "31/12/2023"}
})
```




## Category
Text.Conversions from and to text
