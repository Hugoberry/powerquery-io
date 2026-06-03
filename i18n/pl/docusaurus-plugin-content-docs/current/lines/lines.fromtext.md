---
title: Lines.FromText
---

# Lines.FromText


Konwertuje wartość tekstową na listę wartości tekstowych podzielonych w miejscach podziału wiersza. Jeśli element includeLineSeparators ma wartość true, znaki podziału wiersza zostaną uwzględnione w tekście.


## Syntax

```powerquery
Lines.FromText(
    text as text,
    optional quoteStyle as any,
    optional includeLineSeparators as logical
) as list
```


## Remarks

Konwertuje wartość tekstową na listę wartości tekstowych podzielonych przy podziałach wierszy.

-   `text`: wartość tekstowa do przekonwertowania na listę wartości tekstowych.
-   `quoteStyle`: określa sposób obsługi podziałów wierszy. Element `quoteStyle` może mieć wartość `null`. Wartość domyślna to `QuoteStyle.None`.
-   `includeLineSeparators`: określa, czy w tekście mają być uwzględniane znaki podziału wiersza. Element `includeLineSeparators` może mieć wartość `null`. Wartość domyślna to `false`.

Jeśli rekord jest określony dla `quoteStyle` (i `includeLineSeparators` ma wartość `null`), można podać następujące pola rekordów:

-   `QuoteStyle`: określa sposób obsługi podziałów wierszy ujętych w cudzysłowy.
    -   `QuoteStyle.Csv`: cytowane znaki podziału wiersza są traktowane jako część danych, a nie jako koniec bieżącego wiersza.
    -   `QuoteStyle.None`: wszystkie podziały wierszy są traktowane jako koniec bieżącego wiersza, nawet wtedy, gdy występują wewnątrz wartości ujętej w cudzysłowy. Ta wartość jest wartością domyślną, jeśli nie określono opcji `CsvStyle`.
-   `CsvStyle`: określa sposób obsługi cudzysłowów. Nie należy używać z `QuoteStyle.None`.
    -   `CsvStyle.QuoteAfterDelimiter`: cudzysłowy w polu są istotne tylko wtedy, gdy występują bezpośrednio po `Delimiter`.
    -   `CsvStyle.QuoteAlways`: cudzysłowy w polu są zawsze znaczące, niezależnie od miejsca ich występowania.
-   `Delimiter`: ogranicznik o pojedynczym znaku. Należy używać tylko z `CsvStyle.QuoteAfterDelimiter`.
-   `IncludeLineSeparators`: określa, czy tekst ma zawierać znaki podziału wiersza. Wartość domyślna to `false`.



## Category
Lines
