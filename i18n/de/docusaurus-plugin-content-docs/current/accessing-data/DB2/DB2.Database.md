---
title: DB2.Database
---

# DB2.Database


Gibt eine Tabelle der SQL-Tabellen und Ansichten zurück, die in einer Db2-Datenbank verfügbar sind.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Gibt eine Tabelle der SQL-Tabellen und -Sichten zurück, die in einer Db2-Datenbank auf dem Server "<code>server</code>" in der Datenbankinstanz mit dem Namen "<code>database</code>" verfügbar sind. Der Port kann optional mit dem Server (getrennt durch einen Doppelpunkt) angegeben werden. Der optionale Datensatzparameter "<code>options</code>" kann angegeben werden, um die folgenden Optionen zu steuern:    <ul><li><code>CreateNavigationProperties</code> : Ein logischer Wert (TRUE/FALSE), der festlegt, ob f&#252;r die zur&#252;ckgegebenen Werte Navigationseigenschaften generiert werden (Standardwert: TRUE).</li><li><code>NavigationPropertyNameGenerator</code> : Eine Funktion, die zur Erstellung von Namen f&#252;r Navigationseigenschaften verwendet wird.</li><li><code>Query</code> : Eine native SQL-Abfrage, die zum Abrufen von Daten verwendet wird. Wenn die Abfrage mehrere Resultsets erzeugt, wird nur das erste zur&#252;ckgegeben.</li><li><code>CommandTimeout</code> : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgef&#252;hrt werden darf, bevor sie abgebrochen wird. Der Standardwert betr&#228;gt zehn Minuten.</li><li><code>ConnectionTimeout</code> : Eine Dauer, die steuert, wie lange gewartet wird, bevor ein Versuch zur Verbindungsherstellung mit dem Server abgebrochen wird. Der Standardwert ist treiberabh&#228;ngig.</li><li><code>HierarchicalNavigation</code> : Ein logischer Wert (TRUE/FALSE), der festlegt, ob die Tabellen nach ihren Schemanamen gruppiert angezeigt werden (Standardwert: FALSE).</li><li><code>Implementation</code> : Gibt die zu verwendende Implementierung des internen Datenbankanbieters an. G&#252;ltige Werte: &quot;IBM&quot; und &quot;Microsoft&quot;.</li><li><code>BinaryCodePage</code> : Eine Zahl f&#252;r die CCSID (Coded Character Set Identifier, ID f&#252;r codierte Zeichens&#228;tze) zum Decodieren von Db2 FOR BIT-Bin&#228;rdaten in Zeichenfolgen. Gilt f&#252;r &quot;Implementation = &quot;Microsoft&quot;&quot;. Legen Sie &quot;0&quot; fest, um die Konvertierung zu deaktivieren (Standardwert). Legen Sie 1 fest, um basierend auf der Datenbankcodierung zu konvertieren. Legen Sie eine andere CCSID-Zahl fest, um in die Anwendungscodierung zu konvertieren.</li><li><code>PackageCollection</code> : Gibt einen Zeichenfolgenwert f&#252;r die Paketsammlung an (Standardwert: &quot;NULLID&quot;), um die Verwendung freigegebener Pakete zu aktivieren, die zum Verarbeiten von SQL-Anweisungen erforderlich sind. Gilt f&#252;r &quot;Implementation = &quot;Microsoft&quot;&quot;.</li><li><code>UseDb2ConnectGateway</code> : Gibt an, ob die Verbindung &#252;ber ein DB2 Connect-Gateway hergestellt wird. Gilt f&#252;r Implementierung = &quot;Microsoft&quot;.</li></ul>    Der Datensatzparameter wird beispielsweise als [option1 = wert1, option2 = wert2...] oder [Query = "select ..."] angegeben.    



## Category
Accessing data
