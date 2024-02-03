---
title: Pdf.Tables
---

# Pdf.Tables


## Description

Hiermee worden alle tabellen geretourneerd die in een PDF-bestand zijn gevonden.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Details

Hiermee worden tabellen geretourneerd die gevonden zijn in <code>pdf</code>. U kunt de optionele recordparameter <code>options</code> gebruiken om aanvullende eigenschappen op te geven. De record kan de volgende velden bevatten:    <ul><li><code>Implementation</code> : De versie van de algoritme die moet worden gebruikt bij het identificeren van tabellen. Oude versies zijn alleen beschikbaar voor achterwaartse compatibiliteit, om te voorkomen dat oude query&#39;s worden verbroken door algoritme-updates. De nieuwste versie moet altijd het beste resultaat geven. Geldige waarden zijn 1,3, 1,2, 1,1 of null.</li><li><code>StartPage</code> : Hiermee geeft u de eerste pagina op in het bereik van de pagina&#39;s die worden gecontroleerd. Standaard: 1.</li><li><code>EndPage</code> : Hiermee geeft u de laatste pagina op in het bereik van de pagina&#39;s worden gecontroleerd. Standaard: de laatste pagina van het document.</li><li><code>MultiPageTables</code> : Hiermee wordt bepaald of vergelijkbare tabellen op opeenvolgende pagina&#39;s automatisch kunnen worden samengevoegd tot &#233;&#233;n tabel. Standaard: waar.</li><li><code>EnforceBorderLines</code> : Hiermee wordt bepaald of randlijnen altijd worden gebruikt als celranden (als deze eigenschap waar is) of worden gebruikt als een hint voor het bepalen van celranden (als deze eigenschap onwaar is). Standaard: onwaar.</li></ul>    


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
