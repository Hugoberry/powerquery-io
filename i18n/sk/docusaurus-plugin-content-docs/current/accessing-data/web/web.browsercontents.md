---
title: Web.BrowserContents
---

# Web.BrowserContents


Vráti HTML adresu pre zadanú URL adresu zobrazenú webovým prehliadačom.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Vráti kód HTML pre zadanú adresu `url` zobrazenú webovým prehliadačom. Na zadanie ďalších vlastností možno zadať voliteľný parameter záznamu `options`. Záznam môže obsahovať nasledujúce polia:

-   `ApiKeyName`: Ak cieľová lokalita obsahuje koncept kľúča rozhrania API, tento parameter možno použiť na zadanie názvu (nie hodnoty) parametra kľúča, ktorý sa musí použiť v URL adrese. Skutočná hodnota kľúča je uvedená v prihlasovacích údajoch.
-   `WaitFor`: Okrem čakania na načítanie stránky (ktoré je vždy dokončené), určuje podmienku, na ktorú sa má čakať pred stiahnutím HTML kódu. Môže to byť záznam obsahujúci polia Časový limit alebo Selektor. Ak je zadaný len časový limit, funkcia počká zadaný čas pred stiahnutím HTML kódu. Ak sú špecifikované obe možnosti Selector a Timeout a časový limit Timeout uplynie skôr, ako sa Selector objaví na stránke, vygeneruje sa chyba. Ak je zadaný selektor bez časového limitu, použije sa predvolený časový limit 30 sekúnd.


## Examples

### Example #1
Vráti HTML kód pre stránku https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2
Vráti HTML kód pre stránku https://microsoft.com po čakaní na pridanie selektora CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3
Vráti HTML kód pre https://microsoft.com po uplynutí intervalu desiatich sekúnd.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4
Vráti HTML kód pre stránku https://microsoft.com po čakaní až 10 sekúnd na pridanie selektora CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Accessing data
