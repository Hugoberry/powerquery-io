---
title: Date.From
---

# Date.From


Kreira datum od date vrednosti.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Vraća vrednost datuma iz date vrednosti.

-   `value`: Vrednost koju treba pretvoriti u datum. Ako je data vrednost `null`, ova funkcija vraća `null`. Ako je data vrednost `date`, vraća se `value`. Vrednosti sledećih tipova mogu da se konvertuju u vrednost `date`:
    -   `text`: Vrednost `date` iz tekstualne reprezentacije. Pogledajte `Date.FromText` za detalje.
    -   `datetime`: Komponenta datuma `value`.
    -   `datetimezone`: Komponenta datuma lokalnog ekvivalenta datuma i vremena `value`.
    -   `number`: Komponenta datuma ekvivalenta datuma i vremena broja sa pokretnim zarezom čija je integralna komponenta broj dana pre ili posle ponoći, 30. decembra 1899, i čiji razlomak predstavlja vreme tog dana podeljeno sa 24. Na primer, ponoć, 31 decembar 1899. predstavljen je sa 1,0; 6 ujutro, 1. januar 1900. predstavljen je sa 2,25; ponoć 29. decembra 1899. predstavlja -1,0; i 6 ujutro, 29. decembar 1899. predstavljen je sa -1,25. Osnovna vrednost je ponoć 30. decembra 1899. Minimalna vrednost je ponoć 1. januara 0100. Maksimalna vrednost je poslednji trenutak 31. decembra 9999. godine.
    -   Ako je `value` bilo kog drugog tipa, vraća se greška.
-   `culture`: kultura date vrednosti (na primer, „en-US“).


## Examples

### Example #1
Konvertujte navedeni datum i vreme u vrednost datuma.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Konvertujte navedeni broj u vrednost datuma.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Konvertujte nemačke tekstualne datume u koloni Datum objave u vrednosti datuma.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 Januar 2023", 580},
        {"CA-8843", "18 Juli, 2023", 280},
        {"PA-1274", "12 Januar, 2022", 90},
        {"PA-4323", "14 April 2023", 187},
        {"US-1200", "14 Dezember, 2022", 350},
        {"PTY-507", "4 Juni, 2023", 110}
    }),
    #"Filtered rows" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.From(_, "de-DE"), type date}
    )
in
    #"Filtered rows"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2023, 7, 18), 280},
    {"PA-1274", #date(2022, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2022, 12, 14), 350},
    {"PTY-507", #date(2023, 6, 4), 110}
})
```




## Category
Date
