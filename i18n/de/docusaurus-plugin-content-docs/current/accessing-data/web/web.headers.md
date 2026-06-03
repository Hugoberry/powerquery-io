---
title: Web.Headers
---

# Web.Headers


Gibt die von der URL heruntergeladenen HTTP-Header als Datensatzwert zurück.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

Gibt die von `url` heruntergeladenen Header als Datensatz zurück. Ein optionaler Datensatzparameter, `options`, kann angegeben werden, um zusätzliche Eigenschaften anzugeben. Der Datensatz kann die folgenden Felder enthalten:

-   `Query` : Fügen Sie der URL programmgesteuert Abfrageparameter hinzu, ohne sich um Escapezeichen Gedanken zu machen.
-   `ApiKeyName` : Wenn die Zielwebsite einen Hinweis auf einen API-Schlüssel umfasst, kann dieser Parameter verwendet werden, um den Namen (nicht den Wert) des Schlüsselparameters anzugeben, der in der URL verwendet werden muss. Der tatsächliche Schlüsselwert wird in den Anmeldeinformationen angegeben.
-   `Headers` : Durch das Angeben dieses Werts als Datensatz werden zusätzliche Header für eine HTTP-Anforderung bereitgestellt.
-   `Timeout` : Durch das Angeben dieses Werts als Dauer wird das Timeout für eine HTTP-Anforderung geändert. Der Standardwert beträgt 100 Sekunden.
-   `ExcludedFromCacheKey` : Durch das Angeben dieses Wert als Liste werden die betreffenden HTTP-Headerschlüssel nicht in die Berechnung der Daten für die Zwischenspeicherung einbezogen.
-   `IsRetry` : Durch das Angeben dieses logischen Werts als TRUE werden möglicherweise im Cache vorhandene Antworten beim Abrufen von Daten ignoriert.
-   `ManualStatusHandling` : Durch das Angeben dieses Werts als Liste wird eine integrierte Verarbeitung von HTTP-Anforderungen verhindert, deren Antwort einen dieser Statuscodes umfasst.
-   `RelativePath` : Durch das Angeben dieses Werts als Text wird dieser vor dem Ausführen der Anforderung an die Basis-URL angefügt.

Die HTTP-Anforderung wird mit der Methode HEAD ausgeführt. Außerhalb eines benutzerdefinierten Datenconnectors ist nur eine Teilmenge der Antwortheader verfügbar (aus Sicherheitsgründen).


## Examples

### Example #1
Rufen Sie die HTTP-Header für `"https://bing.com/search?q=Power+Query"` mithilfe der Optionen "RelativePath" und "Query" ab.
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
