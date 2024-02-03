---
title: Web.Headers
---

# Web.Headers


## Description

Returnează anteturile HTTP descărcate de la URL ca valoare a înregistrării.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

Returnează anteturile descărcate de la <code>url</code> ca înregistrare. Se poate furniza un parametru de înregistrare opțional, <code>options</code>, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:    <ul><li><code>Query</code> : Adăugați programatic parametri de interogare la URL fără să trebuiască să vă faceți griji pentru aplicarea „escape”.</li><li><code>ApiKeyName</code> : Dacă site-ul țintă are o noțiune de cheie API, acest parametru poate fi utilizat pentru a specifica numele (nu valoarea) parametrului cheie care trebuie utilizat &#238;n URL. Valoarea reală a cheii este furnizată &#238;n acreditare.</li><li><code>Headers</code> : Specificarea acestei valori ca &#238;nregistrare va furniza anteturi suplimentare la o solicitare HTTP.</li><li><code>Timeout</code> : Specificarea acestei valori ca durată va schimba perioada de expirare pentru o solicitare HTTP. Valoarea implicită este de 100 de secunde.</li><li><code>ExcludedFromCacheKey</code> : Specificarea acestei valori ca listă va exclude aceste chei de antet HTTP din calculul pentru amplasarea datelor &#238;n cache.</li><li><code>IsRetry</code> : Specificarea acestei valori logice ca true va ignora orice răspuns existent &#238;n memoria cache la preluarea datelor.</li><li><code>ManualStatusHandling</code> : Specificarea acestei valori ca listă va &#238;mpiedica orice manipulare &#238;ncorporată pentru solicitările HTTP al căror răspuns are unul dintre aceste coduri de stare.</li><li><code>RelativePath</code> : Specificarea acestei valori ca text o adaugă la adresa URL de bază &#238;nainte de a face solicitarea.</li></ul>    Solicitarea HTTP se face cu metoda HEAD. În afara unui context conector de date particularizat, este disponibil doar un subset de anteturi de răspuns (din motive de securitate).    


## Examples

### Example #1 
Regăsiți anteturile HTTP pentru &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; utilizând opțiunile RelativePath și Query.
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
