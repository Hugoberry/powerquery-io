---
title: Number.From
---

# Number.From


Erstellt eine Zahl auf der Grundlage des angegebenen Werts.


## Syntax

```powerquery
Number.From(
    value as any,
    optional culture as text
) as number
```


## Remarks

Gibt einen `number`\-Wert auf der Grundlage des angegebenen Elements vom Typ „`value`“ zurück. Optional kann auch ein Element vom Typ „`culture`“ angegeben werden (Beispiel: „de-DE“). Besitzt das angegebene Element vom Typ „`value`“ den Wert `NULL`, wird von `Number.From` der Wert `NULL` zurückgegeben. Besitzt das angegebene Element vom Typ „`value`“ den Wert `number`, wird „`value`“ zurückgegeben. Werte folgender Art können in einen `number`\-Wert konvertiert werden:

-   `text`: Ein `number`\-Wert auf der Grundlage einer Textdarstellung. Behandelt werden allgemeine Textformate („15“, „3.423,10“, „5.0E-10“). Ausführlichere Informationen finden Sie unter `Number.FromText`.
-   `logical`: 1 für `true`, 0 für `false`.
-   `datetime`: Eine Gleitkommazahl mit doppelter Genauigkeit, die eine Entsprechung des OLE-Automatisierungsdatums enthält.
-   `datetimezone`: Eine Gleitkommazahl mit doppelter Genauigkeit, die eine Entsprechung des OLE-Automatisierungsdatums für das lokale Datum und die lokale Uhrzeit von „`value`“ enthält.
-   `date`: Eine Gleitkommazahl mit doppelter Genauigkeit, die eine Entsprechung des OLE-Automatisierungsdatums enthält.
-   `time`: Ausgedrückt in anteiligen Tagen.
-   `duration`: Ausgedrückt in ganzen und anteiligen Tagen.

Handelt es sich bei „`value`“ um einen anderen Typ, wird ein Fehler zurückgegeben.


## Examples

### Example #1
Ruft den `number`\-Wert von `"4"` ab.
```powerquery
Number.From("4")
```

Result: 
```powerquery
4
```


### Example #2
Ruft den `number`\-Wert von `#datetime(2020, 3, 20, 6, 0, 0)` ab.
```powerquery
Number.From(#datetime(2020, 3, 20, 6, 0, 0))
```

Result: 
```powerquery
43910.25
```


### Example #3
Hiermit rufen Sie den `Zahlenwert` von `"12,3 %"` ab.
```powerquery
Number.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
