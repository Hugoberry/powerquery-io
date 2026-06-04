---
title: Web.BrowserContents
---

# Web.BrowserContents


Vraća HTML za navedenu URL adresu, kao što je prikazano u veb pregledaču.


## Syntax

```powerquery
Web.BrowserContents(
    url as text,
    optional options as record
) as text
```


## Remarks

Vraća HTML za navedeni `url`, kao što je prikazano u veb pregledaču. Moguće je navesti opcionalni parametar zapisa, `options`, da bi se navela dodatna svojstva. Zapis može da sadrži sledeća polja:

-   `ApiKeyName`: Ako ciljna lokacija ima naznaku API ključa, ovaj parametar može da se koristi za navođenje naziva (a ne vrednosti) parametra ključa koji se mora koristiti u URL adresi. Stvarna vrednost ključa je navedena u akreditivu.
-   `WaitFor`:Navodi uslov za čekanje pre preuzimanja HTML datoteke, pored čekanja da se stranica učita (što se uvek radi). Može da bude zapis koji sadrži polja „Vremensko ograničenje“ i/ili „Birač“. Ako se navede samo vremensko ograničenje, funkcija će čekati navedeno vreme pre preuzimanja HTML datoteke. Ako se navedu i Selector i Timeout, i ako Timeout istekne pre nego što se Selector pojavi na stranici, javlja se greška. Ako se navede birač bez vremenskog ograničenja, primenjuje se podrazumevano vremensko ograničenje od 30 sekundi.


## Examples

### Example #1
Vraća HTML za https://microsoft.com.
```powerquery
Web.BrowserContents("https://microsoft.com")
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #2
Vraća HTML za https://microsoft.com nakon čekanja da se pojavi CSS birač.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready"]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #3
Vraća HTML za https://microsoft.com nakon čekanja od deset sekundi.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```


### Example #4
Vraća HTML za https://microsoft.com nakon čekanja od najviše deset sekundi da se pojavi CSS birač.
```powerquery
Web.BrowserContents("https://microsoft.com", [WaitFor = [Selector = "div.ready", Timeout = #duration(0,0,0,10)]])
```

Result: 
```powerquery
"<!DOCTYPE html><html xmlns=..."
```




## Category
Accessing data
