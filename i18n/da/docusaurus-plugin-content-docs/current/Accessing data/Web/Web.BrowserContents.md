---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

Returnerer HTML-koden for den angivne URL-adresse, sådan som den vises i en webbrowser.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

Returnerer HTML-koden for den angivne <code>url</code>, som vist af en webbrowser. Et valgfrit optagelsesparameter, <code>options</code>, kan angives for at vælge yderligere egenskaber. Posten kan indeholde følgende felter:      <ul>        <li><code>ApiKeyName</code>: Hvis målwebstedet har et begreb om en API-nøgle, kan denne parameter bruges til at angive navnet (ikke værdien) på nøgleparameteren, der skal bruges i URL-adressen. Den faktiske nøgleværdi angives i legitimationsoplysningerne.</li>     <li><code>WaitFor</code>: angiver en betingelse, der skal ventes på, før der downloades HTML, udover at der ventes på, at siden for at indlæse (hvilket altid sker). Kan være en post, der indeholder Timeout- og/eller Selector-felter. Hvis der kun er angivet en Timeout, venter funktionen det tidsrum, der er angivet, før der downloades HTML. Hvis der både er angivet en Selector og Timeout, og timeouten forløber, før der findes en Selector på siden, udløses der en fejl. Hvis der er angivet en Selector uden Timeout, anvendes en standard Timeout på 30 sekunder.</li>      </ul>    


## Examples

### Example #1 
Returnerer HTML-koden for https://microsoft.com.
```powerquery
Web.BrowserContents ("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
Returnerer HTML-koden for https://microsoft.com efter at have ventet på en CSS-vælger.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
Returnerer HTML-koden for https://microsoft.com efter at have ventet i ti sekunder.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
Returnerer HTML-koden for https://microsoft.com efter at have ventet i op til ti sekunder på en CSS-vælger.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Tilgår data
