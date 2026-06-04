---
title: Lines.FromText
---

# Lines.FromText


Převede textovou hodnotu na seznam textových hodnot rozdělených na koncích řádků. Pokud má parametr includeLineSeparators hodnotu True, jsou znaky konců řádků zahrnuté do textu.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Převede textovou hodnotu na seznam textových hodnot rozdělených podle zalomení řádku.

-   `text`: Textová hodnota, která se má převést na seznam textových hodnot
-   `quoteStyle`: Určuje způsob zpracování konců řádků. Hodnota `quoteStyle` může být `null`. Výchozí hodnota je `QuoteStyle.None`.
-   `includeLineSeparators`: Určuje, zda mají být do textu zahrnuty znaky konce řádku. Hodnota `includeLineSeparators` může být `null`. Výchozí hodnota je `false`.

Pokud je pro `quoteStyle` zadán záznam (a `includeLineSeparators` je `null`), můžete zadat následující pole záznamu:

-   `QuoteStyle`: Určuje, jak se bude zacházet s konci řádků v uvozovkách.
    -   `QuoteStyle.Csv`: S konci řádků v uvozovkách se zachází jako se součástí dat, nikoli jako s koncem aktuálního řádku.
    -   `QuoteStyle.None`: Se všemi konci řádků se zachází jako s koncem aktuálního řádku, i když se nacházejí uvnitř hodnoty v uvozovkách. Tato hodnota je výchozí, pokud není zadaná možnost `CsvStyle`.
-   `CsvStyle`: Určuje, jak se bude zacházet s uvozovkami. Nemělo by se používat s `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: Uvozovky v poli jsou významné pouze bezprostředně po oddělovači (`Delimiter`).
    -   `CsvStyle.QuoteAlways`: Uvozovky v poli jsou vždy významné, ať se objevují kdekoli.
-   `Delimiter`: Jednoznakový oddělovač. Mělo by se používat jenom s `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: Určuje, zda mají být do textu zahrnuty znaky konce řádku. Výchozí hodnota je `false`.



## Category
Lines
