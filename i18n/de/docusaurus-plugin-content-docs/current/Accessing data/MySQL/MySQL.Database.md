---
title: MySQL.Database
---

# MySQL.Database


## Description

Gibt eine Tabelle der SQL-Tabellen, Ansichten und gespeicherten Skalarfunktionen zurück, die in einer MySQL-Datenbank verfügbar sind.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Gibt eine Tabelle der SQL-Tabellen, -Sichten und gespeicherten Skalarfunktionen zurück, die in einer MySQL-Datenbank auf dem Server "<code>server</code>" in der Datenbankinstanz mit dem Namen "<code>database</code>" verfügbar sind. Der Port kann optional mit dem Server (getrennt durch einen Doppelpunkt) angegeben werden. Der optionale Datensatzparameter "<code>options</code>" kann angegeben werden, um die folgenden Optionen zu steuern:    <ul><li><code>Encoding</code> : Ein TextEncoding-Wert, der den Zeichensatz zum Codieren aller an den Server gesendeten Abfragen angibt (der Standardwert ist NULL).</li><li><code>CreateNavigationProperties</code> : Ein logischer Wert (TRUE/FALSE), der festlegt, ob f&#252;r die zur&#252;ckgegebenen Werte Navigationseigenschaften generiert werden (Standardwert: TRUE).</li><li><code>NavigationPropertyNameGenerator</code> : Eine Funktion, die zur Erstellung von Namen f&#252;r Navigationseigenschaften verwendet wird.</li><li><code>Query</code> : Eine native SQL-Abfrage, die zum Abrufen von Daten verwendet wird. Wenn die Abfrage mehrere Resultsets erzeugt, wird nur das erste zur&#252;ckgegeben.</li><li><code>CommandTimeout</code> : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgef&#252;hrt werden darf, bevor sie abgebrochen wird. Der Standardwert betr&#228;gt zehn Minuten.</li><li><code>ConnectionTimeout</code> : Eine Dauer, die steuert, wie lange gewartet wird, bevor ein Versuch zur Verbindungsherstellung mit dem Server abgebrochen wird. Der Standardwert ist treiberabh&#228;ngig.</li><li><code>TreatTinyAsBoolean</code> : Ein logischer Wert (TRUE/FALSE), der festlegt, ob tinyint-Spalten auf dem Server als logische Werte erzwungen werden. Der Standardwert lautet TRUE.</li><li><code>OldGuids</code> : Ein logischer Wert (TRUE/FALSE), der festlegt, ob char(36)-Spalten (bei FALSE) oder binary(16)-Spalten (bei TRUE) als GUIDs behandelt werden. Der Standardwert lautet FALSE.</li><li><code>ReturnSingleDatabase</code> : Ein logischer Wert (TRUE/FALSE), der festlegt, ob alle Tabellen aus s&#228;mtlichen Datenbanken (bei FALSE) oder Tabellen und Sichten der angegebenen Datenbank (bei TRUE) zur&#252;ckgegeben werden. Der Standardwert lautet FALSE.</li><li><code>HierarchicalNavigation</code> : Ein logischer Wert (TRUE/FALSE), der festlegt, ob die Tabellen nach ihren Schemanamen gruppiert angezeigt werden (Standardwert: FALSE).</li></ul>    Der Datensatzparameter wird beispielsweise als [option1 = wert1, option2 = wert2...] oder [Query = "select ..."] angegeben.    



## Category
Accessing data
