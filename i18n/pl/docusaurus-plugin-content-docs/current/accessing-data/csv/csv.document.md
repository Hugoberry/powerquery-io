---
title: Csv.Document
---

# Csv.Document


Zwraca zawartość dokumentu w formacie CSV jako tabelę.


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Remarks

Zwraca zawartość dokumentu CSV w postaci tabeli.

-   `columns` może mieć wartość null, może być liczbą kolumn, listą nazw kolumn, typem tabeli lub rekordem opcji.
-   `delimiter` może być pojedynczym znakiem, listą znaków lub wartością `„”`, która wskazuje, że wiersze powinny być dzielone przez kolejne znaki odstępu. Wartość domyślna: `„,”`.
-   Zobacz `ExtraValues.Type`, aby uzyskać obsługiwane wartości `extraValues`.
-   `encoding` określa typ kodowania tekstu.

Jeśli rekord jest określony dla `columns` (oraz `delimiter`, `extraValues` i `encoding` mają wartości null), można podać następujące pola rekordów:

-   `Ogranicznik`: ogranicznik z jedną kolumną znaków. Wartość domyślna: `„,”`.
-   `Kolumny`: może mieć wartość null, może być liczbą kolumn, listą nazw kolumn lub typem tabeli. Jeśli liczba kolumn jest mniejsza od liczby odnalezionej w danych wejściowych, dodatkowe kolumny będą ignorowane. Jeśli liczba kolumn jest większa od liczby odnalezionej w danych wejściowych, dodatkowe kolumny będą mieć wartość null. Gdy wartość nie zostanie podana, liczba kolumn będzie określana na podstawie informacji znalezionych w danych wejściowych.
-   `Kodowanie`: kodowanie tekstu pliku. Wartość domyślna: 65001 (UTF-8).
-   `CsvStyle`: określa sposób obsługi cudzysłowów.
    -   `CsvStyle.QuoteAfterDelimiter` (wartość domyślna): cudzysłowy w polu są istotne tylko wtedy, gdy występują bezpośrednio po ograniczniku.
    -   `CsvStyle.QuoteAlways`: cudzysłowy w polu są zawsze istotne, niezależnie od miejsca ich występowania.
-   `QuoteStyle`: określa sposób obsługi podziałów wierszy ujętych w cudzysłowy.
    -   `QuoteStyle.Csv` (domyślnie): podziały wierszy ujęte w cudzysłowy są traktowane jako część danych, a nie jako koniec bieżącego wiersza.
    -   `QuoteStyle.None`: wszystkie podziały wierszy są traktowane jako koniec bieżącego wiersza, nawet wtedy, gdy występują wewnątrz wartości ujętej w cudzysłowy.
-   `IncludeByteOrderMark`: wartość logiczna wskazująca, czy na początku danych wyjściowych CSV ma zostać uwzględniony znacznik kolejności bajtów (BOM). Po ustawieniu na wartość true jest zapisywany znacznik BOM (na przykład UTF-8 BOM: `0xEF 0xEF 0xBB`); po ustawieniu na wartość false nie jest uwzględniany żaden znacznik BOM. Ta opcja ma zastosowanie tylko w scenariuszach wyjściowych. Wartość domyślna to `false`.
-   `ExtraValues`: zobacz `ExtraValues.Type`, aby uzyskać informacje o obsługiwanych wartościach ExtraValues.


## Examples

### Example #1
Przetwórz tekst w formacie CSV z nagłówkami kolumn.
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
