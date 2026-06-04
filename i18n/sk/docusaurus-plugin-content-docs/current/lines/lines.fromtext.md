---
title: Lines.FromText
---

# Lines.FromText


Konvertuje textovú hodnotu na zoznam textových hodnôt rozdelených v zlomoch riadkov. Ak má hodnota includeLineSeparators hodnotu True, znaky zlomov riadkov sa zahrnú do textu.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Skonvertuje textovú hodnotu na zoznam textových hodnôt rozdelených podľa zalomení riadkov.

-   `text`: Textová hodnota, ktorá sa má skonvertovať na zoznam textových hodnôt.
-   `quoteStyle`: Určuje spôsob spracovania zlomov riadkov. Hodnota `quoteStyle` môže byť `null`. Predvolená hodnota je `QuoteStyle.None`.
-   `includeLineSeparators`: Určuje, či sa majú do textu zahrnúť znaky zlomu riadka. Hodnota `includeLineSeparators` môže byť `null`. Predvolená hodnota je `false`.

Ak je pre `quoteStyle` zadaný záznam (a `includeLineSeparators` má hodnotu `null`), môžu sa zadať nasledujúce polia záznamov:

-   `QuoteStyle`: Určuje spôsob spracovania zlomov riadkov v úvodzovkách.
    -   `QuoteStyle.Csv`: zlomy riadka v úvodzovkách sa považujú za súčasť údajov, nie za koniec aktuálneho riadka.
    -   `QuoteStyle.None`: všetky zlomy riadka sa považujú za koniec aktuálneho riadka, aj keď sa vyskytujú v hodnote v úvodzovkách. Táto hodnota je predvolená, ak nie je zadaná možnosť `CsvStyle`.
-   `CsvStyle`: určuje, ako sa budú používať úvodzovky. Nemal by sa používať s možnosťou `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: úvodzovky v poli sú dôležité len v prípade, ak nasledujú hneď za `oddeľovačom`.
    -   `CsvStyle.QuoteAlways`: Úvodzovky v poli sú dôležité vždy, bez ohľadu na to, kde sa nachádzajú.
-   `Oddeľovač`: Oddeľovač s jedným znakom. Mal by sa používať iba s možnosťou `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: Určuje, či sa majú do textu zahrnúť znaky zlomu riadka. Predvolená hodnota je `false`.



## Category
Lines
