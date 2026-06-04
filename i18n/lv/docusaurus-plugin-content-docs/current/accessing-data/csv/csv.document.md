---
title: Csv.Document
---

# Csv.Document


Atgriež CSV dokumenta saturu kā tabulu.


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

Atgriež CSV dokumenta saturu kā tabulu.

-   `columns` var būt null, kolonnu skaits, kolonnu nosaukumu saraksts vai tabulas tips vai opciju ieraksts.
-   `delimiter` var būt viena rakstzīme, rakstzīmju saraksts vai vērtība `""`, kas norāda, ka rindas ir jāsadala ar secīgām atstarpju rakstzīmēm. Noklusējums: `","`.
-   Apskatiet sadaļu `ExtraValues. Type` atbalstītajām vērtībām `extraValues`. .
-   `encoding` norāda teksta kodēšanas tipu.

Ja ieraksts ir norādīts `columns` (un `delimiter`, `extraValues` un `encoding` ir null), var norādīt šādus ierakstu laukus:

-   `Norobežotājs`: vienas rakstzīmes kolonnu norobežotājs. Noklusējums: `","`.
-   `Kolonnas`: var būt null, kolonnu skaits, kolonnu nosaukumu saraksts vai tabulas tips. Ja kolonnu skaits ir mazāks nekā ievadē esošais skaitlis, papildu kolonnas tiek ignorētas. Ja kolonnu skaits ir lielāks nekā ievadē esošais skaitlis, papildu kolonnu vērtība ir null. Ja skaits nav norādīts, kolonnu skaitu nosaka ievadē esošā vērtība.
-   `Kodēšana`: faila teksta kodēšana. Noklusējums: 65001 (UTF-8).
-   `CsvStyle`: norāda, kā tiek apstrādātas pēdiņas.
    -   `CsvStyle.QuoteAfterDelimiter` (noklusējums): laukā esošām pēdiņām nozīme ir tikai tad, ja tās atrodas uzreiz aiz norobežotāja.
    -   `CsvStyle.QuoteAlways`: laukā esošām pēdiņām vienmēr ir nozīme neatkarīgi no to novietojuma.
-   `QuoteStyle`: norāda, kā tiek apstrādāti citēto rindiņu pārtraukumi.
    -   `QuoteStyle.Csv` (noklusējums): rindiņu pārtraukumi ar pēdiņām tiek apstrādāti kā daļa no datiem, nevis kā pašreizējās rindas beigas.
    -   `QuoteStyle.None`: visi rindiņu pārtraukumi tiek apstrādāti kā pašreizējās rindas beigas, pat ja tie ir daļa no pēdiņās esošas vērtības.
-   `IncludeByteOrderMark`: loģiskā vērtība, kas norāda, vai CSV izvades sākumā ir jāiekļauj baitu pasūtījuma atzīme (BYTE Order Mark —ECO). Ja iestatījums ir true, BOM tiek rakstīts (piemēram, UTF-8 BOM: `0xEF 0xBB 0xBF`); ja iestatījums ir false, BOM netiek iekļauts. Šī opcija ir lietojama tikai izvades scenārijos. Noklusējums ir `false`.
-   `ExtraValues`: Skatiet `ExtraValues.Type` atbalstītajām ExtraValues vērtībām.


## Examples

### Example #1
Apstrādājiet CSV tekstu ar kolonnu galvenēm.
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
