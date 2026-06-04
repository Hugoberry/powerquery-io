---
title: Lines.FromBinary
---

# Lines.FromBinary


Bināra vērtība tiek pārvērsta par teksta vērtību sarakstu, kas ir sadalīts atbilstoši rindiņu pārtraukumiem. Ja ir norādīts pēdiņu stils, rindiņu pārtraukumi var tikt rādīti pēdiņās. Ja parametra includeLineSeparators vērtība ir True, rindiņu pārtraukuma rakstzīmes tiek ietvertas tekstā.


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

Bināru vērtību konvertē par teksta vērtību sarakstu, kas sadalīts rindiņu pārtraukumos.

-   `binary`: binārā vērtība, kas jāpārvērš par sarakstu.
-   `quoteStyle`: norāda, kā tiek apstrādāti rindiņu pārtraukumi. `quoteStyle` vērtība var būt `null`. Noklusējuma vērtība ir `QuoteStyle.None`.
-   `includeLineSeparators`: norāda, vai tekstā jāiekļauj rindiņas pārtraukuma rakstzīmes. `includeLineSeparators` vērtība var būt `null`. Noklusējuma vērtība ir `false`.
-   `encoding`: norāda binārās vērtības teksta kodējumu. `encoding` vērtība var būt `null`. Noklusējuma vērtība ir `65001` (UTF-8).

Ja ieraksts ir norādīts `quoteStyle` (un `includeLineSeparators` un `encoding` tas ir `null`), var nodrošināt šādus ieraksta laukus:

-   `QuoteStyle`: norāda, kā tiek apstrādāti rindiņu pārtraukumi ar pēdiņām.
    -   `QuoteStyle.Csv`: rindiņu pārtraukumi ar pēdiņām tiek apstrādāti kā daļa no datiem, nevis kā pašreizējās rindas beigas.
    -   `QuoteStyle.None`: visi rindiņu pārtraukumi tiek apstrādāti kā pašreizējās rindas beigas, pat ja tie ir daļa no pēdiņās esošas vērtības. Šī vērtība ir noklusējums, ja `CsvStyle` opcija nav norādīta.
-   `CsvStyle`: norāda, kā tiek apstrādātas pēdiņas. Nedrīkst izmantot kopā ar `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: laukā esošām pēdiņām nozīme ir tikai tad, ja tās atrodas uzreiz aiz `Delimiter`.
    -   `CsvStyle.QuoteAlways`: laukā esošām pēdiņām vienmēr ir nozīme neatkarīgi no to novietojuma.
-   `Delimiter`: vienas rakstzīmes norobežotājs. Jāizmanto tikai ar `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: norāda, vai tekstā jāiekļauj rindiņas pārtraukuma rakstzīmes. Noklusējuma vērtība ir `false`.
-   `Encoding`: binārās vērtības teksta kodējums. Noklusējuma vērtība ir `65001` (UTF-8).



## Category
Lines
