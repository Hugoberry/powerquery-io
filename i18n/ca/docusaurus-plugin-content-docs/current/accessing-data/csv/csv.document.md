---
title: Csv.Document
---

# Csv.Document


Retorna els continguts del document CSV com a taula.


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

Retorna els continguts del document CSV com a taula.

-   `columns` pot ser nul o bé el nombre de columnes, una llista de noms de columnes, un tipus de taula o un registre d’opcions.
-   `delimiter` pot ser un sol caràcter, una llista de caràcters o el valor `""`, que indica que les files s'han de dividir per caràcters d'espai en blanc consecutius. Per defecte: `","`.
-   Consulteu `ExtraValues.Type` per obtenir els valors compatibles de `extraValues`.
-   `encoding` especifica el tipus de codificació del text.

Si s'especifica un registre per a `columns` (i `delimiter`, `extraValues` i `encoding` són nuls), es poden proporcionar els camps de registre següents:

-   `Delimiter`: delimitador de columna d'un sol caràcter. Per defecte: `","`.
-   `Columns`: pot ser nul o bé el nombre de columnes, una llista de noms de columnes o un tipus de taula. Si el nombre de columnes és inferior al nombre indicat a l'entrada, s'ometran les columnes addicionals. Si el nombre de columnes és superior al nombre indicat a l'entrada, les columnes addicionals seran nul·les. Si no s'especifica cap valor, el nombre de columnes es determinarà d'acord amb el que s'indiqui a l'entrada.
-   `Encoding`: codificació del text del fitxer. Per defecte: 65001 (UTF-8).
-   `CsvStyle`: especifica com tractar les cometes.
    -   `CsvStyle.QuoteAfterDelimiter` (valor per defecte): les cometes d'un camp només són importants si van justament després del delimitador.
    -   `CsvStyle.QuoteAlways`: les cites d'un camp són significatives independentment d'on apareguin.
-   `QuoteStyle`: especifica com es gestionen els salts de línia entre cometes.
    -   `QuoteStyle.Csv` (valor per defecte): els salts de línia amb cometes es tracten com si fossin part de les dades, i no com si fossin el final de la fila actual.
    -   `QuoteStyle.None`: tots els salts de línia es tracten com si fossin el final de la fila actual, també en cas que estiguin a dins d'un valor entre cometes.
-   `IncludeByteOrderMark`: valor lògic que indica si s'ha d'incloure una marca d'ordre de bytes (BOM) al principi de la sortida CSV. Si es defineix com a cert, s'escriu el BOM (per exemple, BOM UTF-8: `0xEF 0xBB 0xBF`); si es defineix com a fals, no s'inclou cap BOM. Aquesta opció només és aplicable als escenaris de sortida. El valor per defecte és `false`.
-   `ExtraValues`: Consulteu `ExtraValues.Type` per obtenir els valors admesos d'ExtraValues.


## Examples

### Example #1
Processa el text CSV amb capçaleres de columnes.
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
