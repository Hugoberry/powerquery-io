---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

A megadott URL HTML-jét adja vissza egy webböngésző által megtekintett módon.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

Visszaadja a megadott <code>url</code> HTML-jét egy webböngészőben megjelenített formában. Egy választható rekordparaméterrel (<code>options</code>) további tulajdonságok is megadhatók. A rekord a következő mezőket tartalmazhatja:     <ul>        <li><code>ApiKeyName</code>: Ha a célhely API-kulcsot használ, ezzel a paraméterrel adható meg a kulcsparaméter neve (nem pedig az értéke), amelyet az URL-címben kell használni. A kulcs tényleges értéke a hitelesítő adatokban található.</li>        <li><code>WaitFor</code>: Megadja a várakozás feltételét a HTML letöltése előtt, valamint azt a feltételt, amely az oldal betöltésére vár (ami mindig megtörténik). Olyan rekord lehet, amely az időtúllépés és/vagy a szelektor mezőket tartalmazza. Ha csak a Timeout (időtúllépés) értéke van megadva, a függvény a megadott ideig vár a HTML-fájl letöltése előtt. Ha a Selector (szelektor) és a Timeout (időtúllépés) értékei is meg vannak adva, és a szelektor megléte előtt történik meg az időtúllépés, a rendszer hibát fog jelezni. Ha a szelektor értéke meg van adva időtúllépési érték nélkül, akkor a rendszer az alapértelmezett időtúllépési értéket használja, ami 30 másodperc.</li>      </ul>    


## Examples

### Example #1 
A https://microsoft.com HTML-jét adja vissza.
```powerquery
Web.BrowserContents ("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
A https://microsoft.com HTML-jét adja vissza, miután kivárja egy CSS-szelektor megjelenését.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
A https://microsoft.com HTML-jét adja vissza 10 másodperc várakozás után.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
A https://microsoft.com HTML-jét adja vissza, miután legfeljebb tíz másodpercet vár egy CSS-szelektor megjelenésére.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Adatok elérése
