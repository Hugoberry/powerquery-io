---
title: Web.BrowserContents
---

# Web.BrowserContents


## Description

Returnează codul HTML pentru URL-ul specificat, așa cum este vizualizat de un browser web.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Details

Returnează codul HTML pentru <code>url</code> specificat, așa cum este vizualizat de un browser web. Un parametru opțional de înregistrare, <code>options</code>, poate fi furnizat pentru a specifica proprietățile suplimentare. Înregistrarea poate conține următoarele câmpuri:     <ul>        <li><code>ApiKeyName</code>: dacă site-ul țintă are cunoștință de o cheie API, acest parametru poate fi utilizat pentru a specifica numele (nu valoarea) parametrului cheie care trebuie utilizat în URL. Valoarea cheii este furnizată în acreditare.</li>        <li><code>WaitFor</code>: specifică o condiție de așteptat înainte de descărcarea codului HTML, pe lângă așteptarea ca pagina să se încarce (care se aplică întotdeauna). Poate fi o înregistrare care conține câmpurile Timeout și/sau Selector. Dacă se specifică doar Timeout, funcția va aștepta durata de timp specificată înainte să descarce codul HTML. Dacă se specifică atât Selector, cât și Timeout, iar perioada de expirare se scurge înainte ca Selectorul să existe pe pagină, va fi lansată o eroare. Dacă se specifică un Selector fără Timeout, se aplică o valoare implicită Timeout, de 30 de secunde.</li>      </ul>    


## Examples

### Example #1 
Returnează codul HTML pentru https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2 
Returnează codul HTML pentru https://microsoft.com după ce se așteaptă să existe un selector CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3 
Returnează codul HTML pentru https://microsoft.com după ce se așteaptă zece secunde.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4 
Returnează codul HTML pentru https://microsoft.com după ce se așteaptă până la zece secunde să existe un selector CSS.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Se accesează datele
