---
title: SharePoint.Files
---

# SharePoint.Files


Returnerar en tabell som innehåller dokument från en SharePoint-webbplats.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell som innehåller en rad för varje dokument på den angivna SharePoint-webbplatsen, `url`, och undermappar. Varje rad innehåller egenskaper för mappen eller filen och en länk till dess innehåll. Du kan ange `options` om du vill styra följande alternativ:

-   `ApiVersion` : Ett tal (14 eller 15) eller texten "Auto" som specificerar vilken SharePoint API-version som ska användas för den här webbplatsen. Om det inte anges används API-version 14. Om Auto specificeras upptäcks serverversionen automatiskt. I annat fall används version 14. Ej engelskspråkiga SharePoint-webbplatser kräver minst version 15.



## Category
Accessing data
