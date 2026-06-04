---
title: Csv.Document
---

# Csv.Document


Vrátí obsah dokumentu CSV jako tabulku.


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

Vrátí obsah dokumentu CSV jako tabulku.

-   `columns` může být null, počet sloupců, seznam názvů sloupců, typ tabulky nebo záznam možností.
-   `delimiter` může být jeden znak, seznam znaků nebo hodnota `""`, která označuje, že řádky by měly být rozděleny po sobě jdoucími prázdnými znaky. Výchozí hodnota: `","`.
-   Podporované hodnoty `extraValues` viz `ExtraValues.Type`.
-   `encoding` určuje typ kódování textu.

Pokud je pro `columns` zadán záznam (a `delimiter`, `extraValues` a `encoding` jsou null), mohou být zadána následující pole záznamu:

-   `Delimiter`: Jednoznakový oddělovač sloupců. Výchozí hodnota: `","`.
-   `Columns`: Může být null, počet sloupců, seznam názvů sloupců nebo typ tabulky. Pokud je počet sloupců nižší než počet na vstupu, budou dodatečné sloupce ignorovány. Pokud je počet sloupců vyšší než počet na vstupu, dodatečné slupce budou vyplněny hodnotou null. Pokud počet není zadán, bude počet sloupců určen tím, kolik sloupců bylo nalezeno na vstupu.
-   `Encoding`: Kódování textu souboru. Výchozí hodnota: 65001 (UTF-8).
-   `CsvStyle`: Určuje, jak se bude zacházet s uvozovkami.
    -   `CsvStyle.QuoteAfterDelimiter` (výchozí): Uvozovky v poli jsou významné pouze bezprostředně po oddělovači.
    -   `CsvStyle.QuoteAlways`: Uvozovky v poli jsou vždy významné, ať se objevují kdekoli.
-   `QuoteStyle`: Určuje, jak se bude zacházet s konci řádků v uvozovkách.
    -   `QuoteStyle.Csv` (výchozí): S konci řádků v uvozovkách se zachází jako se součástí dat, nikoli jako s konci aktuálního řádku.
    -   `QuoteStyle.None`: Se všemi konci řádků se zachází jako s konci aktuálního řádku, i když se nacházejí uvnitř hodnoty v uvozovkách.
-   `IncludeByteOrderMark`: Logická hodnota určující, jestli se má na začátku výstupu CSV uvádět značka pořadí bajtů (BOM). Pokud je nastaveno na hodnotu true, značka BOM se zapíše (například UTF-8 BOM: `0xEF 0xBB 0xBF`); pokud je nastaveno na hodnotu false, značka BOM se nezapíše. Tato možnost se dá použít jenom ve výstupních scénářích. Výchozí hodnota je `false`.
-   `ExtraValues`: Podporované hodnoty ExtraValues viz `ExtraValues.Type`.


## Examples

### Example #1
Zpracuje text CSV se záhlavími sloupců.
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
