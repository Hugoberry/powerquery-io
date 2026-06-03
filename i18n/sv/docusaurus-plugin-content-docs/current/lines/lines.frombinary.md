---
title: Lines.FromBinary
---

# Lines.FromBinary


Konverterar ett binärvärde till en lista med textvärden uppdelade vid radbrytningar. Om en citatstil anges kan radbrytningar visas inom citattecken. Om includeLineSeparators är true tas radbrytningstecknen med i texten.


## Syntax

```powerquery
Lines.FromBinary(
    binary as binary,
    optional quoteStyle as any,
    optional includeLineSeparators as logical,
    optional encoding as TextEncoding.Type
) as list
```


## Remarks

Konverterar ett binärvärde till en lista med textvärden som delas vid radbrytningar.

-   `binary`: Det binära värde som ska konverteras till listan.
-   `quoteStyle`: Anger hur radbrytningar ska hanteras. Värdet för `quoteStyle` kan vara `null`. Standardvärdet är `QuoteStyle.None`.
-   `includeLineSeparators`: Anger om radbrytningstecken ska ingå i texten. Värdet för `includeLineSeparators` kan vara `null`. Standardvärdet är `false`.
-   `encoding`: Anger textkodningen för det binära värdet. Värdet för `encoding` kan vara `null`. Standardvärdet är `65001` (UTF-8).

Om en post har angetts för `quoteStyle` (`includeLineSeparators` och `encoding` är `null`) kan följande postfält anges:

-   `QuoteStyle`: Anger hur radbrytningar som citeras ska hanteras.
    -   `QuoteStyle.Csv`: Citerade radbrytningar hanteras som del av data, inte som slutet på den aktuella raden.
    -   `QuoteStyle.None`: Alla radbrytningar hanteras som slutet på aktuell rad, även när de inträffar inom ett citerat värde. Det här värdet är standard om alternativet `CsvStyle` inte har angetts.
-   `CsvStyle`: Anger hur citattecken hanteras. Bör inte användas med `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: Citattecken i ett fält är enbart betydande direkt efter `avgränsaren`.
    -   `CsvStyle.QuoteAlways`: Citattecken i ett fält har alltid betydelse oavsett var de förekommer.
-   `Avgränsare`: En avgränsare med ett tecken. Bör endast användas med `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: Anger om radbrytningstecken ska ingå i texten. Standardvärdet är `false`.
-   `Kodning`: Textkodning för det binära värdet. Standardvärdet är `65001` (UTF-8).



## Category
Lines
