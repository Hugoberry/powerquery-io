---
title: Netezza.Database
---

# Netezza.Database


## Description

Hiermit werden Daten aus einer IBM Netezza-Datenbank importiert.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Gibt eine Tabelle mit Netezza-Tabellen, -Sichten und gespeicherten Funktionen aus der Netezza-Serverdatenbank <code>database</code> auf dem Server <code>server</code> zurück. Der Port kann (getrennt durch einen Doppelpunkt) optional mit dem Server angegeben werden. Der optionale Datensatzparameter <code>options</code> kann angegeben werden, um die folgenden Optionen zu steuern:<ul>        <li><code>CreateNavigationProperties</code>: Ein logischer Wert (TRUE/FALSE), der festlegt, ob für die zurückgegebenen Werte Navigationseigenschaften generiert werden sollen (Standardwert: TRUE).</li>        <li><code>HierarchicalNavigation</code>: Ein logischer Wert (TRUE/FALSE), der festlegt, ob die Tabellen nach ihren Schemanamen gruppiert angezeigt werden (Standardwert: FALSE).</li>        <li><code>ConnectionTimeout</code>: Eine Dauer, die steuert, wie lange ein Versuch zur Verbindungsherstellung mit dem Server dauern darf, bevor er abgebrochen wird. Der Standardwert ist vom Treiber abhängig.</li>        <li><code>CommandTimeout</code>: Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird. Der Standardwert ist vom Treiber abhängig.</li><li><code>NormalizeDatabaseName</code>: Ein logischer Wert (TRUE/FALSE), der festlegt, ob der Datenbankname in Großbuchstaben normalisiert oder buchstabengetreu interpretiert werden soll (Standardwert: TRUE).</li></ul>Der Datensatzparameter wird als [option1 = wert1, option2 = wert2...] angegeben.


## Examples

### Example #1 
Hiermit werden die Tabellen in einem IBM Netezza-Projekt aufgelistet.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



