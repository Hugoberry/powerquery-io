---
title: Csv.Document
---

# Csv.Document


Returnerar innehållet i CSV-dokumentet som en tabell.


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Returnerar innehållet i CSV-dokumentet som en tabell.

-   `columns` kan vara null, antalet kolumner, en lista med kolumnnamn, en tabelltyp eller en alternativpost.
-   `delimiter` kan vara ett enskilt tecken, en lista med tecken eller värdet `""`, som anger att rader ska delas upp med flera blankstegstecken i följd. Standard: `","`.
-   Se `ExtraValues.Type` för de värden som stöds för `extraValues`.
-   `encoding` anger textkodningstypen.

Om en post har angetts för `columns` (och `delimiter`, `extraValues`och `encoding` är null) kan följande postfält anges:

-   `Avgränsare`: Avgränsare för en kolumn med ett tecken. Standard: `","`.
-   `Kolumner`: Kan vara null, antalet kolumner, en lista med kolumnnamn eller en tabelltyp. Om antalet kolumner är lägre än antalet som återfinns i indata, ignoreras de ytterligare kolumnerna. Om antalet kolumner är högre än antalet i indata, blir de ytterligare kolumnerna null. När det inte anges bestäms antalet kolumner av vad som finns i indata.
-   `Kodning`: Filens textkodning. Standard: 65001 (UTF-8).
-   `CsvStyle`: Anger hur citatationstecken hanteras.
    -   `CsvStyle.QuoteAfterDelimiter` (standard): Citationstecken i ett fält är enbart betydande direkt efter avgränsaren.
    -   `CsvStyle.QuoteAlways`: Citattecken i ett fält har alltid betydelse oavsett var de förekommer.
-   `QuoteStyle`: Anger hur radbrytningar som anges hanteras.
    -   `QuoteStyle.Csv` (standard): Citerade radbrytningar hanteras som del av data, inte som slutet på den aktuella raden.
    -   `QuoteStyle.None`: Alla radbrytningar hanteras som slutet på aktuell rad, även när de inträffar inom ett citerat värde.
-   `IncludeByteOrderMark`: Ett logiskt värde som anger om byteordningsmarkering (BOM) ska inkluderas i början av CSV-utdata. När värdet är true skrivs bommen (till exempel UTF-8 BOM: `0xEF 0xBB 0xBF`); när värdet är falskt ingår ingen BOM. Det här alternativet gäller endast i utdatascenarier. Standard är `false`.
-   `ExtraValues`: Se `ExtraValues.Skriv` för de värden som stöds för ExtraValues.


## Examples

### Example #1
Bearbeta CSV-text med kolumnrubriker.
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
