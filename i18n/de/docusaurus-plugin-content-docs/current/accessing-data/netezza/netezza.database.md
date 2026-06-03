---
title: Netezza.Database
---

# Netezza.Database


Hiermit werden Daten aus einer IBM Netezza-Datenbank importiert.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Tabelle mit Netezza-Tabellen, -Sichten und gespeicherten Funktionen aus der Netezza-Serverdatenbank `database` auf dem Server `server` zurück. Der Port kann (getrennt durch einen Doppelpunkt) optional mit dem Server angegeben werden. Der optionale Datensatzparameter `options` kann angegeben werden, um die folgenden Optionen zu steuern:

-   `CreateNavigationProperties`: Ein logischer Wert (TRUE/FALSE), der festlegt, ob für die zurückgegebenen Werte Navigationseigenschaften generiert werden sollen (Standardwert: TRUE).
-   `HierarchicalNavigation`: Ein logischer Wert (TRUE/FALSE), der festlegt, ob die Tabellen nach ihren Schemanamen gruppiert angezeigt werden (Standardwert: FALSE).
-   `ConnectionTimeout`: Eine Dauer, die steuert, wie lange ein Versuch zur Verbindungsherstellung mit dem Server dauern darf, bevor er abgebrochen wird. Der Standardwert ist vom Treiber abhängig.
-   `CommandTimeout`: Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird. Der Standardwert ist vom Treiber abhängig.
-   `NormalizeDatabaseName`: Ein logischer Wert (TRUE/FALSE), der festlegt, ob der Datenbankname in Großbuchstaben normalisiert oder buchstabengetreu interpretiert werden soll (Standardwert: TRUE).

Der Datensatzparameter wird als \[option1 = wert1, option2 = wert2...\] angegeben.


## Examples

### Example #1
Hiermit werden die Tabellen in einem IBM Netezza-Projekt aufgelistet.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



