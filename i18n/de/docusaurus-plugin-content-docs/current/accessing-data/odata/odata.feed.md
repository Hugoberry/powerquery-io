---
title: OData.Feed
---

# OData.Feed


Gibt eine Tabelle mit OData-Feeds zurück, die von einem OData-Dienst bereitgestellt werden.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

Gibt eine Tabelle mit OData-Feeds zurück, die von einem OData-Dienst von einem URI `serviceUri`, Header `headers`, angeboten werden. Ein boolescher Wert, der angibt, ob gleichzeitige Verbindungen verwendet werden sollen, oder ein optionaler Datensatzparameter `options` kann angegeben werden, um die folgenden Optionen zu steuern:

-   `Query`: Fügt der URL programmgesteuert Abfrageparameter hinzu, ohne dass Sie sich um Escapezeichen kümmern müssen.
-   `Headers`: Wenn Sie diesen Wert als Datensatz angeben, werden einer HTTP-Anforderung zusätzliche Header bereitgestellt.
-   `ExcludedFromCacheKey`: Wenn Sie diesen Wert als Liste angeben, werden diese HTTP-Headerschlüssel von der Berechnung für das Zwischenspeichern von Daten ausgeschlossen.
-   `ApiKeyName`: Wenn die Zielwebsite über einen API-Schlüssel verfügt, kann dieser Parameter verwendet werden, um den Namen (nicht den Wert) des Schlüsselparameters anzugeben, der in der URL verwendet werden muss. Der tatsächliche Schlüsselwert wird in den Anmeldeinformationen bereitgestellt.
-   `Timeout`: Durch Angabe dieses Werts als Dauer wird die Zeitüberschreitung für eine HTTP-Anforderung geändert. Der Standardwert beträgt 600 Sekunden.
-   `EnableBatch`: Ein logischer Wert (WAHR/FALSCH), durch den festgelegt wird, ob die Generierung einer OData $batch-Anforderung zugelassen werden soll, wenn die MaxUriLength überschritten wird (Standard ist FALSCH).
-   `MaxUriLength`: Eine Zahl, durch welche die maximale Länge eines zulässigen URI angegeben wird, der an einen OData-Dienst gesendet wird. Wenn dieser Wert überschritten wird und EnableBatch WAHR ist, erfolgt die Anforderung an einen OData $batch-Endpunkt. Andernfalls tritt ein Fehler auf (der Standardwert ist 2048).
-   `Concurrent`: Ein logischer Wert (WAHR/FALSCH), wenn auf WAHR festgelegt, werden Anforderungen an den Dienst gleichzeitig verarbeitet. Wenn auf FALSCH festgelegt, werden Anforderungen sequentiell verarbeitet. Wenn dieser Wert nicht angegeben ist, wird er durch die AsynchronousRequestsSupported-Anmerkung des Diensts bestimmt. Wenn der Dienst nicht angibt, ob AsynchronousRequestsSupported unterstützt wird, werden Anforderungen sequenziell verarbeitet.
-   `ODataVersion`: Eine Zahl (3 oder 4), die die für diesen OData-Dienst zu verwendende OData-Protokollversion angibt. Wenn nicht angegeben, werden alle unterstützten Versionen angefordert. Die Dienstversion wird vom OData-Versionsheader festgelegt, der vom Dienst zurückgegeben wurde.
-   `FunctionOverloads`: Ein logischer Wert (WAHR/FALSCH), wenn auf WAHR festgelegt, werden Funktionsimportüberladungen im Navigator als separate Einträge aufgelistet, wenn auf FALSCH festgelegt, werden Funktionsimportüberladungen im Navigator als eine Vereinigungsfunktion aufgelistet. Standardwert für V3: FALSCH. Standardwert für V4: WAHR.
-   `MoreColumns`: Ein logischer Wert (WAHR/FALSCH), wenn auf WAHR festgelegt, wird jedem Entitätsfeed mit offenen Typen und polymorphen Typen eine Spalte „Weitere Spalten“ hinzugefügt. Diese enthält die Felder, die im Basistyp nicht deklariert sind. Wenn auf FALSCH festgelegt, ist dieses Feld nicht vorhanden. Der Standardwert ist FALSCH.
-   `IncludeAnnotations`: Eine durch Kommas getrennte Liste von Namespace-qualifizierten Begriffsnamen oder -mustern, die mit „\*“ als Platzhalterzeichen einbezogen werden. Standardmäßig werden keine Anmerkungen einbezogen.
-   `IncludeMetadataAnnotations`: Eine durch Kommas getrennte Liste von Namespace-qualifizierten Begriffsnamen oder -mustern, die in Anforderungen für Metadatendokumente einbezogen werden, mit „\*“ als Platzhalter. Umfasst standardmäßig dieselben Anmerkungen wie IncludeAnnotations.
-   `OmitValues`: Hiermit kann der OData-Dienst das Ausschreiben bestimmter Werte in Antworten vermeiden. Bei Bestätigung durch den Dienst werden diese Werte aus den ausgelassenen Feldern abgeleitet. Die Optionen umfassen:
    -   `ODataOmitValues.Nulls`: Ermöglicht dem OData-Dienst, null-Werte auszulassen.
-   `Implementation`: Gibt die Implementierung des zu verwendenden OData-Connectors an. Gültige Werte sind „2.0“ oder NULL.


## Examples

### Example #1
Stellen Sie eine Verbindung mit dem TripPin-OData-Dienst her.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
