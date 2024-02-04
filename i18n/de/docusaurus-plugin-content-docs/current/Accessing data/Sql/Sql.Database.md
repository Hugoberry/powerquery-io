---
title: Sql.Database
---

# Sql.Database


## Description

Gibt eine Tabelle mit SQL-Tabellen, Ansichten und gespeicherten Funktionen aus der SQL Server-Datenbank zurück.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Gibt eine Tabelle mit SQL-Tabellen, -Sichten und gespeicherten Funktionen aus der SQL Server-Datenbank "<code>database</code>" auf dem Server "<code>server</code>" zurück. Der Port kann optional mit dem Server (getrennt durch einen Doppelpunkt oder ein Komma) angegeben werden. Der optionale Datensatzparameter "<code>options</code>" kann angegeben werden, um die folgenden Optionen zu steuern:    <ul><li><code>Query</code> : Eine native SQL-Abfrage, die zum Abrufen von Daten verwendet wird. Wenn die Abfrage mehrere Resultsets erzeugt, wird nur das erste zur&#252;ckgegeben.</li><li><code>CreateNavigationProperties</code> : Ein logischer Wert (TRUE/FALSE), der festlegt, ob f&#252;r die zur&#252;ckgegebenen Werte Navigationseigenschaften generiert werden (Standardwert: TRUE).</li><li><code>NavigationPropertyNameGenerator</code> : Eine Funktion, die zur Erstellung von Namen f&#252;r Navigationseigenschaften verwendet wird.</li><li><code>MaxDegreeOfParallelism</code> : Eine Zahl, die den Wert der maxdop-Abfrageklausel in der generierten SQL-Abfrage festlegt.</li><li><code>CommandTimeout</code> : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgef&#252;hrt werden darf, bevor sie abgebrochen wird. Der Standardwert betr&#228;gt zehn Minuten.</li><li><code>ConnectionTimeout</code> : Eine Dauer, die steuert, wie lange gewartet wird, bevor ein Versuch zur Verbindungsherstellung mit dem Server abgebrochen wird. Der Standardwert ist treiberabh&#228;ngig.</li><li><code>HierarchicalNavigation</code> : Ein logischer Wert (TRUE/FALSE), der festlegt, ob die Tabellen nach ihren Schemanamen gruppiert angezeigt werden (Standardwert: FALSE).</li><li><code>MultiSubnetFailover</code> : Ein logischer Wert (TRUE/FALSE), der den Wert der Eigenschaft &quot;MultiSubnetFailover&quot; in der Verbindungszeichenfolge festlegt (Standardwert: FALSE).</li><li><code>UnsafeTypeConversions</code> : Ein logischer Wert (TRUE/FALSE), der bei Festlegung auf TRUE versucht, Typkonvertierungen zu falten. Ein fehlerhafter Versuch kann dazu f&#252;hren, dass die gesamte Abfrage nicht erfolgreich ausgef&#252;hrt werden kann. Nicht f&#252;r die allgemeine Verwendung empfohlen.</li><li><code>ContextInfo</code> : Ein Bin&#228;rwert, der verwendet wird, um vor dem Ausf&#252;hren der einzelnen Befehle die CONTEXT_INFO festzulegen.</li><li><code>OmitSRID</code> : Ein logischer Wert (TRUE/FALSE), der bei Festlegung auf TRUE die SRID ausl&#228;sst, wenn Well-Known Text aus Geometrie- und Geografietypen generiert wird.</li><li><code>EnableCrossDatabaseFolding</code> : Ein logischer Wert (wahr/falsch), der bei WAHR das Query Folding von Datenbanken auf demselben Server zul&#228;sst. Der Standardwert ist FALSCH.</li></ul>    Der Datensatzparameter wird beispielsweise als [option1 = wert1, option2 = wert2...] oder [Query = "select ..."] angegeben.    



## Category
Accessing data
