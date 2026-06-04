---
title: Web.Headers
---

# Web.Headers


Returnează anteturile HTTP descărcate de la URL ca valoare a înregistrării.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

Returnează anteturile descărcate de la `url` ca înregistrare. Se poate furniza un parametru de înregistrare opțional, `options`, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:

-   `Query` : Adăugați programatic parametri de interogare la URL fără să trebuiască să vă faceți griji pentru aplicarea „escape”.
-   `ApiKeyName` : Dacă site-ul țintă are o noțiune de cheie API, acest parametru poate fi utilizat pentru a specifica numele (nu valoarea) parametrului cheie care trebuie utilizat în URL. Valoarea reală a cheii este furnizată în acreditare.
-   `Headers` : Specificarea acestei valori ca înregistrare va furniza anteturi suplimentare la o solicitare HTTP.
-   `Timeout` : Specificarea acestei valori ca durată va schimba perioada de expirare pentru o solicitare HTTP. Valoarea implicită este de 100 de secunde.
-   `ExcludedFromCacheKey` : Specificarea acestei valori ca listă va exclude aceste chei de antet HTTP din calculul pentru amplasarea datelor în cache.
-   `IsRetry` : Specificarea acestei valori logice ca true va ignora orice răspuns existent în memoria cache la preluarea datelor.
-   `ManualStatusHandling` : Specificarea acestei valori ca listă va împiedica orice manipulare încorporată pentru solicitările HTTP al căror răspuns are unul dintre aceste coduri de stare.
-   `RelativePath` : Specificarea acestei valori ca text o adaugă la adresa URL de bază înainte de a face solicitarea.

Solicitarea HTTP se face cu metoda HEAD. În afara unui context conector de date particularizat, este disponibil doar un subset de anteturi de răspuns (din motive de securitate).


## Examples

### Example #1
Regăsiți anteturile HTTP pentru `"https://bing.com/search?q=Power+Query"` utilizând opțiunile RelativePath și Query.
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
