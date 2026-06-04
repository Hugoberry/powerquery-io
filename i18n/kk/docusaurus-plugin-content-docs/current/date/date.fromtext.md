---
title: Date.FromText
---

# Date.FromText


Жергілікті, әмбебап және теңшелетін күн пішімдерінен күнді жасайды.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Мәтіндік көріністен күн мәнін жасайды.

-   `text`: Күнге түрлендіретін мәтіндік мән.
-   `options`: Қосымша сипаттарды көрсету үшін көрсетуге болатын міндетті емес `жазба`. `Жазба` келесі өрістерді қамтуы мүмкін:
    -   `Пішім`: пайдаланатын пішімді көрсететін `мәтіндік` мән. Қосымша мәліметтер алу үшін https://go.microsoft.com/fwlink/?linkid=2180104 және https://go.microsoft.com/fwlink/?linkid=2180105 веб-беттеріне өтіңіз. Бұл өрісті өткізіп жіберу немесе `null` мәнін көрсету күнді ең жақсы болжамды пайдаланып талдауға әкеледі.
    -   `Culture`: `Format` мәні null болмаса, `Culture` кейбір пішім спецификаторларын басқарады. Мысалы, `"en-US"` тілінде `"MMM"` мәні `"Jan", "Feb", "Mar", ...`, ал `"ru-RU"` тілінде `"MMM"` мәні `"янв", "фев", "мар", ...` болады. `Format` мәні `null` болса, `Culture` пайдаланатын әдепкі пішімді басқарады. `Тіл` мәні `null` болса немесе өткізіп жіберілсе, `Culture.Current` мәні пайдаланылады.

Бұрынғы жұмыс ағындарын қолдау үшін сонымен қатар `options` мәтіндік мән бола алады. `= [Format = null, Culture = опциялар]` болса, мұның әрекеті бірдей болады.


## Examples

### Example #1
`"2010-12-31"` мәнін `date` мәніне түрлендіру.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Теңшелетін пішімді және неміс тілі мәдениетін пайдаланып түрлендіру
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Хиджра күнтізбесінде Григориан күнтізбесіндегі 1400 жылдың басына сәйкес келетін жылды табады.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
"Жарияланған күні" бағанындағы айлар қысқартылған итальяндық мәтіндік күндерді күн мәндеріне түрлендіру.
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
