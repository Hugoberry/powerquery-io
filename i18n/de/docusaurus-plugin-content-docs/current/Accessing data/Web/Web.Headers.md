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

Gibt die von <code>url</code> heruntergeladenen Header als Datensatz zurück. Ein optionaler Datensatzparameter, <code>options</code>, kann angegeben werden, um zusätzliche Eigenschaften anzugeben. Der Datensatz kann die folgenden Felder enthalten:    <ul><li><code>Query</code> : F&#252;gen Sie der URL programmgesteuert Abfrageparameter hinzu, ohne sich um Escapezeichen Gedanken zu machen.</li><li><code>ApiKeyName</code> : Wenn die Zielwebsite einen Hinweis auf einen API-Schl&#252;ssel umfasst, kann dieser Parameter verwendet werden, um den Namen (nicht den Wert) des Schl&#252;sselparameters anzugeben, der in der URL verwendet werden muss. Der tats&#228;chliche Schl&#252;sselwert wird in den Anmeldeinformationen angegeben.</li><li><code>Headers</code> : Durch das Angeben dieses Werts als Datensatz werden zus&#228;tzliche Header f&#252;r eine HTTP-Anforderung bereitgestellt.</li><li><code>Timeout</code> : Durch das Angeben dieses Werts als Dauer wird das Timeout f&#252;r eine HTTP-Anforderung ge&#228;ndert. Der Standardwert betr&#228;gt 100&#160;Sekunden.</li><li><code>ExcludedFromCacheKey</code> : Durch das Angeben dieses Wert als Liste werden die betreffenden HTTP-Headerschl&#252;ssel nicht in die Berechnung der Daten f&#252;r die Zwischenspeicherung einbezogen.</li><li><code>IsRetry</code> : Durch das Angeben dieses logischen Werts als TRUE werden m&#246;glicherweise im Cache vorhandene Antworten beim Abrufen von Daten ignoriert.</li><li><code>ManualStatusHandling</code> : Durch das Angeben dieses Werts als Liste wird eine integrierte Verarbeitung von HTTP-Anforderungen verhindert, deren Antwort einen dieser Statuscodes umfasst.</li><li><code>RelativePath</code> : Durch das Angeben dieses Werts als Text wird dieser vor dem Ausf&#252;hren der Anforderung an die Basis-URL angef&#252;gt.</li></ul>    Die HTTP-Anforderung wird mit der Methode HEAD ausgeführt. Außerhalb eines benutzerdefinierten Datenconnectors ist nur eine Teilmenge der Antwortheader verfügbar (aus Sicherheitsgründen).    


## Examples

### Example #1 
Rufen Sie die HTTP-Header für &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; mithilfe der Optionen &#34;RelativePath&#34; und &#34;Query&#34; ab.
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
