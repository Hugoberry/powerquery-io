---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

Vrátí kód HTML pro zadanou adresu URL, jak je zobrazeno webovým prohlížečem.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

Vrátí kód HTML pro zadaný <code>url</code>, jak ho vidí webový prohlížeč. Může být zadán volitelný parametr záznamu <code>options</code> obsahující další vlastnosti. Záznam může obsahovat následující pole:     <ul>        <li><code>ApiKeyName</code>: Pokud má cílový web potuchu o klíči rozhraní API, tento parametr lze použít k zadání názvu (nikoli hodnoty) parametru klíče, který musí být použit v adrese URL. Skutečná hodnota klíče je předána v přihlašovacím údaji.</li>        <li><code>WaitFor</code>: Určuje podmínku, na kterou se má čekat před stažením kódu HTML, kromě čekání na načtení stránky (což se děje vždycky). Může být záznam obsahující pole Timeout nebo Selector. Pokud je zadáno jenom Timeout, funkce bude před stažením kódu HTML čekat po zadanou dobou. Pokud je zadáno Selector i Timeout a dojde k vypršení časového limitu před ukončením selektoru, bude vyvolána chyba. Pokud je zadáno jenom Selector, žádné Timeout, uplatní se výchozí časový limit 30 s.</li>      </ul>    


## Examples

### Example #1 
Vrátí kód HTML pro web https://microsoft.com.
```powerquery
Web.BrowserContents ("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
Vrátí kód HTML pro web https://microsoft.com po vyčkání na existenci selektoru šablon stylů CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
Vrátí kód HTML pro web https://microsoft.com po uplynutí deseti sekund.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
Vrátí kód HTML pro web https://microsoft.com po až desetisekundovém vyčkání na existenci selektoru šablon stylů CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Přístup k datům
