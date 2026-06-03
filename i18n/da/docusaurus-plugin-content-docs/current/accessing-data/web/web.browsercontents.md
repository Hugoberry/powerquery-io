---
title: Web.BrowserContents
---

# Web.BrowserContents


Returnerer HTML-koden for den angivne URL-adresse, sådan som den vises i en webbrowser.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Returnerer HTML-koden for den angivne `url`, som vist af en webbrowser. En valgfri optagelsesparameter, `options`, kan angives for at vælge yderligere egenskaber. Posten kan indeholde følgende felter:

-   `ApiKeyName`: Hvis målwebstedet har et begreb om en API-nøgle, kan denne parameter bruges til at angive navnet (ikke værdien) på nøgleparameteren, der skal bruges i URL-adressen. Den faktiske nøgleværdi er angivet i legitimationsoplysningerne.
-   `WaitFor`: Angiver en betingelse om at vente, før HTML'en downloades, udover at der ventes på, at siden indlæses (hvilket altid sker). Kan være en post, der indeholder Timeout- og/eller Selektor-felter. Hvis der kun er angivet en Timeout, venter funktionen i det tidsrum, der er angivet, før HTML'en downloades. Hvis der både er angivet en selektor og timeout, og timeouten forløber, før der findes en selektor på siden, udløses der en fejl. Hvis der er angivet en selektor uden Timeout, anvendes der som en standard Timeout på 30 sekunder.


## Examples

### Example #1
Returnerer HTML-koden for https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
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
Accessing data
