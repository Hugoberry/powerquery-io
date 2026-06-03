---
title: Excel.Workbook
---

# Excel.Workbook


Returnerar innehållet i Excel-arbetsboken.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Remarks

Returnerar innehållet för Excel-arbetsboken.

-   `useHeaders` kan vara null, ett logiskt värde (sant/falskt) som visar huruvida den första raden i varje returnerad tabell ska behandlas om sidhuvud eller alternativpost. Standardvärde: falskt.
-   `delayTypes` kan vara null eller ett logiskt värde (sant/falskt) som visar huruvida kolumnerna i varje returnerad tabell ska lämnas tomma. Standardvärde: falskt.

Om en post har angetts för `useHeaders` (och `delayTypes` är null), kan följande postfält anges:

-   `UseHeaders`: Kan vara null eller ett logiskt värde (sant/falskt) som visar huruvida den första raden i varje returnerad tabell ska betraktas som sidhuvud. Standardvärde: falskt.
-   `DelayTypes`: Kan vara null eller ett logiskt värde (sant/falskt) som visar huruvida kolumnerna i varje returnerad tabell ska lämnas tomma. Standardvärde: falskt.
-   `InferSheetDimensions`: Kan vara null eller ett logiskt värde (sant/falskt) som visar huruvida en del av kalkylbladet som innehåller data ska härledas genom läsning av själva kalkylbladet, eller genom läsning av dimensionsmetadata från filen. Det här kan vara användbart när dimensionsmetadata är felaktiga. Tänk på att det här alternativet endast stöds för Open XML Excel-filer, inte för äldre Excel-filer. Standardvärde: falskt.


## Examples

### Example #1
Returnera innehållet i Blad1 från en Excel-arbetsbok.
```powerquery
Excel.Workbook(File.Contents("C:\Book1.xlsx"), null, true){[Item="Sheet1"]}[Data]
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "ID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 3, Column2 = "Pam", Column3 = "543-7890"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Accessing data
