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

Gibt eine Tabelle mit mehrdimensionalen Paketen aus der SAP HANA-Datenbank "<code>server</code>" zurück. Ein optionaler Datensatzparameter "<code>options</code>" kann angegeben werden, um die folgenden Optionen zu steuern:    <ul><li><code>Query</code> : Eine native SQL-Abfrage, die zum Abrufen von Daten verwendet wird. Wenn die Abfrage mehrere Resultsets erzeugt, wird nur das erste zur&#252;ckgegeben.</li><li><code>Distribution</code> : Eine SapHanaDistribution, die den Wert der Eigenschaft &quot;Distribution&quot; in der Verbindungszeichenfolge festlegt. Das Anweisungsrouting ist die Methode zum Auswerten des richtigen Serverknotens eines verteilten Systems vor der Anweisungsausf&#252;hrung. Der Standardwert lautet &quot;SapHanaDistribution.All&quot;.</li><li><code>Implementation</code> : Hiermit wird die zu verwendende SAP HANA-Connectorimplementierung angegeben.</li><li><code>EnableColumnBinding</code> : Bindet beim Abrufen von Daten Variablen an die Spalten einer SAP-HANA-Ergebnismenge. Kann m&#246;glicherweise die Leistung auf Kosten einer etwas h&#246;heren Speicherauslastung verbessern. Der Standardwert ist falsch.</li><li><code>ConnectionTimeout</code> : Ein Zeitraum, der steuert, wie lange gewartet wird, bevor ein Versuch zur Verbindungsherstellung mit dem Server abgebrochen wird. Der Standardwert ist 15 Sekunden.</li><li><code>CommandTimeout</code> : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgef&#252;hrt werden darf, bevor sie abgebrochen wird. Der Standardwert betr&#228;gt zehn Minuten.</li></ul>    



## Category
Accessing data
