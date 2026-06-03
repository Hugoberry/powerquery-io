---
title: Lines.FromBinary
---

# Lines.FromBinary


Hiermee wordt een binaire waarde omgezet naar een lijst met tekstwaarden die met regeleinden zijn opgesplitst. Als er een citaatstijl is opgegeven, kunnen de regeleinden tussen aanhalingstekens verschijnen. Als includeLineSeparators true is, worden de regeleindetekens opgenomen in de tekst.


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

Converteert een binaire waarde naar een lijst met tekstwaarden die zijn gesplitst bij regeleinden.

-   `binary`: de binaire waarde die naar de lijst moet worden geconverteerd.
-   `quoteStyle`: hiermee geeft u op hoe regeleinden worden verwerkt. De waarde van `quoteStyle` kan `null` zijn. De standaardwaarde is `QuoteStyle.None`.
-   `includeLineSeparators`: hiermee geeft u op of de regeleindetekens in de tekst moeten worden opgenomen. De waarde van `includeLineSeparators` kan `null` zijn. De standaardwaarde is `false`.
-   `encoding`: hiermee geeft u de tekstcodering van de binaire waarde op. De waarde van `encoding` kan `null` zijn. De standaardwaarde is `65001` (UTF-8).

Als er een record is opgegeven voor `quoteStyle` (en `includeLineSeparators` en `encoding` is `null`), kunnen de volgende recordvelden worden opgegeven:

-   `QuoteStyle`: hiermee geeft u op hoe regeleinden met aanhalingstekens worden verwerkt.
    -   `QuoteStyle.Csv`: regeleinden tussen aanhalingstekens worden behandeld als deel van de gegevens, niet als het einde van de huidige rij.
    -   `QuoteStyle.None`: alle regeleinden worden behandeld als het einde van de huidige rij, zelfs wanneer ze voorkomen binnen een waarde tussen aanhalingstekens. Deze waarde is de standaardwaarde als de optie `CsvStyle` niet is opgegeven.
-   `CsvStyle`: hiermee geeft u op hoe aanhalingstekens worden verwerkt. Mag niet worden gebruikt met `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: aanhalingstekens in een veld zijn alleen belangrijk direct na het `scheidingsteken`.
    -   `CsvStyle.QuoteAlways`: aanhalingstekens in een veld zijn altijd belangrijk, ongeacht waar ze worden weergegeven.
-   `Scheidingsteken`: een scheidingsteken met één teken. Mag alleen worden gebruikt met `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: hiermee geeft u op of de regeleindetekens in de tekst moeten worden opgenomen. De standaardwaarde is `false`.
-   `Encoding`: de tekstcodering van de binaire waarde. De standaardwaarde is `65001` (UTF-8).



## Category
Lines
