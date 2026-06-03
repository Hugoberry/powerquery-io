---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Gibt die Analysis Services-Datenbanken auf einem bestimmten Host zurück.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Gibt Datenbanken für die Analysis Services-Instanz "`server`" zurück. Ein optionaler Datensatzparameter "`options`" kann angegeben werden, um zusätzliche Eigenschaften festzulegen. Der Datensatz kann die folgenden Felder enthalten:

-   `TypedMeasureColumns` : Ein logischer Wert, der angibt, ob die im mehrdimensionalen oder tabellarischen Modell angegebenen Typen für die Typen der hinzugefügten Measurespalten verwendet werden. Bei Festlegung auf FALSE wird für alle Measurespalten der Typ "number" verwendet. Der Standardwert für diese Option lautet FALSE.
-   `Culture` : Ein Kulturname, der die Kultur für die Daten angibt. Dieser Wert entspricht der Eigenschaft "Gebietsschema-ID" der Verbindungszeichenfolge.
-   `CommandTimeout` : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird. Der Standardwert ist treiberabhängig.
-   `ConnectionTimeout` : Eine Dauer, die steuert, wie lange gewartet wird, bevor ein Versuch zur Verbindungsherstellung mit dem Server abgebrochen wird. Der Standardwert ist treiberabhängig.
-   `SubQueries` : Eine Zahl (0, 1 oder 2), die den Wert der SubQueries-Eigenschaft in der Verbindungszeichenfolge festlegt. Hierüber wird das Verhalten berechneter Elemente in untergeordneten SELECT-Ausdrücken oder Teilcubes gesteuert (Standardwert: 2).
-   `Implementation`



## Category
Accessing data
