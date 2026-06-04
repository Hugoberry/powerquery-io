---
title: Date.From
---

# Date.From


Luo päivämäärän annetusta arvosta.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Palauttaa päivämääräarvon annetusta arvosta.

-   `value`: Päivämääräksi muunnettava arvo. Jos annettu arvo on `null`, tämä funktio palauttaa `null`. Jos annettu arvo on `date`, palautetaan `value`. Seuraavien tyyppien arvot voidaan muuntaa `date`\-arvoksi:
    -   `text`: `date`\-arvo tekstimuotoisesta esityksestä. Katso lisätietoja kohdasta `Date.FromText`.
    -   `datetime`: `value` päivämääräosa.
    -   `datetimezone`: `value` paikallisen datetime-arvon päivämääräosa.
    -   `number`: Liukulukua vastaavan datetime-arvon päivämääräosa, jonka integraalikomponentti on päivien määrä ennen keskiyötä 30. joulukuuta 1899 tai sen jälkeen ja jonka murtolukuosa edustaa kyseisen päivän aikaa jaettuna 24:llä. Esimerkiksi keskiyö, 31. joulukuuta 1899 edustaa 1,0; 6.00, 1. tammikuuta 1900 edustaa 2,25; keskiyön 29. joulukuuta 1899 edustaa -1,0; ja klo 6.00, 29.12.1899 edustaa -1,25. Perusarvo on keskiyö 30. joulukuuta 1899. Vähimmäisarvo on keskiyö, 1. tammikuuta 0100. Enimmäisarvo on 31.12.9999 viimeinen hetki.
    -   Jos `value` on jotakin muuta tyyppiä, palautetaan virhe.
-   `culture`: Annetun arvon maa-asetus (esimerkiksi en-US).


## Examples

### Example #1
Muunna määritetty päivämäärä ja aika päivämääräarvoksi.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
Muunna määritetty luku päivämääräarvoksi.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
Muunna Julkaisupäivä-sarakkeen saksankieliset tekstipäivämäärät päivämääräarvoiksi.
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
