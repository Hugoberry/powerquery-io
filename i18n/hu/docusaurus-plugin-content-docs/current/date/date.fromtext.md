---
title: Date.FromText
---

# Date.FromText


Egy dátumértéket hoz létre helyi, univerzális és egyéni dátumformátumokból.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Létrehoz egy dátumértéket egy szöveges alakból.

-   `text`: A dátummá konvertálandó szöveges érték.
-   `options`: Egy választható `record`, amely további tulajdonságok meghatározásához adható meg. A `record` a következő mezőket tartalmazhatja:
    -   `Format`: A használandó formátumot jelző `text` érték. További részletekért látogasson el a https://go.microsoft.com/fwlink/?linkid=2180104 és https://go.microsoft.com/fwlink/?linkid=2180105 oldalakra. Ha kihagyja ezt a mezőt vagy `null` értéket ad meg, a dátumot a rendszer az elérhető legjobb módon elemzi.
    -   `Culture`: Ha a `Format` nem null, a `Culture` bizonyos formátum módosító kulcsszavakat szabályoz. Például az `"en-US"` `"MMM"` esetén `"Jan", "Feb", "Mar", ...`, míg a `"ru-RU"` `"MMM"` esetén `"янв", "фев", "мар", ...`. Amikor a `Format` `null`, a `Culture` a használandó alapértelmezett formátumot szabályozza. Amikor a `Culture` `null` vagy ki van hagyva, a rendszer a `Culture.Current` értéket használja.

Az örökölt munkafolyamatok támogatásához a(z) `options` szöveges érték is lehet. Ez ugyanazt a működést eredményezi, mintha a(z) `options = [Format = null, Culture = options]` értékű lenne.


## Examples

### Example #1
A `"2010-12-31"` érték konvertálása `date` értékre.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Konvertálás egyéni formátummal és a német kulturális környezet használatával.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Megkeresi azt a dátumot a Gergely-naptárban, amely az iszlám naptárban 1400. kezdetének felel meg.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
A Posted Date oszlopban szereplő rövid hónapokat tartalmazó olasz nyelvű dátumok konvertálása dátumértékekké.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 gen. 2023", 580},
        {"CA-8843", "18 lug. 2024", 280},
        {"PA-1274", "12 gen. 2023", 90},
        {"PA-4323", "14 apr. 2023", 187},
        {"US-1200", "14 dic. 2023", 350},
        {"PTY-507", "4 giu. 2024", 110}
    }),
    #"Converted Date" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.FromText(_, [Culture = "it-IT"]), type date}
    )
in
    #"Converted Date"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2024, 7, 18), 280},
    {"PA-1274", #date(2023, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2023, 12, 14), 350},
    {"PTY-507", #date(2024, 6, 4), 110}
})
```




## Category
Date
