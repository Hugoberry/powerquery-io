---
title: Web.Contents
---

# Web.Contents


Gibt die unter der URL heruntergeladenen Inhalte im Binärformat zurück.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Gibt die von `url` heruntergeladenen Inhalte als Binärdatei zurück. Ein optionaler Datensatzparameter, `options`, kann zur Angabe zusätzlicher Eigenschaften angegeben werden. Der Datensatz kann die folgenden Felder enthalten:

-   `Query` : Fügen Sie der URL programmgesteuert Abfrageparameter hinzu, ohne sich um Escapezeichen Gedanken zu machen.
-   `ApiKeyName` : Wenn die Zielwebsite einen Hinweis auf einen API-Schlüssel umfasst, kann dieser Parameter verwendet werden, um den Namen (nicht den Wert) des Schlüsselparameters anzugeben, der in der URL verwendet werden muss. Der tatsächliche Schlüsselwert wird in den Anmeldeinformationen angegeben.
-   `Headers` : Durch das Angeben dieses Werts als Datensatz werden zusätzliche Header für eine HTTP-Anforderung bereitgestellt.
-   `Timeout` : Durch das Angeben dieses Werts als Dauer wird das Timeout für eine HTTP-Anforderung geändert. Der Standardwert beträgt 100 Sekunden.
-   `ExcludedFromCacheKey` : Durch das Angeben dieses Wert als Liste werden die betreffenden HTTP-Headerschlüssel nicht in die Berechnung der Daten für die Zwischenspeicherung einbezogen.
-   `IsRetry` : Durch das Angeben dieses logischen Werts als TRUE werden möglicherweise im Cache vorhandene Antworten beim Abrufen von Daten ignoriert.
-   `ManualStatusHandling` : Durch das Angeben dieses Werts als Liste wird eine integrierte Verarbeitung von HTTP-Anforderungen verhindert, deren Antwort einen dieser Statuscodes umfasst.
-   `RelativePath` : Durch das Angeben dieses Werts als Text wird dieser vor dem Ausführen der Anforderung an die Basis-URL angefügt.
-   `Content` : Durch das Angeben dieses Werts wird die Webanforderung von GET in POST geändert. Hierbei wird der Wert der Option als Inhalt der POST-Anforderung verwendet.

Die HTTP-Anforderung wird entweder als GET (wenn kein Inhalt angegeben wird) oder als POST (wenn Inhalt vorhanden ist) ausgeführt. POST-Anforderungen dürfen nur anonym ausgeführt werden.  
  
Die Header der HTTP-Antwort sind als Metadaten für das binäre Ergebnis verfügbar. Außerhalb eines benutzerdefinierten Datenconnectors ist (aus Sicherheitsgründen) nur eine Teilmenge der Antwortheader verfügbar.


## Examples

### Example #1
Hiermit werden die Inhalte von `"https://bing.com/search?q=Power+Query"` mithilfe der Optionen "RelativePath" und "Query" abgerufen. Diese Optionen können zum dynamischen Abfragen einer statischen Basis-URL verwendet werden.
```powerquery
let
    searchText = "Power Query"
in
    Web.Contents(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
binary
```


### Example #2
Hiermit wird ein POST für eine URL ausgeführt, indem binäre JSON-Nutzdaten übergeben werden und die Antwort als JSON analysiert wird.
```powerquery
let
    url = ...,
    headers = [#"Content-Type" = "application/json"],
    postData = Json.FromValue([x = 235.7, y = 41.53]),
    response = Web.Contents(
        url,
        [
            Headers = headers,
            Content = postData
        ]
    ),
    jsonResponse = Json.Document(response)
in
    jsonResponse
```

Result: 
```powerquery
table
```


### Example #3
Stellen Sie eine Verbindung mit einer sicheren URL her, die einen Authentifizierungsschlüssel als Teil ihrer Abfragezeichenfolge akzeptiert. Anstatt den geheimen Schlüssel in M hart zu codieren (was ein Sicherheitsrisiko darstellen würde), kann der Schlüssel sicher bereitgestellt werden, indem der Name (nicht sein Wert) in M angegeben wird, die Web-API-Authentifizierung ausgewählt und der Schlüsselwert als Teil der Web-API-Anmeldeinformationen eingegeben wird. Bei dieser Verwendung generiert das folgende Beispiel eine Anforderung an `„https://contoso.com/api/customers/get?api_key=******“`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
