---
title: Csv.Document
---

# Csv.Document


Vrne vsebino dokumenta CSV kot tabelo.


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

Vrne vsebino dokumenta CSV kot tabelo.

-   `columns` je lahko vrednost"null", število stolpcev, seznam imen stolpcev, vrsta tabele ali zapis z možnostmi.
-   `delimiter` je lahko en znak, seznam znakov ali vrednost `""`, ki označuje, da morajo biti vrstice razdeljene z zaporednimi presledki. Privzeto: `","`.
-   Za podprte vrednosti `extraValues` glejte `ExtraValues.Type`.
-   `encoding` določa vrsto kodiranja besedila.

Če je zapis določen za `columns` (in so `delimiter`, `extraValues` in `encoding` vrednosti"null"), so lahko navedena ta polja zapisov:

-   `Delimiter`: ločilo stolpca z enim znakom. Privzeto: `","`.
-   `Columns`: lahko je vrednost"null", število stolpcev, seznam imen stolpcev ali vrsta tabele. Če je število stolpcev manjše od števila, najdenega v vnosu, so dodatni stolpci prezrti. Če je število stolpcev večje od števila, najdenega v vnosu, imajo dodatni stolpci vrednost"null". Če ni določeno, bo število stolpcev določeno na podlagi tega, kar je v vnosu.
-   `Encoding`: kodiranje besedila datoteke. Privzeto: 65001 (UTF-8).
-   `CsvStyle`: določa način obravnave narekovajev.
    -   `CsvStyle.QuoteAfterDelimiter` (privzeto): narekovaji v polju so pomembni le takoj za ločilom.
    -   `CsvStyle.QuoteAlways`: narekovaji v polju so vedno pomembni ne glede na to, kje so.
-   `QuoteStyle`: določa način obravnave prelomov vrstic v narekovajih.
    -   `QuoteStyle.Csv` (privzeto): prelomi vrstic v narekovajih so obravnavani kot del podatkov in ne kot konec trenutne vrstice.
    -   `QuoteStyle.None`: vsi prelomi vrstic so obravnavani kot konec trenutne vrstice, tudi če so v vrednosti z narekovaji.
-   `IncludeByteOrderMark`: logična vrednost, ki označuje, ali je treba vključiti oznako zaporedja bajtov (BOM) na začetku izhoda CSV. Ko je vrednost nastavljena na"true", je oznaka BOM zapisana (na primer UTF-8 BOM: `0xEF 0xBB 0xBF`); ko je vrednost nastavljena na"false", oznaka BOM ni vključena. Ta možnost velja le v scenarijih izhoda. Privzeta vrednost je `false`.
-   `ExtraValues`: Za podprte vrednosti"ExtraValues"glejte `ExtraValues.Type`.


## Examples

### Example #1
Obdelajte besedilo CSV z glavami stolpcev.
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
