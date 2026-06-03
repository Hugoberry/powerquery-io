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

Returnerar tabeller som hittats i `pdf`. Du kan ange en valfri postparameter `options` för att specificera ytterligare egenskaper. Posten kan innehålla följande fält:

-   `Implementation` : Versionen för den algoritm som ska användas för att identifiera tabeller. Äldre versioner är enbart tillgängliga för bakåtkompatibilitet för att förhindra att äldre frågor bryts av algoritmuppdateringar. Den senaste versionen bör alltid ge bäst resultat. Giltiga värden är 1.3, 1.2, 1.1 eller null.
-   `StartPage` : Anger den första sidan i sidintervallet som ska undersökas. Standard: 1.
-   `EndPage` : Anger den sista sidan i sidintervallet som ska undersökas. Standard: den sista sidan i dokumentet.
-   `MultiPageTables` : Anger om liknande tabeller på flera sidor automatiskt kombineras till en enda tabell. Standard: sant.
-   `EnforceBorderLines` : Anger om kantlinjer alltid används som cellkanter (när sant), eller bara används som en indikation bland många för att fastställa cellkanter (när faskt). Standard: falskt.


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
