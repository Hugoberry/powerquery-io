---
title: Lines.FromText
---

# Lines.FromText


Konverterar ett textvärde till en lista med textvärden separerade med radbrytningar. Om includeLineSeparators är true tas radbrytningstecknen med i texten.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Konverterar ett textvärde till en lista med textvärden som delas vid radbrytningar.

-   `text`: Textvärdet som ska konverteras till listan med textvärden.
-   `quoteStyle`: Anger hur radbrytningar ska hanteras. Värdet för `quoteStyle` kan vara `null`. Standardvärdet är `QuoteStyle.None`.
-   `includeLineSeparators`: Anger om radbrytningstecken ska ingå i texten. Värdet för `includeLineSeparators` kan vara `null`. Standardvärdet är `false`.

Om en post har angetts för `quoteStyle` (och `includeLineSeparators` är `null`) kan följande postfält anges:

-   `QuoteStyle`: Anger hur radbrytningar som citeras ska hanteras.
    -   `QuoteStyle.Csv`: Citerade radbrytningar hanteras som del av data, inte som slutet på den aktuella raden.
    -   `QuoteStyle.None`: Alla radbrytningar hanteras som slutet på aktuell rad, även när de inträffar inom ett citerat värde. Det här värdet är standard om alternativet `CsvStyle` inte har angetts.
-   `CsvStyle`: Anger hur citattecken hanteras. Bör inte användas med `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: Citattecken i ett fält är enbart betydande direkt efter `avgränsaren`.
    -   `CsvStyle.QuoteAlways`: Citattecken i ett fält har alltid betydelse oavsett var de förekommer.
-   `Avgränsare`: En avgränsare med ett tecken. Bör endast användas med `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: Anger om radbrytningstecken ska ingå i texten. Standardvärdet är `false`.



## Category
Lines
