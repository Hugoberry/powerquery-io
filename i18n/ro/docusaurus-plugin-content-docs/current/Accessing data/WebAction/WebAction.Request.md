---
title: WebAction.Request
---

# WebAction.Request


## Description

Creează o acțiune care, atunci când este executată, va returna rezultatele efectuării unei solicitări HTTP ca valoare binară.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

Creează o acțiune care, atunci când este executată, va returna rezultatele efectuării unei solicitări de <code>method</code> față de <code>url</code>, utilizând HTTP ca valoare binară.    Se poate furniza un parametru de înregistrare opțional, <code>options</code>, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:    <ul><li><code>Query</code> : Adăugați programatic parametri de interogare la URL fără să trebuiască să vă faceți griji pentru aplicarea „escape”.</li><li><code>ApiKeyName</code> : Dacă site-ul țintă are o noțiune de cheie API, acest parametru poate fi utilizat pentru a specifica numele (nu valoarea) parametrului cheie care trebuie utilizat &#238;n URL. Valoarea reală a cheii este furnizată &#238;n acreditare.</li><li><code>Headers</code> : Specificarea acestei valori ca &#238;nregistrare va furniza anteturi suplimentare la o solicitare HTTP.</li><li><code>Timeout</code> : Specificarea acestei valori ca durată va schimba perioada de expirare pentru o solicitare HTTP. Valoarea implicită este de 100 de secunde.</li><li><code>ExcludedFromCacheKey</code> : Specificarea acestei valori ca listă va exclude aceste chei de antet HTTP din calculul pentru amplasarea datelor &#238;n cache.</li><li><code>IsRetry</code> : Specificarea acestei valori logice ca true va ignora orice răspuns existent &#238;n memoria cache la preluarea datelor.</li><li><code>ManualStatusHandling</code> : Specificarea acestei valori ca listă va &#238;mpiedica orice manipulare &#238;ncorporată pentru solicitările HTTP al căror răspuns are unul dintre aceste coduri de stare.</li><li><code>RelativePath</code> : Specificarea acestei valori ca text o adaugă la adresa URL de bază &#238;nainte de a face solicitarea.</li><li><code>Content</code> : Specificarea acestei valori va determina ca conținutul său să devină corpul solicitării HTTP.</li></ul> <br />    Rețineți că această funcție este dezactivată în majoritatea contextelor. Luați în considerare utilizarea Web.Contents sau Web.Headers în schimb.    


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
