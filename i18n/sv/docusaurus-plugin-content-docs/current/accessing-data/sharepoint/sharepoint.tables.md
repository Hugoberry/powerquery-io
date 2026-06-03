---
title: SharePoint.Tables
---

# SharePoint.Tables


Returnerar en tabell med innehåll från en SharePoint-lista


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell som innehåller en rad för varje listobjekt i den angivna SharePoint-listan, `url`. Varje rad innehåller egenskaper för listan. Du kan ange `options` om du vill styra följande alternativ:

-   `ApiVersion` : Ett tal (14 eller 15) eller texten "Auto" som specificerar vilken SharePoint API-version som ska användas för den här webbplatsen. Om det inte anges används API-version 14. Om Auto specificeras upptäcks serverversionen automatiskt. I annat fall används version 14. Ej engelskspråkiga SharePoint-webbplatser kräver minst version 15.
-   `Implementation` : Valfritt. Anger vilken version av SharePoint-anslutningsprogrammet som ska användas. Godkända värden är 2.0 eller null. Om värdet är 2.0 används 2.0-implementeringen av SharePoint-anslutningsprogrammet. Om värdet är null används den ursprungliga implementeringen av SharePoint-anslutningsprogrammet.
-   `ViewMode` : Valfritt. Det här alternativet är endast giltigt för implementering 2.0. Godkända värden är Alla och Standard. Om inget värde anges, används värdet Alla. Då omfattar vyn alla användarskapade och systemdefinierade kolumner. När Standard anges matchar vyn vad användaren ser när han eller hon tittar på listan online i den vy som användaren angett som standard i sina inställningar. Om användaren redigerar standardvyn för att lägga till eller ta bort antingen användarskapade eller systemdefinierade kolumner, eller genom att skapa en ny vy och ange den som standard, sprids ändringarna via anslutningsprogrammet.
-   `DisableAppendNoteColumns` : Hindrar anslutningsprogrammet från att använda en separat slutpunkt för anteckningskolumner.



## Category
Accessing data
