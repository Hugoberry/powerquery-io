---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

Vrne HTML za navedeni URL, kot ga vidi spletni brskalnik.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

Vrne HTML za navedeni <code>url</code>, kot je prikazana v spletnem brskalniku. Določite lahko izbirni parameter zapisa <code>options</code>, s katerim določite dodatne lastnosti. Zapis lahko vsebuje ta polja::     <ul>        <li><code>ApiKeyName</code>: če ciljno spletno mesto vsebuje zapis ključa vmesnika API, lahko s tem parametrom določite ime (ne vrednost) parametra ključa, ki mora biti uporabljeno v naslovu URL. Dejanska vrednost ključa je navedena v poverilnici.</li>        <li><code>WaitFor</code>: določa pogoj za čakanje pred prenosom HTML-ja poleg čakanja, da se stran naloži (kar je vedno izvedbo). Lahko je zapis, ki vsebuje polje "Timeout" in/ali "Selector". Če je določena samo časovna omejitev, funkcija počaka navedeni čas in šele nato prenese HTML. Če sta določena izbirnik ter časovna omejitev in če časovna omejitev poteče, preden se izbirnik prikaže na strani, se prikaže sporočilo o napaki. Če je določen izbirnik brez časovne omejitve, je privzeto uporabljena 30-sekundna časovna omejitev.</li>      </ul>    


## Examples

### Example #1 
Vrne HTML za https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
Vrne HTML za https://microsoft.com, ko čaka, da se prikaže izbirnik sloga CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
Vrne HTML za https://microsoft.com, ko čaka deset sekund.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
Vrne HTML za https://microsoft.com, ko čaka največ deset sekund, da se prikaže izbirnik sloga CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Dostop do podatkov
