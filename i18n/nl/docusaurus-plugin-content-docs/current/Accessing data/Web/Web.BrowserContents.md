---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

Retourneert de HTML voor de opgegeven URL, zoals weergegeven door een webbrowser.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

Retourneert de HTML voor de opgegeven <code>url</code>, zoals weergegeven door een webbrowser. Er kan een optionele recordparameter, <code>options</code>, worden opgegeven om aanvullende eigenschappen op te geven. De record kan de volgende velden bevatten:     <ul>        <li><code>ApiKeyName</code>: als de doelsite een API-sleutel heeft, kan deze parameter worden gebruikt om de naam (niet de waarde) op te geven van de sleutelparameter die moet worden gebruikt in de URL. De werkelijke sleutelwaarde wordt opgegeven in credential.</li>        <li><code>WaitFor</code>: hiermee geeft u een voorwaarde op waarop moet worden gewacht voordat de HTML wordt gedownload, naast wachten tot de pagina is geladen (wat altijd gebeurt). Kan een record zijn met time-out- en/of selectorvelden. Als er alleen een time-out is opgegeven, wacht de functie de opgegeven tijd voordat de HTML wordt gedownload. Als zowel een Kiezer als een time-out zijn opgegeven en de time-out verstrijkt voordat de Kiezer op de pagina bestaat, wordt er een fout gegenereerd. Als een Kiezer is opgegeven zonder time-out, wordt een standaardtime-out van 30 seconden toegepast.</li>      </ul>    


## Examples

### Example #1 
Hiermee wordt de HTML voor https://microsoft.com geretourneerd.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
Hiermee wordt de HTML voor https://microsoft.com geretourneerd nadat is gewacht op het weergeven van een CSS-selector.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div:visible"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
Hiermee wordt de HTML voor https://microsoft.com geretourneerd nadat tien seconden is gewacht.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
Hiermee wordt de HTML voor https://microsoft.com geretourneerd nadat maximaal tien seconden is gewacht op het weergeven van een CSS-selector.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div:visible", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Toegang tot gegevens
