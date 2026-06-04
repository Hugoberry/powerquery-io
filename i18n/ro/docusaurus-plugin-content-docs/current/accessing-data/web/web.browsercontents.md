---
title: Web.BrowserContents
---

# Web.BrowserContents


Returnează codul HTML pentru URL-ul specificat, așa cum este vizualizat de un browser web.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Returnează codul HTML pentru `url` specificat, așa cum este vizualizat de un browser web. Poate fi furnizat un parametru de înregistrare opțional `options` pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:

-   `ApiKeyName`: Dacă site-ul țintă are o noțiune de cheie API, acest parametru poate fi utilizat pentru a specifica numele (nu valoarea) parametrului cheie care trebuie utilizat în URL. Valoarea cheie reală este furnizată în acreditare.
-   `WaitFor`: Specifică o condiție de așteptat înainte de a descărca HTML, în plus față de așteptarea încărcării paginii (lucru care se face întotdeauna). Poate fi o înregistrare care conține câmpurile Expirare și/sau Selector. Dacă se specifică doar Expirare, funcția va aștepta perioada de timp specificată înainte de a descărca HTML. Dacă se specifică atât Selector, cât și Expirare, iar Expirare trece înainte ca Selector să existe pe pagină, se va genera o eroare. Dacă este specificat un Selector fără Expirare, se aplică o Expirare implicită de 30 de secunde.


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
Accessing data
