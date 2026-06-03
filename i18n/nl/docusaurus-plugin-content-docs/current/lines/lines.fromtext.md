---
title: Lines.FromText
---

# Lines.FromText


Zet een tekstwaarde om naar een lijst met tekstwaarden die met regeleinden zijn opgesplitst. Als includeLineSeparators 'true' is, worden de regeleindetekens opgenomen in de tekst.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Converteert een tekstwaarde naar een lijst met tekstwaarden die zijn gesplitst bij regeleinden.

-   `text`: de tekstwaarde die moet worden geconverteerd naar de lijst met tekstwaarden.
-   `quoteStyle`: hiermee geeft u op hoe regeleinden worden verwerkt. De waarde van `quoteStyle` kan `null` zijn. De standaardwaarde is `QuoteStyle.None`.
-   `includeLineSeparators`: hiermee geeft u op of de regeleindetekens in de tekst moeten worden opgenomen. De waarde van `includeLineSeparators` kan `null` zijn. De standaardwaarde is `false`.

Als er een record is opgegeven voor `quoteStyle` (en `includeLineSeparators` is `null`), kunnen de volgende recordvelden worden opgegeven:

-   `QuoteStyle`: hiermee geeft u op hoe regeleinden met aanhalingstekens worden verwerkt.
    -   `QuoteStyle.Csv`: regeleinden tussen aanhalingstekens worden behandeld als deel van de gegevens, niet als het einde van de huidige rij.
    -   `QuoteStyle.None`: alle regeleinden worden behandeld als het einde van de huidige rij, zelfs wanneer ze voorkomen binnen een waarde tussen aanhalingstekens. Deze waarde is de standaardwaarde als de optie `CsvStyle` niet is opgegeven.
-   `CsvStyle`: hiermee geeft u op hoe aanhalingstekens worden verwerkt. Mag niet worden gebruikt met `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: aanhalingstekens in een veld zijn alleen belangrijk direct na het `scheidingsteken`.
    -   `CsvStyle.QuoteAlways`: aanhalingstekens in een veld zijn altijd belangrijk, ongeacht waar ze worden weergegeven.
-   `Scheidingsteken`: een scheidingsteken met één teken. Mag alleen worden gebruikt met `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: hiermee geeft u op of de regeleindetekens in de tekst moeten worden opgenomen. De standaardwaarde is `false`.



## Category
Lines
