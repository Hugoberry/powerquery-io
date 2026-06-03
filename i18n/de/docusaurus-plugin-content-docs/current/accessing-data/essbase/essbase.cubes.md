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

Gibt eine Tabelle mit Cubes gruppiert nach Essbase-Server aus einer Essbase-Instanz auf dem APS-Server "`url`" zurück. Ein optionaler Datensatzparameter "`options`" kann zum Steuern der folgenden Optionen angegeben werden:

-   `CommandTimeout` : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird. Der Standardwert beträgt zehn Minuten.



## Category
Accessing data
