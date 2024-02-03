---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

Vráti HTML adresu pre zadanú URL adresu zobrazenú webovým prehliadačom.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

Vráti HTML kód pre zadanú stránku <code>url</code> tak, ako ju zobrazuje webový prehliadač. Na zadanie ďalších vlastností je možné zadať voliteľný parameter <code>options</code> záznamu. Záznam môže obsahovať nasledujúce polia:     <ul>        <li><code>ApiKeyName</code> Ak má cieľová lokalita do istej miery používa kľúč rozhrania API, tento parameter možno použiť na určenie názvu (nie hodnoty) parametra kľúča, ktorý sa musí použiť v tejto URL adrese. Skutočná hodnota kľúča je uvedená v poverení.</li>        <li><code>WaitFor</code>: Určuje podmienku, na ktorú sa má okrem čakania na načítanie stránky (čo sa vždy vykonáva) čakať pred stiahnutím HTML kódu. Môže ísť o záznam obsahujúci polia Timeout a/alebo Selector. Ak je zadaný len časový limit, funkcia počká pred stiahnutím HTML kódu danú zadanú dobu. Ak je zadaná možnosť Selector aj Timeout a časový limit uplynie skôr, než sa na stránke vyskytne selektor, dôjde k chybe. Ak je zadaný selektor bez časového limitu, použije sa predvolený časový limit 30 sekúnd.</li>      </ul>    


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
Pristupuje sa k údajom
