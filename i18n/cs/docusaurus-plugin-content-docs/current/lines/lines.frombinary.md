---
title: Lines.FromBinary
---

# Lines.FromBinary


Převede binární hodnotu na seznam textových hodnot rozdělených na koncích řádků. Pokud je určen styl uvozovek, mohou být znaky konců řádků uzavřeny do uvozovek. Pokud má parametr includeLineSeparators hodnotu True, jsou znaky konců řádků zahrnuty do textu.


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

Převede binární hodnotu na seznam textových hodnot rozdělených podle zalomení řádku.

-   `binary`: Binární hodnota, která se má převést na seznam
-   `quoteStyle`: Určuje způsob zpracování konců řádků. Hodnota `quoteStyle` může být `null`. Výchozí hodnota je `QuoteStyle.None`.
-   `includeLineSeparators`: Určuje, zda mají být do textu zahrnuty znaky konce řádku. Hodnota `includeLineSeparators` může být `null`. Výchozí hodnota je `false`.
-   `encoding`: Určuje kódování textu binární hodnoty. Hodnota `encoding` může být `null`. Výchozí hodnota je `65001` (UTF-8).

Pokud je pro `quoteStyle` zadaný záznam (a `includeLineSeparators` a `encoding` jsou `null`), můžete zadat následující pole záznamu:

-   `QuoteStyle`: Určuje, jak se bude zacházet s konci řádků v uvozovkách.
    -   `QuoteStyle.Csv` (výchozí): S konci řádků v uvozovkách se zachází jako se součástí dat, nikoli jako s koncem aktuálního řádku.
    -   `QuoteStyle.None`: Se všemi konci řádků se zachází jako s koncem aktuálního řádku, i když se nacházejí uvnitř hodnoty v uvozovkách. Tato hodnota je výchozí, pokud není zadaná možnost `CsvStyle`.
-   `CsvStyle`: Určuje, jak se bude zacházet s uvozovkami. Nemělo by se používat s `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: Uvozovky v poli jsou významné pouze bezprostředně po oddělovači (`Delimiter`).
    -   `CsvStyle.QuoteAlways`: Uvozovky v poli jsou vždy významné, ať se objevují kdekoli.
-   `Delimiter`: Jednoznakový oddělovač. Mělo by se používat jenom s `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: Určuje, zda mají být do textu zahrnuty znaky konce řádku. Výchozí hodnota je `false`.
-   `Encoding`: Kódování textu binární hodnoty. Výchozí hodnota je `65001` (UTF-8).



## Category
Lines
