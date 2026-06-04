---
title: Web.Contents
---

# Web.Contents


Returnează conţinutul descărcat de la adresa URL ca binary.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Returnează conținutul descărcat de la `url` ca binar. Poate fi furnizat un parametru de înregistrare opțional `options` pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:

-   `Query` : Adăugați programatic parametri de interogare la URL fără să trebuiască să vă faceți griji pentru aplicarea „escape”.
-   `ApiKeyName` : Dacă site-ul țintă are o noțiune de cheie API, acest parametru poate fi utilizat pentru a specifica numele (nu valoarea) parametrului cheie care trebuie utilizat în URL. Valoarea reală a cheii este furnizată în acreditare.
-   `Headers` : Specificarea acestei valori ca înregistrare va furniza anteturi suplimentare la o solicitare HTTP.
-   `Timeout` : Specificarea acestei valori ca durată va schimba perioada de expirare pentru o solicitare HTTP. Valoarea implicită este de 100 de secunde.
-   `ExcludedFromCacheKey` : Specificarea acestei valori ca listă va exclude aceste chei de antet HTTP din calculul pentru amplasarea datelor în cache.
-   `IsRetry` : Specificarea acestei valori logice ca true va ignora orice răspuns existent în memoria cache la preluarea datelor.
-   `ManualStatusHandling` : Specificarea acestei valori ca listă va împiedica orice manipulare încorporată pentru solicitările HTTP al căror răspuns are unul dintre aceste coduri de stare.
-   `RelativePath` : Specificarea acestei valori ca text o adaugă la adresa URL de bază înainte de a face solicitarea.
-   `Content` : Specificarea acestei valori modifică solicitarea web de la GET la POST, folosind valoarea opțiunii drept conținut POST.

Solicitarea HTTP se face fie ca GET (atunci când nu se specifică conținut), fie ca POST (când există conținut). Solicitările POST se pot face doar anonim.  
  
Anteturile răspunsului HTTP sunt disponibile ca metadate pentru rezultatul binar. În afara unui context conector de date particularizat, este disponibil doar un subset de anteturi de răspuns (din motive de securitate).


## Examples

### Example #1
Regăsiți conținutul `"https://bing.com/search?q=Power+Query"` utilizând opțiunile RelativePath și Query. Aceste opțiuni pot fi utilizate pentru a interoga dinamic o adresă URL statică de bază.
```powerquery
let
    searchText = "Power Query"
in
    Web.Contents(
        "https://www.bing.com",
        [
            RelativePath = "search",
            Query = [q = searchText]
        ]
    )
```

Result: 
```powerquery
binary
```


### Example #2
Efectuați un POST față de un URL, transmițând o sarcină JSON binară și analizând răspunsul ca JSON.
```powerquery
let
    url = ...,
    headers = [#"Content-Type" = "application/json"],
    postData = Json.FromValue([x = 235.7, y = 41.53]),
    response = Web.Contents(
        url,
        [
            Headers = headers,
            Content = postData
        ]
    ),
    jsonResponse = Json.Document(response)
in
    jsonResponse
```

Result: 
```powerquery
table
```


### Example #3
Conectați-vă la un URL securizat care acceptă o cheie de autentificare ca parte a șirului de interogare. În loc de codificarea fizică a cheii secrete în M (care ar reprezenta un risc de securitate), cheia poate fi furnizată în siguranță specificându-i numele (nu valoarea) în M, alegând autentificare Web API și introducând valoarea cheii ca parte a acreditării Web API. Când se utilizează în acest mod, exemplul următor va genera o solicitare către `"https://contoso.com/api/customers/get?api_key=******"`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
