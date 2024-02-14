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

Gibt Datenbanken für die Analysis Services-Instanz "<code>server</code>" zurück. Ein optionaler Datensatzparameter "<code>options</code>" kann angegeben werden, um zusätzliche Eigenschaften festzulegen. Der Datensatz kann die folgenden Felder enthalten:    <ul><li><code>TypedMeasureColumns</code> : Ein logischer Wert, der angibt, ob die im mehrdimensionalen oder tabellarischen Modell angegebenen Typen f&#252;r die Typen der hinzugef&#252;gten Measurespalten verwendet werden. Bei Festlegung auf FALSE wird f&#252;r alle Measurespalten der Typ &quot;number&quot; verwendet. Der Standardwert f&#252;r diese Option lautet FALSE.</li><li><code>Culture</code> : Ein Kulturname, der die Kultur f&#252;r die Daten angibt. Dieser Wert entspricht der Eigenschaft &quot;Gebietsschema-ID&quot; der Verbindungszeichenfolge.</li><li><code>CommandTimeout</code> : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgef&#252;hrt werden darf, bevor sie abgebrochen wird. Der Standardwert ist treiberabh&#228;ngig.</li><li><code>ConnectionTimeout</code> : Eine Dauer, die steuert, wie lange gewartet wird, bevor ein Versuch zur Verbindungsherstellung mit dem Server abgebrochen wird. Der Standardwert ist treiberabh&#228;ngig.</li><li><code>SubQueries</code> : Eine Zahl (0, 1 oder 2), die den Wert der SubQueries-Eigenschaft in der Verbindungszeichenfolge festlegt. Hier&#252;ber wird das Verhalten berechneter Elemente in untergeordneten SELECT-Ausdr&#252;cken oder Teilcubes gesteuert (Standardwert: 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
