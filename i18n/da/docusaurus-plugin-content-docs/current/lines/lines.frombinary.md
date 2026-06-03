---
title: Lines.FromBinary
---

# Lines.FromBinary


Konverterer en binær værdi til en liste over tekstværdier, der opdeles med linjeskift. Hvis der er angivet et anførselsformat, vises linjeskift måske i anførselstegn. Hvis includeLineSeparators er true, er linjeskifttegnene inkluderet i teksten.


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

Konverterer en binær værdi til en liste over tekstværdier, der er opdelt ved linjeskift.

-   `binary`: Den binære værdi, der skal konverteres til listen.
-   `quoteStyle`: Angiver, hvordan linjeskift håndteres. Værdien af `quoteStyle` kan være `null`. Standardværdien er `QuoteStyle.None`.
-   `includeLineSeparators`: Angiver, om tegnene i linjeskift skal medtages i teksten. Værdien af `includeLineSeparators` kan være `null`. Standardværdien er `false`.
-   `encoding`: Angiver tekstkodningen af den binære værdi. Værdien af `encoding` kan være `null`. Standardværdien er `65001` (UTF-8).

Hvis der er angivet en post for `quoteStyle` (og `includeLineSeparators` og `encoding` er `null`), kan følgende postfelter angives:

-   `QuoteStyle`: Angiver, hvordan linjeskift i anførselstegn håndteres.
    -   `QuoteStyle.Csv`: Linjeskift i anførselstegn behandles som en del af dataene og ikke som slutningen af den aktuelle række.
    -   `QuoteStyle.None`: Alle linjeskift behandles som slutningen af den aktuelle række, selv når de forekommer i en værdi i anførselstegn. Denne værdi er standardindstillingen, hvis indstillingen `CsvStyle` ikke er angivet.
-   `CsvStyle`: Angiver, hvordan anførselstegn håndteres. Må ikke bruges med `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: Anførselstegn i et felt er kun vigtige, hvis de følger umiddelbart efter `Delimiter`.
    -   `CsvStyle.QuoteAlways`: Anførselstegn i et felt er altid vigtige, uanset hvor de optræder.
-   `Delimiter`: En separator med et enkelt tegn. Må kun bruges sammen med `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: Angiver, om tegnene i linjeskift skal medtages i teksten. Standardværdien er `false`.
-   `Encoding`: Tekstkodningen af den binære værdi. Standardværdien er `65001` (UTF-8).



## Category
Lines
