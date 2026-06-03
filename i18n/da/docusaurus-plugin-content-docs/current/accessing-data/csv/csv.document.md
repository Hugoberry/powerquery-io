---
title: Csv.Document
---

# Csv.Document


Returnerer indholdet af CSV-dokumentet som en tabel.


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

Returnerer indholdet af CSV-dokumentet som en tabel.

-   `columns` kan være null, antallet af kolonner, en liste over kolonnenavne, en tabeltype eller en indstillingspost.
-   `delimiter` kan være et enkelt tegn, en liste over tegn eller værdien `""`, som angiver, at rækker skal opdeles efter fortløbende mellemrumstegn. Standard: `","`.
-   Se `ExtraValues.Type` for de understøttede værdier for `extraValues`.
-   `encoding` Angiver kodningstypen for teksten.

Hvis der er angivet en post for `columns` (og `delimiter`, `extraValues`og `encoding` er null), kan følgende postfelter angives:

-   `Delimiter`: En kolonneseparator med et enkelt tegn. Standard: `","`.
-   `Columns`: Kan være null, antallet af kolonner, en liste over kolonnenavne eller en tabeltype. Hvis antallet af kolonner er lavere end det tal, der blev fundet i inputtet, ignoreres de ekstra kolonner. Hvis antallet af kolonner er højere end det antal, der findes i inputtet, vil de ekstra kolonner være null. Når det ikke er angivet, bestemmes antallet af kolonner af, hvad der findes i inputtet.
-   `Encoding`: Filens tekstkodning. Standard: 65001 (UTF-8).
-   `CsvStyle`: Angiver, hvordan anførselstegn håndteres.
    -   `CsvStyle.QuoteAfterDelimiter` (standard): Anførselstegn i et felt er kun vigtige, hvis de følger umiddelbart efter afgrænseren.
    -   `CsvStyle.QuoteAlways`: Anførselstegn i et felt er altid vigtige, uanset hvor de optræder.
-   `QuoteStyle`: Angiver, hvordan linjeskift i anførselstegn håndteres.
    -   `QuoteStyle.Csv` (standard): Linjeskift i anførselstegn behandles som en del af dataene og ikke som slutningen af den aktuelle række.
    -   `QuoteStyle.None`: Alle linjeskift behandles som slutningen af den aktuelle række, selv når de forekommer i en værdi i anførselstegn.
-   `IncludeByteOrderMark`: En logisk værdi, der angiver, om der skal inkluderes et Byte-ordremærke i starten af CSV-outputtet. Når den er angivet til sand, skrives BOM (f.eks. UTF-8 BOM: `0xEF 0xBB 0xBF`); når den er angivet til falsk, medtages der ingen BOM. Denne indstilling kan kun anvendes i outputscenarier. Standarden er `false`.
-   `ExtraValues`: Se `ExtraValues.Type` for de understøttede værdier af ExtraValues.


## Examples

### Example #1
Behandl CSV-tekst med kolonneoverskrifter.
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
