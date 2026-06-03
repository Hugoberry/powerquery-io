---
title: Pdf.Tables
---

# Pdf.Tables


Hiermee worden alle tabellen geretourneerd die in een PDF-bestand zijn gevonden.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Hiermee worden tabellen geretourneerd die gevonden zijn in `pdf`. U kunt de optionele recordparameter `options` gebruiken om aanvullende eigenschappen op te geven. De record kan de volgende velden bevatten:

-   `Implementation` : De versie van de algoritme die moet worden gebruikt bij het identificeren van tabellen. Oude versies zijn alleen beschikbaar voor achterwaartse compatibiliteit, om te voorkomen dat oude query's worden verbroken door algoritme-updates. De nieuwste versie moet altijd het beste resultaat geven. Geldige waarden zijn 1,3, 1,2, 1,1 of null.
-   `StartPage` : Hiermee geeft u de eerste pagina op in het bereik van de pagina's die worden gecontroleerd. Standaard: 1.
-   `EndPage` : Hiermee geeft u de laatste pagina op in het bereik van de pagina's worden gecontroleerd. Standaard: de laatste pagina van het document.
-   `MultiPageTables` : Hiermee wordt bepaald of vergelijkbare tabellen op opeenvolgende pagina's automatisch kunnen worden samengevoegd tot één tabel. Standaard: waar.
-   `EnforceBorderLines` : Hiermee wordt bepaald of randlijnen altijd worden gebruikt als celranden (als deze eigenschap waar is) of worden gebruikt als een hint voor het bepalen van celranden (als deze eigenschap onwaar is). Standaard: onwaar.


## Examples

### Example #1
Hiermee worden de tabellen geretourneerd die aanwezig zijn in sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Toegang tot gegevens
