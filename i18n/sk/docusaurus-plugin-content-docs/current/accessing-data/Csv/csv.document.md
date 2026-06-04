---
title: Csv.Document
---

# Csv.Document


Vráti obsah dokumentu CSV ako tabuľku.


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

Vráti obsah dokumentu CSV ako tabuľku.

-   `columns` môže mať hodnotu null, môže byť počtom stĺpcov, zoznamom názvov stĺpcov, typom tabuľky alebo záznamom možností.
-   `delimiter` môže byť jedným znakom, zoznamom znakov alebo hodnotou `""`, ktorá označuje, že riadky by mali byť rozdelené po sebe nasledujúcimi prázdnymi znakmi. Predvolená hodnota: `","`.
-   Podporované hodnoty `extraValues` nájdete tu: `ExtraValues.Type`.
-   `encoding` určuje typ kódovania textu.

Ak je pre `columns` zadaný záznam (a `delimiter`, `extraValues` a `encoding` majú hodnotu null), môžu sa zadať nasledujúce polia záznamov:

-   `Oddeľovač`: Oddeľovač stĺpcov s jedným znakom. Predvolená hodnota: `","`.
-   `Stĺpce`: môže mať hodnotu null, môže byť počtom stĺpcov, zoznamom názvov stĺpcov alebo typom tabuľky. Ak je počet stĺpcov nižší ako hodnota na vstupe, ďalšie stĺpce sa ignorujú. Ak je počet stĺpcov vyšší ako hodnota na vstupe, pre ďalšie stĺpce sa nastaví hodnota null. Ak počet stĺpcov nie je zadaný, určí ho hodnota zadaná na vstupe.
-   `Kódovanie`: Kódovanie textu súboru. Predvolená hodnota: 65001 (UTF-8).
-   `CsvStyle`: určuje, ako sa budú používať úvodzovky.
    -   `CsvStyle.QuoteAfterDelimiter` (predvolené): úvodzovky v poli sú dôležité len v prípade, ak nasledujú hneď za oddeľovačom.
    -   `CsvStyle.QuoteAlways`: Úvodzovky v poli sú dôležité vždy, bez ohľadu na to, kde sa nachádzajú.
-   `QuoteStyle`: Určuje spôsob spracovania zlomov riadkov v úvodzovkách.
    -   `QuoteStyle.Csv` (predvolená hodnota): Zlomy riadkov v úvodzovkách sa považujú za súčasť údajov, nie za koniec aktuálneho riadka.
    -   `QuoteStyle.None`: všetky zlomy riadka sa považujú za koniec aktuálneho riadka, aj keď sa vyskytujú v hodnote v úvodzovkách.
-   `IncludeByteOrderMark`: Logická hodnota určujúca, či sa má na začiatku výstupu CSV nachádzať značka poradia bajtov (BOM). Ak je nastavená na true, BOM zapíše sa (napríklad UTF-8 BOM: `0xEF 0xBB 0xBF`); ak je nastavená na false, BOM sa nezapíše. Táto možnosť sa vzťahuje len na výstupné scenáre. Predvolená hodnota je `false`.
-   `ExtraValues`: Podporované hodnoty ExtraValues nájdete v tabuľke `ExtraValues.Type`.


## Examples

### Example #1
Spracujte text CSV s hlavičkami stĺpcov.
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
