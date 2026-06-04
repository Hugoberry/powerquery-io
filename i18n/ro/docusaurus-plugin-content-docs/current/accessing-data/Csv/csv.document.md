---
title: Csv.Document
---

# Csv.Document


Returnează conţinutul documentului CSV ca tabel.


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

Returnează conținutul documentului CSV ca tabel.

-   `columns` poate fi nul, numărul de coloane, o listă de nume de coloane, un tip de tabel sau o înregistrare de opțiuni.
-   `delimiter` poate fi un caracter unic, o listă de caractere sau valoarea `""`, care indică faptul că rândurile trebuie să fie scindate după caractere consecutive de spații albe. Implicit: `","`.
-   Consultați `ExtraValues.Type` pentru valorile acceptate pentru `extraValues`.
-   `encoding` specifică tipul de codificare a textului.

Dacă este specificată o înregistrare pentru `columns` (și `delimiter`, `extraValues` și `encoding` sunt nule), pot fi furnizate următoarele câmpuri de înregistrare:

-   `Delimiter`: un delimitator de coloană cu un caracter unic. Implicit: `","`.
-   `Columns`: poate fi nul, numărul de coloane, o listă de nume de coloane sau un tip de tabel. Dacă numărul de coloane este mai mic decât numărul găsit în intrare, coloanele suplimentare vor fi ignorate. Dacă numărul de coloane este mai mare decât numărul găsit în intrare, coloanele suplimentare vor fi nule. Când nu este specificat, numărul de coloane va fi determinat de ceea ce se găsește în intrare.
-   `Encoding`: codificarea text a fișierului. Implicit: 65001 (UTF-8).
-   `CsvStyle`: specifică modul în care sunt tratate ghilimelele.
    -   `CsvStyle.QuoteAfterDelimiter` (implicit): ghilimelele dintr-un câmp sunt semnificative doar imediat după delimitator.
    -   `CsvStyle.QuoteAlways`: ghilimelele dintr-un câmp sunt întotdeauna semnificative, indiferent unde apar.
-   `QuoteStyle`: specifică modul în care sunt tratate sfârșiturile de linie citate.
    -   `QuoteStyle.Csv` (implicit): sfârșiturile de linie citate sunt tratate ca parte a datelor, nu ca sfârșit al rândului curent.
    -   `QuoteStyle.None`: Toate sfârșiturile de linie sunt tratate ca sfârșit al rândului curent, chiar și atunci când apar în interiorul unei valori citate.
-   `IncludeByteOrderMark`: o valoare logică care indică dacă să se includă un marcaj de ordine byți (BOM) la începutul ieșirii CSV. Când este setată la True, BOM este scrisă (de exemplu, UTF-8 BOM: `0xEF 0xBB 0xBF`); când este setată la False, BOM nu este inclus. Această opțiune se aplică numai în scenariile de ieșire. Valoarea implicită este `false`.
-   `ExtraValues`: Consultați `ExtraValues.Type` pentru valorile acceptate de ExtraValues.


## Examples

### Example #1
Procesați textul CSV cu anteturi de coloană.
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
