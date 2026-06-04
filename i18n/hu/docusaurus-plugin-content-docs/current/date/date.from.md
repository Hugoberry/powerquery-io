---
title: Date.From
---

# Date.From


Dátumot hoz létre a megadott értékből.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Remarks

Dátumértéket ad vissza az adott értékből.

-   `value`: A dátummá konvertálandó érték. Ha a megadott érték `null`, a függvény `null` értéket ad vissza. Ha a megadott érték `date`, `value` értéket ad vissza. A következő típusok értékei konvertálhatók `date` értékké:
    -   `text`: Szöveges ábrázolásból származó `date` érték. A részletekért lásd: `Date.FromText`.
    -   `datetime`: A(z) `value` dátum összetevője.
    -   `datetimezone`: A(z) `value` helyi datetime megfelelőjének dátum összetevője.
    -   `number`: Egy lebegőpontos szám datetime megfelelőjének dátum összetevője, amelynek egész összetevője az 1899. december 30., éjfél előtti vagy utáni napok száma, és amelynek tört összetevője az adott napon eltöltött idő 24-gyel elosztva. Az 1899. december 31. éjfélt például 1,0 jelöli; 1900. január 1. 06:00-t a 2.25 jelöli; éjfél, 1899. december 29-ét -1,0; és 1899. december 29. 06.00.-t -1.25 jelöli. Az alapérték 1899. december 30., éjfél. A minimális érték éjfél, január 1., 0100. A maximális érték 9999. december 31. utolsó pillanata.
    -   Ha `value` bármilyen más típusú, a rendszer hibát ad vissza.
-   `culture`: Az adott érték kulturális környezete (például „en-US”).


## Examples

### Example #1
A megadott dátum és idő konvertálása dátumértékké.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```


### Example #2
A megadott szám konvertálása dátumértékké.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #3
A Posted Date oszlopban szereplő német szöveges dátumok konvertálása dátumértékekké.
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
