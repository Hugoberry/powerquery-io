---
title: WebAction.Request
---

# WebAction.Request


Creează o acțiune care, atunci când este executată, va returna rezultatele efectuării unei solicitări HTTP ca valoare binară.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Creează o acțiune care, atunci când este executată, va returna rezultatele efectuării unei solicitări `method` în raport cu `url`, utilizând HTTP ca valoare binară. Se poate furniza un parametru de înregistrare opțional, `options`, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:

-   `Query` : Adăugați programatic parametri de interogare la URL fără să trebuiască să vă faceți griji pentru aplicarea „escape”.
-   `ApiKeyName` : Dacă site-ul țintă are o noțiune de cheie API, acest parametru poate fi utilizat pentru a specifica numele (nu valoarea) parametrului cheie care trebuie utilizat în URL. Valoarea reală a cheii este furnizată în acreditare.
-   `Headers` : Specificarea acestei valori ca înregistrare va furniza anteturi suplimentare la o solicitare HTTP.
-   `Timeout` : Specificarea acestei valori ca durată va schimba perioada de expirare pentru o solicitare HTTP. Valoarea implicită este de 100 de secunde.
-   `ExcludedFromCacheKey` : Specificarea acestei valori ca listă va exclude aceste chei de antet HTTP din calculul pentru amplasarea datelor în cache.
-   `IsRetry` : Specificarea acestei valori logice ca true va ignora orice răspuns existent în memoria cache la preluarea datelor.
-   `ManualStatusHandling` : Specificarea acestei valori ca listă va împiedica orice manipulare încorporată pentru solicitările HTTP al căror răspuns are unul dintre aceste coduri de stare.
-   `RelativePath` : Specificarea acestei valori ca text o adaugă la adresa URL de bază înainte de a face solicitarea.
-   `Content` : Specificarea acestei valori va determina ca conținutul său să devină corpul solicitării HTTP.

Rețineți că această funcție este dezactivată în majoritatea contextelor. Luați în considerare în schimb utilizarea Web.Contents sau Web.Headers.


## Examples

### Example #1
Efectuați o solicitare GET în raport cu Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
