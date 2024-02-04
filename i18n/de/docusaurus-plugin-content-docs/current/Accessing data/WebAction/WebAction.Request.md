---
title: WebAction.Request
---

# WebAction.Request


## Description

Erstellt eine Aktion, die bei Ausführung die Ergebnisse einer HTTP-Anforderung als Binärwert zurückgibt.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

Erstellt eine Aktion, die bei Ausführung die Ergebnisse einer <code>method</code>-Anforderung für <code>url</code> zurückgibt, die HTTP als binären Wert verwendet. Ein optionaler Datensatzparameter, <code>options</code>, kann bereitgestellt werden, um zusätzliche Eigenschaften anzugeben. Der Datensatz kann die folgenden Felder enthalten:    <ul><li><code>Query</code> : F&#252;gen Sie der URL programmgesteuert Abfrageparameter hinzu, ohne sich um Escapezeichen Gedanken zu machen.</li><li><code>ApiKeyName</code> : Wenn die Zielwebsite einen Hinweis auf einen API-Schl&#252;ssel umfasst, kann dieser Parameter verwendet werden, um den Namen (nicht den Wert) des Schl&#252;sselparameters anzugeben, der in der URL verwendet werden muss. Der tats&#228;chliche Schl&#252;sselwert wird in den Anmeldeinformationen angegeben.</li><li><code>Headers</code> : Durch das Angeben dieses Werts als Datensatz werden zus&#228;tzliche Header f&#252;r eine HTTP-Anforderung bereitgestellt.</li><li><code>Timeout</code> : Durch das Angeben dieses Werts als Dauer wird das Timeout f&#252;r eine HTTP-Anforderung ge&#228;ndert. Der Standardwert betr&#228;gt 100&#160;Sekunden.</li><li><code>ExcludedFromCacheKey</code> : Durch das Angeben dieses Wert als Liste werden die betreffenden HTTP-Headerschl&#252;ssel nicht in die Berechnung der Daten f&#252;r die Zwischenspeicherung einbezogen.</li><li><code>IsRetry</code> : Durch das Angeben dieses logischen Werts als TRUE werden m&#246;glicherweise im Cache vorhandene Antworten beim Abrufen von Daten ignoriert.</li><li><code>ManualStatusHandling</code> : Durch das Angeben dieses Werts als Liste wird eine integrierte Verarbeitung von HTTP-Anforderungen verhindert, deren Antwort einen dieser Statuscodes umfasst.</li><li><code>RelativePath</code> : Durch das Angeben dieses Werts als Text wird dieser vor dem Ausf&#252;hren der Anforderung an die Basis-URL angef&#252;gt.</li><li><code>Content</code> : Durch das Angeben dieses Werts werden die zugeh&#246;rigen Inhalte als Textk&#246;rper der HTTP-Anforderung verwendet.</li></ul>    <br />    Beachten Sie, dass diese Funktion in den meisten Kontexten deaktiviert ist. Erwägen Sie stattdessen die Verwendung von Web.Contents.    


## Examples

### Example #1 
Führen Sie eine GET-Anforderung für Bing aus.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
