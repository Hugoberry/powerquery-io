---
title: Date.From
---

# Date.From


Ustvari datum iz dane vrednosti.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Vrne datumsko vrednost iz navedene vrednosti.

-   `value`: Vrednost, ki naj se pretvori v datum. Če je navedena vrednost `null`, ta funkcija vrne `null`. Če je navedena vrednost `date`, je vrnjena `value`. Vrednosti naslednjih vrst je mogoče pretvoriti v `date` vrednost:
    -   `text`: vrednost `date` iz besedilnega zastopanja. Podrobnosti najdete v `Date.FromText`.
    -   `datetime`: komponenta datuma od `value`.
    -   `datetimezone`: komponenta datuma v lokalnem ekvivalentu"datetime"za `value`.
    -   `number`: komponenta datuma enakovredne vrednosti"datetime"števila s plavajočo točko, katere integralna komponenta je število dni pred polnočjo ali po polnoči, 30. decembra 1899, in ulomek katerih predstavlja čas na ta dan, deljen s 24. Na primer, polnoč 31. decembra 1899 je predstavljena z 1,0; 6 zjutraj 1. januar 1900 predstavlja 2,25; polnoč 29. decembra 1899 je predstavljena z -1.0; in 6 zjutraj 29. decembra 1899 je predstavljena z -1,25. Osnovna vrednost je polnoč, 30. decembra 1899. Najmanjša vrednost je polnoč 1. januarja 0100. Največja vrednost je zadnji trenutek 31. decembra 9999.
    -   Če `value` je katere koli druge vrste, je vrnjena napaka.
-   `culture`: kultura dane vrednosti (na primer"sl-SI").


## Examples

### Example #1
Pretvorite navedeni datum in uro v datumsko vrednost.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Pretvorite navedeno število v datumsko vrednost.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Pretvorite nemške besedilne datume iz stolpca"Datum objave"v datumske vrednosti.
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
