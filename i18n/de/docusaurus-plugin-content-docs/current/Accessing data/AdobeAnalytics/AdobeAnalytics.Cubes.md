---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Gibt die Report Suites in Adobe Analytics zurück.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Gibt eine Tabelle mit mehrdimensionalen Paketen aus Adobe Analytics zurück. Ein optionaler Datensatzparameter "<code>options</code>" kann angegeben werden, um die folgenden Optionen zu steuern:    <ul><li><code>HierarchicalNavigation</code> : Ein logischer Wert (TRUE/FALSE), der festlegt, ob die Tabellen nach ihren Schemanamen gruppiert angezeigt werden (Standardwert: FALSE).</li><li><code>MaxRetryCount</code> : Die Anzahl der Wiederholungsversuche, die beim Abrufen des Abfrageergebnisses ausgef&#252;hrt werden. Der Standardwert ist 120.</li><li><code>RetryInterval</code> : Die Zeitdauer zwischen Wiederholungsversuchen. Der Standardwert ist 1 Sekunde.</li><li><code>Implementation</code> : Gibt die Adobe Analytics-API-Version an. G&#252;ltige Werte sind: „2.0“. Standardm&#228;&#223;ig wird API-Version 1.4 verwendet.</li></ul>    



## Category
Accessing data
