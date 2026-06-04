---
title: Text.From
---

# Text.From


Kreira tekstualnu vrednost od date vrednosti.


## Syntax

```powerquery
Text.From(
    value as any,
    optional culture as text
) as text
```


## Remarks

Vraća tekstualni prikaz navedene vrednosti.

-   `value`: Vrednost teksta za konvertovanje. Vrednost može biti `broj`, `datum`, `vreme`, `datum i vreme`, `datum i vremenska zona`, `logička`, `trajanje`ili `binarna` vrednost. Ako je data vrednost `null`, ova funkcija vraća `null`.
-   `culture`: (Opcionalno) Kultura koju treba koristiti prilikom konverzije vrednosti (na primer, „en-US”).


## Examples

### Example #1
Kreiranje tekstualne vrednosti od broja 3.
```powerquery
Text.From(3)
```

Result: 
```powerquery
"3"
```


### Example #2
Preuzmite tekstualni istek navedenog datuma i vremena.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22))
```

Result: 
```powerquery
"6/24/2024 2:32:22 PM"
```


### Example #3
Preuzmite nemački tekstualni istek navedenog datuma i vremena.
```powerquery
Text.From(#datetime(2024, 6, 24, 14, 32, 22), "de-DE")
```

Result: 
```powerquery
"24.06.2024 14:32:22"
```


### Example #4
Preuzmite binarnu vrednost iz teksta kodiranog kao heksadecimalna i vratite vrednost u tekst.
```powerquery
Text.From(Binary.FromText("10FF", BinaryEncoding.Hex))
```

Result: 
```powerquery
"EP8="
```


### Example #5
Preuzmite redove iz tabele koji sadrže podatke za Francusku i konvertujte datume u tekst pomoću francuske kulture.
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
