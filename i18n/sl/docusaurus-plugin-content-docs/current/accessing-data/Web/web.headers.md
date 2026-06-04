---
title: Web.Headers
---

# Web.Headers


Vrne glave HTTP, prenesene iz URL-ja, kot vrednost zapisa.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

Vrne glave, prenesene iz vira `url`, v obliki zapisa. Za namene določevanja dodatnih lastnosti bo morda na voljo izbiren parameter zapisa `options`. Zapis lahko vsebuje ta polja:

-   `Query` : Programsko dodajte parametre poizvedbe v naslov URL, pri tem pa vam ni treba skrbeti za dodajanje ubežnih znakov.
-   `ApiKeyName` : Če je na ciljnem mestu omenjen ključ vmesnika API, lahko ta parameter uporabite za navedbo imena (ne vrednosti) parametra ključa, ki ga je treba uporabiti v naslovu URL. Dejanska vrednost ključa je navedena v poverilnici.
-   `Headers` : Če navedete to vrednost kot zapis, boste v zahtevo HTTP dodali dodatne glave.
-   `Timeout` : Če navedete to vrednost kot trajanje, boste spremenili časovno omejitev za zahtevo HTTP. Privzeta vrednost je 100 sekund.
-   `ExcludedFromCacheKey` : Če navedete to vrednost kot seznam, bodo ti ključi glave HTTP izključeni iz dela izračuna za podatke predpomnjenja.
-   `IsRetry` : Če navedete to logično vrednost kot"true", boste pri pridobivanju podatkov prezrli vse obstoječe odgovore v predpomnilniku.
-   `ManualStatusHandling` : Če navedete to vrednost kot seznam, boste preprečili vse vgrajeno obravnavanje zahtev HTTP, katerih odgovor vsebuje eno od teh kod stanja.
-   `RelativePath` : Če navedete to vrednost kot besedilo, ga dodate osnovnemu naslovu URL, predem pošljete zahtevo.

Zahteva HTTP je bila podana z metodo HEAD. Izven konteksta povezovalnika za podatke po meri je na voljo le podmnožica glav (zaradi varnosti).


## Examples

### Example #1
Pridobite glave HTTP za `"https://bing.com/search?q=Power+Query"` z možnostma"RelativePath"in"Query".
```powerquery
let
    searchText = "Power Query"
in
    Web.Headers(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
([
    #"Cache-Control" = "private, max-age=0",
    #"Content-Encoding" = "gzip",
    #"Content-Length" = "0",
    #"Content-Type" = "text/html; charset=utf-8",
    Date = "Tue, 14 Dec 2021 16:57:25 GMT",
    Expires = "Tue, 14 Dec 2021 16:56:25 GMT",
    Vary = "Accept-Encoding"
]
meta [
    Response.Status = 200
])
```




## Category
Accessing data
