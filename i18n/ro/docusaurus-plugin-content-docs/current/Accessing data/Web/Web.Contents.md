---
title: Web.Contents
---

# Web.Contents


## Description

Returnează conţinutul descărcat de la adresa URL ca binary.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Returnează conținutul descărcat de la <code>url</code> ca binar. Se poate furniza un parametru de înregistrare opțional, <code>options</code>, pentru a specifica proprietăți suplimentare. Înregistrarea poate conține următoarele câmpuri:    <ul><li><code>Query</code> : Adăugați programatic parametri de interogare la URL fără să trebuiască să vă faceți griji pentru aplicarea „escape”.</li><li><code>ApiKeyName</code> : Dacă site-ul țintă are o noțiune de cheie API, acest parametru poate fi utilizat pentru a specifica numele (nu valoarea) parametrului cheie care trebuie utilizat &#238;n URL. Valoarea reală a cheii este furnizată &#238;n acreditare.</li><li><code>Headers</code> : Specificarea acestei valori ca &#238;nregistrare va furniza anteturi suplimentare la o solicitare HTTP.</li><li><code>Timeout</code> : Specificarea acestei valori ca durată va schimba perioada de expirare pentru o solicitare HTTP. Valoarea implicită este de 100 de secunde.</li><li><code>ExcludedFromCacheKey</code> : Specificarea acestei valori ca listă va exclude aceste chei de antet HTTP din calculul pentru amplasarea datelor &#238;n cache.</li><li><code>IsRetry</code> : Specificarea acestei valori logice ca true va ignora orice răspuns existent &#238;n memoria cache la preluarea datelor.</li><li><code>ManualStatusHandling</code> : Specificarea acestei valori ca listă va &#238;mpiedica orice manipulare &#238;ncorporată pentru solicitările HTTP al căror răspuns are unul dintre aceste coduri de stare.</li><li><code>RelativePath</code> : Specificarea acestei valori ca text o adaugă la adresa URL de bază &#238;nainte de a face solicitarea.</li><li><code>Content</code> : Specificarea acestei valori modifică solicitarea web de la GET la POST, folosind valoarea opțiunii drept conținut POST.</li></ul>    Solicitarea HTTP se face fie ca GET (atunci când nu se specifică conținut), fie ca POST (când există conținut). Solicitările POST se pot face doar anonim.    <br />    Anteturile răspunsului HTTP sunt disponibile ca metadate pentru rezultatul binar. În afara unui context conector de date particularizat, este disponibil doar un subset de anteturi de răspuns (din motive de securitate).    


## Examples

### Example #1 
Regăsiți conținutul &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; utilizând opțiunile RelativePath și Query. Aceste opțiuni pot fi utilizate pentru a interoga dinamic o adresă URL statică de bază.
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
Conectați-vă la un URL securizat care acceptă o cheie de autentificare ca parte a șirului de interogare. În loc de codificarea fizică a cheii secrete în M (care ar reprezenta un risc de securitate),     cheia poate fi furnizată în siguranță specificându-i numele (nu valoarea) în M, alegând autentificare Web API și introducând valoarea cheii ca parte a acreditării Web API.    Când se utilizează în acest mod, exemplul următor va genera o solicitare către &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
