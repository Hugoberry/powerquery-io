---
title: WebAction.Request
---

# WebAction.Request


Erstellt eine Aktion, die bei Ausführung die Ergebnisse einer HTTP-Anforderung als Binärwert zurückgibt.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Erstellt eine Aktion, die bei Ausführung die Ergebnisse einer `method`\-Anforderung für `url` zurückgibt, die HTTP als binären Wert verwendet. Ein optionaler Datensatzparameter (`options`) kann angegeben werden, um zusätzliche Eigenschaften anzugeben. Der Datensatz kann die folgenden Felder enthalten:

-   `Query` : Fügen Sie der URL programmgesteuert Abfrageparameter hinzu, ohne sich um Escapezeichen Gedanken zu machen.
-   `ApiKeyName` : Wenn die Zielwebsite einen Hinweis auf einen API-Schlüssel umfasst, kann dieser Parameter verwendet werden, um den Namen (nicht den Wert) des Schlüsselparameters anzugeben, der in der URL verwendet werden muss. Der tatsächliche Schlüsselwert wird in den Anmeldeinformationen angegeben.
-   `Headers` : Durch das Angeben dieses Werts als Datensatz werden zusätzliche Header für eine HTTP-Anforderung bereitgestellt.
-   `Timeout` : Durch das Angeben dieses Werts als Dauer wird das Timeout für eine HTTP-Anforderung geändert. Der Standardwert beträgt 100 Sekunden.
-   `ExcludedFromCacheKey` : Durch das Angeben dieses Wert als Liste werden die betreffenden HTTP-Headerschlüssel nicht in die Berechnung der Daten für die Zwischenspeicherung einbezogen.
-   `IsRetry` : Durch das Angeben dieses logischen Werts als TRUE werden möglicherweise im Cache vorhandene Antworten beim Abrufen von Daten ignoriert.
-   `ManualStatusHandling` : Durch das Angeben dieses Werts als Liste wird eine integrierte Verarbeitung von HTTP-Anforderungen verhindert, deren Antwort einen dieser Statuscodes umfasst.
-   `RelativePath` : Durch das Angeben dieses Werts als Text wird dieser vor dem Ausführen der Anforderung an die Basis-URL angefügt.
-   `Content` : Durch das Angeben dieses Werts werden die zugehörigen Inhalte als Textkörper der HTTP-Anforderung verwendet.

Beachten Sie, dass diese Funktion in den meisten Kontexten deaktiviert ist. Erwägen Sie stattdessen die Verwendung von Web.Contents oder Web.Headers.


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
