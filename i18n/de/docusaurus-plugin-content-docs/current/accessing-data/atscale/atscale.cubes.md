---
title: AtScale.Cubes
---

# AtScale.Cubes


Hiermit werden Cubedaten aus AtScale importiert oder über DirectQuery abgefragt.


## Syntax

```powerquery
AtScale.Cubes(
    server as Uri.Type,
    optional options as record
) as table
```


## Remarks

Gibt Cubedaten aus AtScale auf dem Server <code>server</code> zurück. Der optionale Datensatzparameter <code>options</code> kann angegeben werden, um die folgenden Optionen zu steuern:<ul>        <li><code>TypedMeasureColumns</code>: Ein logischer Wert, der angibt, ob die im mehrdimensionalen oder tabellarischen Modell angegebenen Typen für die Typen der hinzugefügten Measurespalten verwendet werden. Bei Festlegung auf "false" wird der Typ "number" für alle Measurespalten verwendet. Der Standardwert für diese Option lautet "false".</li>        <li><code>CommandTimeout</code>: Eine Zeitspanne (in Sekunden), die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird. Der Standardwert ist vom Treiber abhängig. </li>        <li><code>ConnectionTimeout</code>: Eine Zeitspanne (in Sekunden), die steuert, wie lange ein Versuch zur Verbindungsherstellung mit dem Server dauern darf, bevor er abgebrochen wird. Der Standardwert ist vom Treiber abhängig. </li></ul>Der Datensatzparameter wird als [option1 = value1, option2 = value2...] angegeben.


