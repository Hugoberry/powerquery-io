---
title: Csv.Document
---

# Csv.Document


Gibt den Inhalt des CSV-Dokuments als Tabelle zurück.


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

Gibt den Inhalt des CSV-Dokuments als Tabelle zurück.

-   `columns` kann NULL, die Anzahl der Spalten, eine Liste von Spaltennamen, ein Tabellentyp oder ein Optionsdatensatz sein.
-   `delimiter` kann ein einzelnes Zeichen, eine Liste von Zeichen oder der Wert `""` sein, der angibt, dass Zeilen durch aufeinanderfolgende Leerzeichen aufgeteilt werden sollen. Standard: `","`.
-   Die unterstützten Werte von `extraValues` finden Sie unter `ExtraValues.Type`.
-   `encoding` gibt den Textcodierungstyp an.

Wenn ein Datensatz für `columns` angegeben ist (und `delimiter`, `extraValues`und `encoding` NULL sind), können die folgenden Datensatzfelder angegeben werden:

-   `Delimiter`: Ein einzelnes Trennzeichen für Spalten. Standard: `","`.
-   `Colums`: Kann NULL, die Anzahl der Spalten, eine Liste von Spaltennamen oder ein Tabellentyp sein. Wenn die Anzahl der Spalten niedriger als die in der Eingabe gefundene Anzahl ist, werden die zusätzlichen Spalten ignoriert. Wenn die Anzahl der Spalten höher als die in der Eingabe gefundene Anzahl ist, sind die zusätzlichen Spalten NULL. Wenn kein Wert angegeben wird, wird die Anzahl der Spalten durch die in der Eingabe gefundenen Elemente bestimmt.
-   `Encoding`: Die Textcodierung der Datei. Standard: 65001 (UTF-8).
-   `CsvStyle`: Gibt an, wie Anführungszeichen behandelt werden.
    -   `CsvStyle.QuoteAfterDelimiter` (Standard): Anführungszeichen in einem Feld sind nur unmittelbar hinter einem Trennzeichen signifikant.
    -   `CsvStyle.QuoteAlways`: Anführungszeichen in einem Feld sind unabhängig davon, wo sie positioniert sind, immer signifikant.
-   `QuoteStyle`: Gibt an, wie Zeilenumbrüche in Anführungszeichen behandelt werden.
    -   `QuoteStyle.Csv` (Standard): Zeilenumbrüche in Anführungszeichen werden als Teil der Daten und nicht als Ende der aktuellen Zeile behandelt.
    -   `QuoteStyle.None`: Alle Zeilenumbrüche werden als Ende der aktuellen Zeile behandelt, auch wenn sie innerhalb eines Werts in Anführungszeichen auftreten.
-   `IncludeByteOrderMark`: Ein logischer Wert, der angibt, ob eine BOM (Byte Order Mark) am Anfang der CSV-Ausgabe enthalten sein soll. Wenn die Option auf „true“ festgelegt ist, wird die BOM geschrieben (z. B. UTF-8-BOM: `0xEF 0xBB 0xBF`); wenn sie auf „false“ festgelegt ist, ist keine BOM enthalten. Diese Option gilt nur für Ausgabeszenarien. Der Standardwert ist `false`.
-   `ExtraValues`: Siehe `ExtraValues.Type` für die unterstützten Werte von ExtraValues.


## Examples

### Example #1
Verarbeiten Sie CSV-Text mit Spaltenüberschriften.
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
