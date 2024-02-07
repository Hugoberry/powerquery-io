---
title: Essbase.Cubes
---

# Essbase.Cubes


Gibt die Cubes in einer Essbase-Instanz gruppiert nach Essbase-Server zurück.


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Tabelle mit Cubes gruppiert nach Essbase-Server aus einer Essbase-Instanz auf dem APS-Server "<code>url</code>" zurück. Ein optionaler Datensatzparameter "<code>options</code>" kann zum Steuern der folgenden Optionen angegeben werden:    <ul><li><code>CommandTimeout</code> : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgef&#252;hrt werden darf, bevor sie abgebrochen wird. Der Standardwert betr&#228;gt zehn Minuten.</li></ul>



## Category
Accessing data
