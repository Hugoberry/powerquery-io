---
title: Lines.FromBinary
---

# Lines.FromBinary


Konvertuje binárnu hodnotu na zoznam textových hodnôt rozdelených v zlomoch riadkov. Ak je zadaný štýl citácie, zlomy riadkov sa môžu zobrazovať v úvodzovkách. Ak má hodnota includeLineSeparators hodnotu True, znaky zlomov riadkov sú zahrnuté v texte.


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

Skonvertuje binárnu hodnotu na zoznam textových hodnôt rozdelených podľa zalomení riadkov.

-   `binary`: Binárna hodnota, ktorá sa má skonvertovať na zoznam.
-   `quoteStyle`: Určuje spôsob spracovania zlomov riadkov. Hodnota `quoteStyle` môže byť `null`. Predvolená hodnota je `QuoteStyle.None`.
-   `includeLineSeparators`: Určuje, či sa majú do textu zahrnúť znaky zlomu riadka. Hodnota `includeLineSeparators` môže byť `null`. Predvolená hodnota je `false`.
-   `encoding`: Určuje kódovanie textu binárnej hodnoty. Hodnota `encoding` môže byť `null`. Predvolená hodnota je `65001` (UTF-8).

Ak je pre `quoteStyle` zadaný záznam (a `includeLineSeparators` a `encoding` majú hodnotu `null`), môžu sa zadať nasledujúce polia záznamov:

-   `QuoteStyle`: Určuje spôsob spracovania zlomov riadkov v úvodzovkách.
    -   `QuoteStyle.Csv`: zlomy riadka v úvodzovkách sa považujú za súčasť údajov, nie za koniec aktuálneho riadka.
    -   `QuoteStyle.None`: všetky zlomy riadka sa považujú za koniec aktuálneho riadka, aj keď sa vyskytujú v hodnote v úvodzovkách. Táto hodnota je predvolená, ak nie je zadaná možnosť `CsvStyle`.
-   `CsvStyle`: určuje, ako sa budú používať úvodzovky. Nemal by sa používať s možnosťou `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: úvodzovky v poli sú dôležité len v prípade, ak nasledujú hneď za `oddeľovačom`.
    -   `CsvStyle.QuoteAlways`: Úvodzovky v poli sú dôležité vždy, bez ohľadu na to, kde sa nachádzajú.
-   `Oddeľovač`: Oddeľovač s jedným znakom. Mal by sa používať iba s možnosťou `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: Určuje, či sa majú do textu zahrnúť znaky zlomu riadka. Predvolená hodnota je `false`.
-   `Kódovanie`: Kódovanie textu binárnej hodnoty. Predvolená hodnota je `65001` (UTF-8).



## Category
Lines
