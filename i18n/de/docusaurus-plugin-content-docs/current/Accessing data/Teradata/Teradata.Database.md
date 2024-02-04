---
title: Teradata.Database
---

# Teradata.Database


## Description

Gibt eine Tabelle mit SQL-Tabellen und Ansichten aus der Teradata-Datenbank zurück.


## Syntax

```powerquery
Teradata.Database(
    server as text,
    optional options as record
) as table
```


## Details

Gibt eine Tabelle mit SQL-Tabellen und -Sichten aus der Teradata-Datenbank auf dem Server "<code>server</code>" zurück. Der Port kann optional mit dem Server (getrennt durch einen Doppelpunkt) angegeben werden. Der optionale Datensatzparameter "<code>options</code>" kann angegeben werden, um die folgenden Optionen zu steuern:    <ul><li><code>CreateNavigationProperties</code> : Ein logischer Wert (TRUE/FALSE), der festlegt, ob f&#252;r die zur&#252;ckgegebenen Werte Navigationseigenschaften generiert werden (Standardwert: TRUE).</li><li><code>NavigationPropertyNameGenerator</code> : Eine Funktion, die zur Erstellung von Namen f&#252;r Navigationseigenschaften verwendet wird.</li><li><code>Query</code> : Eine native SQL-Abfrage, die zum Abrufen von Daten verwendet wird. Wenn die Abfrage mehrere Resultsets erzeugt, wird nur das erste zur&#252;ckgegeben.</li><li><code>CommandTimeout</code> : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgef&#252;hrt werden darf, bevor sie abgebrochen wird. Der Standardwert betr&#228;gt zehn Minuten.</li><li><code>ConnectionTimeout</code> : Eine Dauer, die steuert, wie lange gewartet wird, bevor ein Versuch zur Verbindungsherstellung mit dem Server abgebrochen wird. Der Standardwert ist treiberabh&#228;ngig.</li><li><code>HierarchicalNavigation</code> : Ein logischer Wert (TRUE/FALSE), der festlegt, ob die Tabellen nach ihren Schemanamen gruppiert angezeigt werden (Standardwert: FALSE).</li></ul>    Der Datensatzparameter wird beispielsweise als [option1 = wert1, option2 = wert2...] oder [Query = "select ..."] angegeben.    



## Category
Accessing data
