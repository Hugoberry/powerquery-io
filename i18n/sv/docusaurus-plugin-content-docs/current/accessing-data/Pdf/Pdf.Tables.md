---
title: Pdf.Tables
---

# Pdf.Tables


Returnerar alla tabeller som finns i en PDF-fil.


## Syntax

```powerquery
Pdf.Tables(
    pdf as binary,
    optional options as record
) as table
```


## Remarks

Returnerar tabeller som hittats i <code>pdf</code>. Du kan ange en valfri postparameter <code>options</code> för att specificera ytterligare egenskaper. Posten kan innehålla följande fält:    <ul><li><code>Implementation</code> : Versionen f&#246;r den algoritm som ska anv&#228;ndas f&#246;r att identifiera tabeller. &#196;ldre versioner &#228;r enbart tillg&#228;ngliga f&#246;r bak&#229;tkompatibilitet f&#246;r att f&#246;rhindra att &#228;ldre fr&#229;gor bryts av algoritmuppdateringar. Den senaste versionen b&#246;r alltid ge b&#228;st resultat. Giltiga v&#228;rden &#228;r 1.3, 1.2, 1.1 eller null.</li><li><code>StartPage</code> : Anger den f&#246;rsta sidan i sidintervallet som ska unders&#246;kas. Standard: 1.</li><li><code>EndPage</code> : Anger den sista sidan i sidintervallet som ska unders&#246;kas. Standard: den sista sidan i dokumentet.</li><li><code>MultiPageTables</code> : Anger om liknande tabeller p&#229; flera sidor automatiskt kombineras till en enda tabell. Standard: sant.</li><li><code>EnforceBorderLines</code> : Anger om kantlinjer alltid anv&#228;nds som cellkanter (n&#228;r sant), eller bara anv&#228;nds som en indikation bland m&#229;nga f&#246;r att fastst&#228;lla cellkanter (n&#228;r faskt). Standard: falskt.</li></ul>    


## Examples

### Example #1 
Returnerar tabellerna som finns i sample.pdf.
```powerquery
Pdf.Tables(File.Contents("c:\sample.pdf"))
```

Result: 
```powerquery
#table({"Name", "Kind", "Data"}, ...)
```




## Category
Öppnar data
