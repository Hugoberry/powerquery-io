---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

Pateikia nurodyto URL HTML, kaip rodoma žiniatinklio naršyklėje.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

Pateikiama žiniatinklio naršyklėje peržiūrimo nurodyto <code>url</code> HTML. Norint nurodyti papildomas ypatybes galima nurodyti pasirenkamą įrašo parametrą <code>options</code>. Įraše gali būti šie laukai:     <ul>        <li><code>ApiKeyName</code>: jei paskirties svetainėje žinomas API raktas, naudojant šį parametrą galima nurodyti URL naudojamo rakto parametro pavadinimą (bet ne reikšmę). Faktinė rakto reikšmė nurodyta kredencialuose.</li>        <li><code>WaitFor</code>: nurodo sąlygą, kurios papildomai reikia sulaukti prieš įkeliant HTML, be laukimo, kol bus įkeltas puslapis (ką reikia daryti visada). Tai gali būti įrašas su laukais „Timeout“ ir (arba) „Selector“. Jei nurodyta tik lauko „Timeout“ reikšmė, funkcija prieš atsisiųsdama HTML lauks nurodytą laiko intervalą. Jei nurodytos abiejų laukų („Selector“ ir „Timeout“) reikšmės ir skirtasis laikas baigiasi anksčiau nei puslapyje atsiranda išrinkiklis, bus parodyta klaida. Jei lauko „Selector“ reikšmė yra nurodyta, o lauko „Timeout“ – ne, bus taikomas numatytasis 30 sekundžių skirtasis laikas.</li>      </ul>    


## Examples

### Example #1 
Pateikiama https://microsoft.com HTML.
```powerquery
Web.BrowserContents ("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
Sulaukus, kol atsiranda CSS išrinkiklis, pateikiama https://microsoft.com HTML.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div:visible"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
Palaukus dešimt sekundžių pateikiama https://microsoft.com HTML.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
Palaukus iki dešimt sekundžių, kol atsiranda CSS išrinkiklis, pateikiama https://microsoft.com HTML.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div:visible", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Prieiga prie duomenų
