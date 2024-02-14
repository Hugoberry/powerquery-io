---
title: Sql.Databases
---

# Sql.Databases


Gibt eine Tabelle mit Datenbanken auf einem Server mit SQL Server zurück.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Tabelle mit Datenbanken auf dem angegebenen SQL-Server zurück: <code>server</code>. Ein optionaler Aufzeichnungsparameter, <code>options</code>, kann angegeben werden, um die folgenden Optionen zu steuern:    <ul><li><code>CreateNavigationProperties</code> : Ein logischer Wert (TRUE/FALSE), der festlegt, ob f&#252;r die zur&#252;ckgegebenen Werte Navigationseigenschaften generiert werden (Standardwert: TRUE).</li><li><code>NavigationPropertyNameGenerator</code> : Eine Funktion, die zur Erstellung von Namen f&#252;r Navigationseigenschaften verwendet wird.</li><li><code>MaxDegreeOfParallelism</code> : Eine Zahl, die den Wert der maxdop-Abfrageklausel in der generierten SQL-Abfrage festlegt.</li><li><code>CommandTimeout</code> : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgef&#252;hrt werden darf, bevor sie abgebrochen wird. Der Standardwert betr&#228;gt zehn Minuten.</li><li><code>ConnectionTimeout</code> : Eine Dauer, die steuert, wie lange gewartet wird, bevor ein Versuch zur Verbindungsherstellung mit dem Server abgebrochen wird. Der Standardwert ist treiberabh&#228;ngig.</li><li><code>HierarchicalNavigation</code> : Ein logischer Wert (TRUE/FALSE), der festlegt, ob die Tabellen nach ihren Schemanamen gruppiert angezeigt werden (Standardwert: FALSE).</li><li><code>MultiSubnetFailover</code> : Ein logischer Wert (TRUE/FALSE), der den Wert der Eigenschaft &quot;MultiSubnetFailover&quot; in der Verbindungszeichenfolge festlegt (Standardwert: FALSE).</li><li><code>UnsafeTypeConversions</code> : Ein logischer Wert (TRUE/FALSE), der bei Festlegung auf TRUE versucht, Typkonvertierungen zu falten. Ein fehlerhafter Versuch kann dazu f&#252;hren, dass die gesamte Abfrage nicht erfolgreich ausgef&#252;hrt werden kann. Nicht f&#252;r die allgemeine Verwendung empfohlen.</li><li><code>ContextInfo</code> : Ein Bin&#228;rwert, der verwendet wird, um vor dem Ausf&#252;hren der einzelnen Befehle die CONTEXT_INFO festzulegen.</li><li><code>OmitSRID</code> : Ein logischer Wert (TRUE/FALSE), der bei Festlegung auf TRUE die SRID ausl&#228;sst, wenn Well-Known Text aus Geometrie- und Geografietypen generiert wird.</li><li><code>EnableCrossDatabaseFolding</code> : Ein logischer Wert (wahr/falsch), der bei WAHR das Query Folding von Datenbanken auf demselben Server zul&#228;sst. Der Standardwert ist FALSCH.</li></ul>    Der Datensatzparameter wird beispielsweise als [option1 = wert1, option2 = wert2...] angegeben.    <br />    Das Festlegen einer SQL-Abfrage für die Ausführung auf dem Server wird nicht unterstützt. <code>Sql.Database</code> sollte stattdessen zum Ausführen einer SQL-Abfrage verwendet werden.    



## Category
Accessing data
