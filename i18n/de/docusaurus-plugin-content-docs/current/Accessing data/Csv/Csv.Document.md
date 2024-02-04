---
title: Csv.Document
---

# Csv.Document


## Description

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


## Details

Gibt den Inhalt des CSV-Dokuments als Tabelle zurück.    <ul>      <li>        <code>columns</code> kann null, die Anzahl der Spalten, eine Liste von Spaltennamen, ein Tabellentyp oder ein Optionsdatensatz sein.      </li>      <li>        <code>delimiter</code> kann ein einzelnes Zeichen, eine Liste von Zeichen oder der Wert <code>""</code>, sein, der angibt, dass Zeilen durch aufeinanderfolgende Leerzeichen geteilt werden sollen. Standard: <code>","</code>.      </li>      <li>        Hier finden Sie <code>ExtraValues.Type</code> die unterstützten Werte von <code>extraValues</code>.      </li>      <li>        <code>encoding</code> Gibt den Textkodierungstyp an.      </li>    </ul>    Wenn ein Datensatz für <code>columns</code> angegeben wird (und <code>delimiter</code>, <code>extraValues</code>, und <code>encoding</code> sind null), können die folgenden Datensatzfelder bereitgestellt werden:    <ul>      <li>        <code>Trennzeichen</code>: Das Spaltentrennzeichen. Standard: <code>","</code>.      </li>      <li>        <code>Spalten</code>: Kann null, die Anzahl der Spalten, eine Liste von Spaltennamen oder ein Tabellentyp sein. Wenn die Anzahl der Spalten geringer ist als die in der Eingabe gefundene Anzahl, werden die zusätzlichen Spalten ignoriert. Wenn die Anzahl der Spalten höher ist als die in der Eingabe gefundene Anzahl, sind die zusätzlichen Spalten null. Wenn nichts angegeben wird, wird die Anzahl der Spalten durch den Inhalt der Eingabe bestimmt.      </li>      <li>        <code>Kodierung</code>: Die Textkodierung der Datei. Standard: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: Specifies how quotes are handled.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (Standard): Anführungszeichen in einem Feld sind nur unmittelbar nach dem Trennzeichen von Bedeutung.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: Anführungszeichen in einem Feld sind immer von Bedeutung, unabhängig davon, wo sie erscheinen.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: Gibt an, wie mit Zeilenumbrüchen in Anführungszeichen umgegangen wird.        <ul>          <li>            <code>QuoteStyle.Csv</code> (Standard): Zeilenumbrüche in Anführungszeichen werden als Teil der Daten und nicht als Ende der aktuellen Zeile behandelt.          </li>          <li>            <code>QuoteStyle.None</code>: Alle Zeilenumbrüche werden als Ende der aktuellen Zeile behandelt, auch wenn sie innerhalb eines in Anführungszeichen gesetzten Werts stehen.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Verarbeiten von CSV-Text mit Spaltenüberschriften.
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




## Category
Accessing data
