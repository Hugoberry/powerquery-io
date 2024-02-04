---
title: OData.Feed
---

# OData.Feed


## Description

Gibt eine Tabelle mit OData-Feeds zurück, die von einem OData-Dienst bereitgestellt werden.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Gibt eine Tabelle mit OData-Feeds zurück, die von einem OData-Dienst von einem URI <code>serviceUri</code>, Header <code>headers</code>, angeboten werden. Ein boolescher Wert, der angibt, ob gleichzeitige Verbindungen verwendet werden sollen, oder ein optionaler Datensatzparameter <code>options</code> kann angegeben werden, um die folgenden Optionen zu steuern:    <ul>    <li><code>Query</code>: Fügt der URL programmgesteuert Abfrageparameter hinzu, ohne dass Sie sich um Escapezeichen kümmern müssen. </li>    <li> <code>Headers</code>: Durch Angabe dieses Werts als Datensatz werden für eine HTTP-Anforderung zusätzliche Header bereitgestellt.</li>    <li> <code>ExcludedFromCacheKey</code>: Wenn dieser Wert als Liste angegeben wird, werden diese HTTP-Headerschlüssel nicht in die Berechnung für das Zwischenspeichern von Daten einbezogen.</li>    <li> <code>ApiKeyName</code>: Wenn auf der Zielwebsite ein API-Schlüssel vorhanden ist, kann dieser Parameter verwendet werden, um den Namen (nicht den Wert) des Schlüsselparameters anzugeben, der in der URL verwendet werden muss. Der tatsächliche Schlüsselwert wird in den Anmeldeinformationen bereitgestellt.</li>    <li> <code>Timeout</code>: Durch Angabe dieses Werts als Dauer wird die Zeitüberschreitung für eine HTTP-Anforderung geändert. Der Standardwert beträgt 600 Sekunden.</li>    <li> <code>EnableBatch</code>: Ein logischer Wert (TRUE/FALSE), durch den festgelegt wird, ob die Generierung einer OData $batch-Anforderung zugelassen werden soll, wenn die MaxUriLength überschritten wird (der Standardwert ist FALSE).</li>    <li> <code>MaxUriLength</code>: Eine Zahl, durch welche die maximale Länge eines zulässigen URI angegeben wird, der an einen OData-Dienst gesendet wird. Wenn dieser Wert überschritten wird und EnableBatch TRUE ist, erfolgt die Anforderung an einen OData $batch-Endpunkt. Andernfalls tritt ein Fehler auf (der Standardwert ist 2048).</li>    <li> <code>Concurrent</code>: Ein logischer Wert (TRUE/FALSE). Wenn auf TRUE festgelegt, werden Anforderungen an den Diensts gleichzeitig verarbeitet. Wenn auf FALSE festgelegt, werden Anforderungen sequentiell verarbeitet. Wenn dieser Wert nicht angegeben ist, wird er durch die AsynchronousRequestsSupported-Anmerkung des Diensts bestimmt. Wenn der Dienst nicht angibt, ob AsynchronousRequestsSupported unterstützt wird, werden Anforderungen sequenziell verarbeitet.</li>    <li> <code>ODataVersion</code>: Eine Zahl (3 oder 4), welche die für diesen OData-Dienst zu verwendende OData-Protokollversion angibt. Wenn nicht angegeben, werden alle unterstützten Versionen angefordert. Die Dienstversion wird vom OData-Versionsheader festgelegt, der vom Dienst zurückgegeben wurde.</li>    <li> <code>FunctionOverloads</code>: Ein logischer Wert (TRUE/FALSE). Wenn auf TRUE festgelegt, werden Funktionsimportüberladungen im Navigator als separate Einträge aufgelistet. Wenn auf FALSE festgelegt, werden Funktionsimportüberladungen im Navigator als eine Vereinigungsfunktion aufgelistet. Standardwert für V3: FALSE. Standardwert für V4: TRUE.</li>    <li> <code>MoreColumns</code>: Ein logischer Wert (TRUE/FALSE). Wenn auf TRUE festgelegt, wird jedem Entitätsfeed mit offenen Typen und polymorphen Typen eine Spalte „Weitere Spalten“ hinzugefügt. Diese enthält die Felder, die im Basistyp nicht deklariert sind. Wenn auf FALSE festgelegt, ist dieses Feld nicht vorhanden. Der Standardwert ist FALSE.</li>    <li> <code>IncludeAnnotations</code>: Eine durch Kommas getrennte Liste von Namespace-qualifizierten Begriffsnamen oder -mustern, die mit „\*“ als Platzhalterzeichen einbezogen werden. Standardmäßig werden keine Anmerkungen einbezogen.</li>    <li> <code>IncludeMetadataAnnotations</code>: Eine durch Kommas getrennte Liste von Namespace-qualifizierten Begriffsnamen oder -mustern, die in Anforderungen für Metadatendokumente einbezogen werden, mit „\*“ als Platzhalter. Umfasst standardmäßig dieselben Anmerkungen wie IncludeAnnotations.</li><li> <code>OmitValues</code>: Hiermit kann der OData-Dienst das Ausschreiben bestimmter Werte in Antworten vermeiden. Bei Bestätigung durch den Dienst werden diese Werte aus den ausgelassenen Feldern abgeleitet. Die Optionen umfassen:      <ul>        <li><code>ODataOmitValues.Nulls</code> : Ermöglicht dem OData-Service NULL-Werte auszulassen.</li>      </ul>    </li>    <li> <code>Implementation</code> : Gibt die Implementierung des zu verwendenden OData-Connectors an. Gültige Werte sind „2.0“ oder NULL.</li>    </ul>


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
