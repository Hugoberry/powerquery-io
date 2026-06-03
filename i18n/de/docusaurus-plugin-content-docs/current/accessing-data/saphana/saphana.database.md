---
title: SapHana.Database
---

# SapHana.Database


Gibt die in einer SAP HANA-Datenbank enthaltenen Pakete zurück.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Tabelle mit mehrdimensionalen Paketen aus der SAP HANA-Datenbank "`server`" zurück. Ein optionaler Datensatzparameter "`options`" kann angegeben werden, um die folgenden Optionen zu steuern:

-   `Query` : Eine native SQL-Abfrage, die zum Abrufen von Daten verwendet wird. Wenn die Abfrage mehrere Resultsets erzeugt, wird nur das erste zurückgegeben.
-   `Distribution` : Eine SapHanaDistribution, die den Wert der Eigenschaft "Distribution" in der Verbindungszeichenfolge festlegt. Das Anweisungsrouting ist die Methode zum Auswerten des richtigen Serverknotens eines verteilten Systems vor der Anweisungsausführung. Der Standardwert lautet "SapHanaDistribution.All".
-   `Implementation` : Hiermit wird die zu verwendende SAP HANA-Connectorimplementierung angegeben.
-   `EnableColumnBinding` : Bindet beim Abrufen von Daten Variablen an die Spalten einer SAP-HANA-Ergebnismenge. Kann möglicherweise die Leistung auf Kosten einer etwas höheren Speicherauslastung verbessern. Der Standardwert ist falsch.
-   `ConnectionTimeout` : Ein Zeitraum, der steuert, wie lange gewartet wird, bevor ein Versuch zur Verbindungsherstellung mit dem Server abgebrochen wird. Der Standardwert ist 15 Sekunden.
-   `CommandTimeout` : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird. Der Standardwert beträgt zehn Minuten.



## Category
Accessing data
