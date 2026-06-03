---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Gibt die Report Suites in Adobe Analytics zurück.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Gibt eine Tabelle mit mehrdimensionalen Paketen aus Adobe Analytics zurück. Ein optionaler Datensatzparameter "`options`" kann angegeben werden, um die folgenden Optionen zu steuern:

-   `HierarchicalNavigation` : Ein logischer Wert (TRUE/FALSE), der festlegt, ob die Tabellen nach ihren Schemanamen gruppiert angezeigt werden (Standardwert: FALSE).
-   `MaxRetryCount` : Die Anzahl der Wiederholungsversuche, die beim Abrufen des Abfrageergebnisses ausgeführt werden. Der Standardwert ist 120.
-   `RetryInterval` : Die Zeitdauer zwischen Wiederholungsversuchen. Der Standardwert ist 1 Sekunde.
-   `Implementation` : Gibt die Adobe Analytics-API-Version an. Gültige Werte sind: „2.0“. Standardmäßig wird API-Version 1.4 verwendet.



## Category
Accessing data
