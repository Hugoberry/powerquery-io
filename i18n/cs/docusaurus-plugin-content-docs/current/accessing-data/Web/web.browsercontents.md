---
title: Web.BrowserContents
---

# Web.BrowserContents


Vrátí kód HTML pro zadanou adresu URL, jak je zobrazeno webovým prohlížečem.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Vrátí kód HTML pro zadanou adresu URL `url`, jak se zobrazuje webovým prohlížečem. K zadání dalších vlastností lze zadat volitelný parametr záznamu `options`. Záznam může obsahovat následující pole:

-   `ApiKeyName`: Pokud cílový web obsahuje zápis klíče rozhraní API, jde tento parametr použít k určení názvu (nikoli hodnoty) parametru klíče, který se musí použít v adrese URL. Skutečná hodnota klíče je zadaná v přihlašovacích údajích.
-   `WaitFor`: Určuje podmínku, na kterou se má čekat před stažením kódu HTML, kromě čekání na načtení stránky (což se děje vždycky). Může být záznam obsahující pole Timeout nebo Selector. Pokud je zadáno jenom Timeout, funkce bude před stažením kódu HTML čekat po zadanou dobou. Pokud je zadáno Selector i Timeout a dojde k vypršení časového limitu před ukončením selektoru, bude vyvolána chyba. Pokud je zadáno jenom Selector, žádné Timeout, uplatní se výchozí časový limit 30 s.


## Examples

### Example #1
Vrátí kód HTML pro web https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
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
Accessing data
