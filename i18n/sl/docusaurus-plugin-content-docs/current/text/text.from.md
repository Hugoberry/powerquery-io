---
title: Text.From
---

# Text.From


Ustvari besedilno vrednost iz dane vrednosti.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Vrne predstavitev besedila navedene vrednosti.

-   `value`: Vrednost za pretvorbo v besedilo. Vrednost je lahko `number`, `date`, `time`, `datetime`, vrednost `datetimezone`, `logical`, `duration` ali `binary`. Če je navedena vrednost `null`, ta funkcija vrne `null`.
-   `culture`: (izbirno) Kultura, ki je uporabljena pri pretvorbi vrednosti v besedilo (na primer"en-US").


## Examples

### Example #1
Ustvarite besedilno vrednost iz števila 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Pridobite ekvivalent besedila določenega datuma in časa.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Pridobite nemško besedilo, ki je enakovredno določenemu datumu in uri.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Pridobite dvojiško vrednost iz besedila, ki je kodirano kot šestnajstiško, in vrednost spremenite nazaj v besedilo.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Pridobite vrstice v tabeli, ki vsebujejo podatke za Francijo, in pretvorite datume v besedilo s francosko kulturo.
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
