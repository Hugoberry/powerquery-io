---
title: SharePoint.Contents
---

# SharePoint.Contents


Returnerar en tabell med innehåll från en SharePoint-webbplats.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell som innehåller en rad för varje mapp och dokument på den angivna SharePoint-webbplatsen, `url`. Varje rad innehåller egenskaper för mappen eller filen och en länk till dess innehåll. Du kan ange `options` om du vill styra följande alternativ:

-   `ApiVersion` : Ett tal (14 eller 15) eller texten "Auto" som specificerar vilken SharePoint API-version som ska användas för den här webbplatsen. Om det inte anges används API-version 14. Om Auto specificeras upptäcks serverversionen automatiskt. I annat fall används version 14. Ej engelskspråkiga SharePoint-webbplatser kräver minst version 15.
-   `Implementation` : Valfritt. Anger vilken version av SharePoint-anslutningsprogrammet som ska användas. Godkända värden är 2.0 eller null. Om värdet är 2.0 används 2.0-implementeringen av SharePoint-anslutningsprogrammet. Om värdet är null används den ursprungliga implementeringen av SharePoint-anslutningsprogrammet.



## Category
Accessing data
