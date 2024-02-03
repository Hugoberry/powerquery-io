---
title: Web.Headers
---

# Web.Headers


## Description

Vraća HTTP zaglavlja preuzeta sa URL adrese u vidu vrednosti zapisa.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

Vraća zaglavlja preuzeta iz <code>url</code> kao zapis. Opcionalni parametar zapisa, <code>options</code>, može se navesti da bi se navela dodatna svojstva. Zapis može da sadrži sledeća polja:    <ul><li><code>Query</code> : Programski dodajte parametre upita u URL adresu bez potrebe da razmišljate o izbegavanju.</li><li><code>ApiKeyName</code> : Ako ciljna lokacija ima zapis o API ključu, ovaj parametar se može koristiti za navođenje imena (ne vrednosti) parametra ključa koji mora da se koristi u URL adresi. Stvarna vrednost ključa je data u akreditivu.</li><li><code>Headers</code> : Ako navedete ovu vrednost kao zapis, dodaćete zaglavlja u HTTP zahtev.</li><li><code>Timeout</code> : Ako navedete ovu vrednost kao trajanje, promenićete vremensko ograničenje za HTTP zahtev. Podrazumevana vrednost je 100 sekundi.</li><li><code>ExcludedFromCacheKey</code> : Ako navedete ovu vrednost kao listu, ovi ključevi HTTP zaglavlja neće biti uključeni u izračunavanje za keširanje podataka.</li><li><code>IsRetry</code> : Navođenjem ove logičke vrednosti kao tačne zanemarićete postojeći odgovor u keš memoriji prilikom preuzimanja podataka.</li><li><code>ManualStatusHandling</code> : Ako navedete ovu vrednost kao listu, sprečićete ugrađenu obradu HTTP zahteva čiji odgovor ima jedan od ovih kodova statusa.</li><li><code>RelativePath</code> : Ako navedete ovu vrednost kao tekst, dodaćete je u osnovnu URL adresu pre upućivanja zahteva.</li></ul>    HTTP zahtev je napravljen pomoću metoda HEAD. Izvan konteksta prilagođenog konektora podataka, dostupan je samo podskup zaglavlja odgovora (iz bezbednosnih razloga).    


## Examples

### Example #1 
Preuzmite HTTP zaglavlja za &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; koristeći opcije RelativePath i Query.
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
