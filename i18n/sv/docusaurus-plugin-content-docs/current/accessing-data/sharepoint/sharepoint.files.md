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

Returnerar en tabell som innehåller en rad för varje dokument på den angivna SharePoint-webbplatsen, <code>url</code>, och undermappar. Varje rad innehåller egenskaper för mappen eller filen och en länk till dess innehåll. Du kan ange <code>options</code> om du vill styra följande alternativ:    <ul><li><code>ApiVersion</code> : Ett tal (14 eller 15) eller texten &quot;Auto&quot; som specificerar vilken SharePoint API-version som ska anv&#228;ndas f&#246;r den h&#228;r webbplatsen. Om det inte anges anv&#228;nds API-version 14. Om Auto specificeras uppt&#228;cks serverversionen automatiskt. I annat fall anv&#228;nds version 14. Ej engelskspr&#229;kiga SharePoint-webbplatser kr&#228;ver minst version 15.</li></ul>    



## Category
Accessing data
