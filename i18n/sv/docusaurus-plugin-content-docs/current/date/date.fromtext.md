---
title: Date.FromText
---

# Date.FromText


Skapar ett datum från lokala, universella och anpassade datumformat.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Skapar ett datumvärde från en textrepresentation.

-   `text`: Ett textvärde som ska omvandlas till ett datum.
-   `options`: En valfri post, `record`, kan tillhandahållas för att ange ytterligare egenskaper. Posten `record` kan innehålla följande fält:
    -   `Format`: Ett `text`\-värde som anger vilket format som ska användas. Mer information finns i https://go.microsoft.com/fwlink/?linkid=2180104 och https://go.microsoft.com/fwlink/?linkid=2180105. Om du utelämnar det här fältet eller anger `null` så parsas datumet med bästa möjliga ansträngning.
    -   `Culture`: När `Format` inte är null styr `Culture` vissa formatspecificerare. Exempel: i `en-US` är `MMM` `Jan, Feb, Mar, ...` men i `ru-RU` är `MMM` `"ннв", "фев", "мар", ...`. När `Format` är `null` styr `Culture` det standardformat som ska användas. När `Culture` är `null` eller utelämnas, används `Culture.Current`.

För att stödja äldre arbetsflöden kan `options` också vara ett textvärde. Detta har samma beteende som om `options = [Format = null, Culture = alternativ]`.


## Examples

### Example #1
Konvertera `2010-12-31` till ett `datum`\-värde.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Konvertera med ett anpassat format och den tyska kulturen.
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Hitta datumet i den gregorianska kalendern som motsvarar början av 1400 i Hijri-kalendern.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
Omvandla de italienska textdatumen med förkortade månader i kolumnen Publiceringsdatum till datumvärden.
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
