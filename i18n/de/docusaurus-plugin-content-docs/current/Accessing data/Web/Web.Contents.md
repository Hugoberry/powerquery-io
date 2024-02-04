---
title: Web.Contents
---

# Web.Contents


## Description

Gibt die unter der URL heruntergeladenen Inhalte im Binärformat zurück.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Gibt die von <code>url</code> heruntergeladenen Inhalte als Binärdatei zurück. Ein optionaler Datensatzparameter (<code>options</code>) kann angegeben werden, um zusätzliche Eigenschaften anzugeben. Der Datensatz kann die folgenden Felder enthalten:    <ul><li><code>Query</code> : F&#252;gen Sie der URL programmgesteuert Abfrageparameter hinzu, ohne sich um Escapezeichen Gedanken zu machen.</li><li><code>ApiKeyName</code> : Wenn die Zielwebsite einen Hinweis auf einen API-Schl&#252;ssel umfasst, kann dieser Parameter verwendet werden, um den Namen (nicht den Wert) des Schl&#252;sselparameters anzugeben, der in der URL verwendet werden muss. Der tats&#228;chliche Schl&#252;sselwert wird in den Anmeldeinformationen angegeben.</li><li><code>Headers</code> : Durch das Angeben dieses Werts als Datensatz werden zus&#228;tzliche Header f&#252;r eine HTTP-Anforderung bereitgestellt.</li><li><code>Timeout</code> : Durch das Angeben dieses Werts als Dauer wird das Timeout f&#252;r eine HTTP-Anforderung ge&#228;ndert. Der Standardwert betr&#228;gt 100&#160;Sekunden.</li><li><code>ExcludedFromCacheKey</code> : Durch das Angeben dieses Wert als Liste werden die betreffenden HTTP-Headerschl&#252;ssel nicht in die Berechnung der Daten f&#252;r die Zwischenspeicherung einbezogen.</li><li><code>IsRetry</code> : Durch das Angeben dieses logischen Werts als TRUE werden m&#246;glicherweise im Cache vorhandene Antworten beim Abrufen von Daten ignoriert.</li><li><code>ManualStatusHandling</code> : Durch das Angeben dieses Werts als Liste wird eine integrierte Verarbeitung von HTTP-Anforderungen verhindert, deren Antwort einen dieser Statuscodes umfasst.</li><li><code>RelativePath</code> : Durch das Angeben dieses Werts als Text wird dieser vor dem Ausf&#252;hren der Anforderung an die Basis-URL angef&#252;gt.</li><li><code>Content</code> : Durch das Angeben dieses Werts wird die Webanforderung von GET in POST ge&#228;ndert. Hierbei wird der Wert der Option als Inhalt der POST-Anforderung verwendet.</li></ul>    Die HTTP-Anforderung wird entweder als GET (wenn kein Inhalt angegeben wird) oder als POST (wenn Inhalt vorhanden ist) ausgeführt. POST-Anforderungen dürfen nur anonym ausgeführt werden.    <br />    Die Header der HTTP-Antwort sind als Metadaten für das binäre Ergebnis verfügbar. Außerhalb eines benutzerdefinierten Datenconnectors ist (aus Sicherheitsgründen) nur eine Teilmenge der Antwortheader verfügbar.    


## Examples

### Example #1 
Hiermit werden die Inhalte von &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; mithilfe der Optionen &#34;RelativePath&#34; und &#34;Query&#34; abgerufen. Diese Optionen können zum dynamischen Abfragen einer statischen Basis-URL verwendet werden.
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
Stellen Sie eine Verbindung mit einer sicheren URL her, die einen Authentifizierungsschlüssel als Teil ihrer Abfragezeichenfolge akzeptiert. Anstatt den geheimen Schlüssel in M hart zu codieren (was ein Sicherheitsrisiko darstellen würde),     kann der Schlüssel sicher bereitgestellt werden, indem der Name (nicht sein Wert) in M angegeben wird, die Web-API-Authentifizierung ausgewählt und der Schlüsselwert als Teil der Web-API-Anmeldeinformationen eingegeben wird.    Bei dieser Verwendung generiert das folgende Beispiel eine Anforderung an &lt;code&gt;„https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*“&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
