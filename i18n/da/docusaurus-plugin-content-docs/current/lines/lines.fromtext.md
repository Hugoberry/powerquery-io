---
title: Lines.FromText
---

# Lines.FromText


Konverterer en tekstværdi til en liste over tekstværdier, der opdeles med linjeskift. Hvis includeLineSeparators er true, er linjeskifttegnet inkluderet i teksten.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Konverterer en tekstværdi til en liste over tekstværdier, der er opdelt ved linjeskift.

-   `text`: Den tekstværdi, der skal konverteres til listen over tekstværdier.
-   `quoteStyle`: Angiver, hvordan linjeskift håndteres. Værdien af `quoteStyle` kan være `null`. Standardværdien er `QuoteStyle.None`.
-   `includeLineSeparators`: Angiver, om tegnene i linjeskift skal medtages i teksten. Værdien af `includeLineSeparators` kan være `null`. Standardværdien er `false`.

Hvis der er angivet en post for `quoteStyle` (og `includeLineSeparators` er `null`), kan følgende postfelter angives:

-   `QuoteStyle`: Angiver, hvordan linjeskift i anførselstegn håndteres.
    -   `QuoteStyle.Csv`: Linjeskift i anførselstegn behandles som en del af dataene og ikke som slutningen af den aktuelle række.
    -   `QuoteStyle.None`: Alle linjeskift behandles som slutningen af den aktuelle række, selv når de forekommer i en værdi i anførselstegn. Denne værdi er standardindstillingen, hvis indstillingen `CsvStyle` ikke er angivet.
-   `CsvStyle`: Angiver, hvordan anførselstegn håndteres. Må ikke bruges med `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: Anførselstegn i et felt er kun vigtige, hvis de følger umiddelbart efter `Delimiter`.
    -   `CsvStyle.QuoteAlways`: Anførselstegn i et felt er altid vigtige, uanset hvor de optræder.
-   `Delimiter`: En separator med et enkelt tegn. Må kun bruges sammen med `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: Angiver, om tegnene i linjeskift skal medtages i teksten. Standardværdien er `false`.



## Category
Lines
