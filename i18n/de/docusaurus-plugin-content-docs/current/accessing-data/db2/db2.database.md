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

Gibt eine Tabelle der SQL-Tabellen und -Sichten zurück, die in einer Db2-Datenbank auf dem Server „`server`“ in der Datenbankinstanz mit dem Namen „`database`“ verfügbar sind. Der Port kann optional mit dem Server (getrennt durch einen Doppelpunkt) angegeben werden. Der optionale Datensatzparameter „`options`“ kann angegeben werden, um die folgenden Optionen zu steuern:

-   `CreateNavigationProperties` : Ein logischer Wert (TRUE/FALSE), der festlegt, ob für die zurückgegebenen Werte Navigationseigenschaften generiert werden (Standardwert: TRUE).
-   `NavigationPropertyNameGenerator` : Eine Funktion, die zur Erstellung von Namen für Navigationseigenschaften verwendet wird.
-   `Query` : Eine native SQL-Abfrage, die zum Abrufen von Daten verwendet wird. Wenn die Abfrage mehrere Resultsets erzeugt, wird nur das erste zurückgegeben.
-   `CommandTimeout` : Eine Dauer, die steuert, wie lange die serverseitige Abfrage ausgeführt werden darf, bevor sie abgebrochen wird. Der Standardwert beträgt zehn Minuten.
-   `ConnectionTimeout` : Eine Dauer, die steuert, wie lange gewartet wird, bevor ein Versuch zur Verbindungsherstellung mit dem Server abgebrochen wird. Der Standardwert ist treiberabhängig.
-   `HierarchicalNavigation` : Ein logischer Wert (TRUE/FALSE), der festlegt, ob die Tabellen nach ihren Schemanamen gruppiert angezeigt werden (Standardwert: FALSE).
-   `Implementation` : Gibt die zu verwendende Implementierung des internen Datenbankanbieters an. Gültige Werte: "IBM" und "Microsoft".
-   `BinaryCodePage` : Eine Zahl für die CCSID (Coded Character Set Identifier, ID für codierte Zeichensätze) zum Decodieren von Db2 FOR BIT-Binärdaten in Zeichenfolgen. Gilt für "Implementation = "Microsoft"". Legen Sie "0" fest, um die Konvertierung zu deaktivieren (Standardwert). Legen Sie 1 fest, um basierend auf der Datenbankcodierung zu konvertieren. Legen Sie eine andere CCSID-Zahl fest, um in die Anwendungscodierung zu konvertieren.
-   `PackageCollection` : Gibt einen Zeichenfolgenwert für die Paketsammlung an (Standardwert: "NULLID"), um die Verwendung freigegebener Pakete zu aktivieren, die zum Verarbeiten von SQL-Anweisungen erforderlich sind. Gilt für "Implementation = "Microsoft"".
-   `UseDb2ConnectGateway` : Gibt an, ob die Verbindung über ein DB2 Connect-Gateway hergestellt wird. Gilt für Implementierung = "Microsoft".

Der Datensatzparameter wird beispielsweise als \[option1 = value1, option2 = value2...\] oder \[Query = "select ..."\] angegeben.



## Category
Accessing data
