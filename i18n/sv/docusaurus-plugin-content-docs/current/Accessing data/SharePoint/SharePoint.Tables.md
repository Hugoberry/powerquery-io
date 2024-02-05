---
title: SharePoint.Tables
---

# SharePoint.Tables


## Description

Returnerar en tabell med innehåll från en SharePoint-lista


## Syntax

```powerquery
SharePoint.Tables(
    url as text,
    optional options as record
) as table
```


## Details

Returnerar en tabell som innehåller en rad för varje listobjekt i den angivna SharePoint-listan, <code>url</code>. Varje rad innehåller egenskaper för listan. Du kan ange <code>options</code> om du vill styra följande alternativ:    <ul><li><code>ApiVersion</code> : Ett tal (14 eller 15) eller texten &quot;Auto&quot; som specificerar vilken SharePoint API-version som ska anv&#228;ndas f&#246;r den h&#228;r webbplatsen. Om det inte anges anv&#228;nds API-version 14. Om Auto specificeras uppt&#228;cks serverversionen automatiskt. I annat fall anv&#228;nds version 14. Ej engelskspr&#229;kiga SharePoint-webbplatser kr&#228;ver minst version 15.</li><li><code>Implementation</code> : Valfritt. Anger vilken version av SharePoint-anslutningsprogrammet som ska anv&#228;ndas. Godk&#228;nda v&#228;rden &#228;r 2.0 eller null. Om v&#228;rdet &#228;r 2.0 anv&#228;nds 2.0-implementeringen av SharePoint-anslutningsprogrammet. Om v&#228;rdet &#228;r null anv&#228;nds den ursprungliga implementeringen av SharePoint-anslutningsprogrammet.</li><li><code>ViewMode</code> : Valfritt. Det h&#228;r alternativet &#228;r endast giltigt f&#246;r implementering 2.0. Godk&#228;nda v&#228;rden &#228;r Alla och Standard. Om inget v&#228;rde anges, anv&#228;nds v&#228;rdet Alla. D&#229; omfattar vyn alla anv&#228;ndarskapade och systemdefinierade kolumner. N&#228;r Standard anges matchar vyn vad anv&#228;ndaren ser n&#228;r han eller hon tittar p&#229; listan online i den vy som anv&#228;ndaren angett som standard i sina inst&#228;llningar. Om anv&#228;ndaren redigerar standardvyn f&#246;r att l&#228;gga till eller ta bort antingen anv&#228;ndarskapade eller systemdefinierade kolumner, eller genom att skapa en ny vy och ange den som standard, sprids &#228;ndringarna via anslutningsprogrammet.</li><li><code>DisableAppendNoteColumns</code> : Hindrar anslutningsprogrammet fr&#229;n att anv&#228;nda en separat slutpunkt f&#246;r anteckningskolumner.</li></ul>    



## Category
Accessing data
