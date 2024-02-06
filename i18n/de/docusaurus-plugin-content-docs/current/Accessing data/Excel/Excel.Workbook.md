---
title: Excel.Workbook
---

# Excel.Workbook


Gibt den Inhalt der Excel-Arbeitsmappe zurück.


## Syntax

```powerquery
Excel.Workbook(
    workbook as binary,
    optional useHeaders as any,
    optional delayTypes as logical
) as table
```


## Remarks

Gibt den Inhalt der Excel-Arbeitsmappe zurück.    <ul>     <li> „<code>useHeaders</code>“ kann NULL sein, ein logischer Wert (TRUE/FALSE), der angibt, ob die erste Zeile jeder zurückgegebenen Tabelle als Überschrift oder Optionsdatensatz behandelt werden soll. Standardwert: FALSE.</li>     <li> „<code>delayTypes</code>“ kann NULL oder ein logischer Wert (TRUE/FALSE) sein, der angibt, ob die Spalten der einzelnen zurückgegebenen Tabellen untypisiert bleiben sollen. Standardwert: FALSE.</li>    </ul>    Wenn für „<code>useHeaders</code>“ ein Datensatz angegeben wird (und „<code>delayTypes</code>“ NULL lautet), können die folgenden Datensatzfelder angegeben werden:    <ul>     <li> <code>UseHeaders</code>: Kann NULL oder ein logischer Wert (TRUE/FALSE) sein, der angibt, ob die erste Zeile jeder zurückgegebenen Tabelle als Überschrift behandelt werden soll. Standardwert: FALSE.</li>     <li> <code>DelayTypes</code>: Kann NULL oder ein logischer Wert (TRUE/FALSE) sein, der angibt, ob die Spalten der einzelnen zurückgegebenen Tabellen untypisiert bleiben sollen. Standardwert: FALSE.</li>     <li> <code>InferSheetDimensions</code>: Kann NULL oder ein logischer Wert (TRUE/FALSE) sein, der angibt, ob der Bereich eines Arbeitsblatts, der Daten enthält, durch Lesen des Arbeitsblatts selbst abgeleitet werden soll, anstatt die Dimensionsmetadaten aus der Datei zu lesen. Dies kann in Fällen nützlich sein, in denen die Dimensionsmetadaten falsch sind. Hinweis: Diese Option wird nur für Open XML-Excel-Dateien und nicht für Legacy-Excel-Dateien unterstützt. Standardwert: FALSE.</li>    </ul>    


## Examples

### Example #1 
Gibt den Inhalt von Sheet1 aus einer Excel-Arbeitsmappe zurück.
```powerquery
Excel.Workbook(File.Contents("C:\Book1.xlsx"), null, true){[Item="Sheet1"]}[Data]
```

Result: 
```powerquery
Table.FromRecords({
    [Column1 = "ID", Column2 = "Name", Column3 = "Phone"],
    [Column1 = 1, Column2 = "Bob", Column3 = "123-4567"],
    [Column1 = 3, Column2 = "Pam", Column3 = "543-7890"],
    [Column1 = 2, Column2 = "Jim", Column3 = "987-6543"]
})
```




## Category
Accessing data
