---
title: Web.Contents
---

# Web.Contents


## Description

Vraća sadržaj preuzet sa URL adrese u binarnom obliku.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Vraća sadržaj preuzet iz <code>url</code> kao binarni. Opcionalni parametar zapisa, <code>options</code>, može se navesti da bi se navela dodatna svojstva. Zapis može da sadrži sledeća polja:    <ul><li><code>Query</code> : Programski dodajte parametre upita u URL adresu bez potrebe da razmišljate o izbegavanju.</li><li><code>ApiKeyName</code> : Ako ciljna lokacija ima zapis o API ključu, ovaj parametar se može koristiti za navođenje imena (ne vrednosti) parametra ključa koji mora da se koristi u URL adresi. Stvarna vrednost ključa je data u akreditivu.</li><li><code>Headers</code> : Ako navedete ovu vrednost kao zapis, dodaćete zaglavlja u HTTP zahtev.</li><li><code>Timeout</code> : Ako navedete ovu vrednost kao trajanje, promenićete vremensko ograničenje za HTTP zahtev. Podrazumevana vrednost je 100 sekundi.</li><li><code>ExcludedFromCacheKey</code> : Ako navedete ovu vrednost kao listu, ovi ključevi HTTP zaglavlja neće biti uključeni u izračunavanje za keširanje podataka.</li><li><code>IsRetry</code> : Navođenjem ove logičke vrednosti kao tačne zanemarićete postojeći odgovor u keš memoriji prilikom preuzimanja podataka.</li><li><code>ManualStatusHandling</code> : Ako navedete ovu vrednost kao listu, sprečićete ugrađenu obradu HTTP zahteva čiji odgovor ima jedan od ovih kodova statusa.</li><li><code>RelativePath</code> : Ako navedete ovu vrednost kao tekst, dodaćete je u osnovnu URL adresu pre upućivanja zahteva.</li><li><code>Content</code> : Ako navedete ovu vrednost, promenićete veb zahtev iz GET u POST, koristeći vrednost opcije kao sadržaj za POST.</li></ul>    HTTP zahtev se pravi kao GET (kada nije naveden sadržaj) ili POST (kada postoji sadržaj). POST zahtevi mogu biti upućeni samo anonimno.    <br />    Zaglavlja HTTP odgovora dostupna su kao metapodaci binarnog rezultata. Izvan konteksta konektora prilagođenih podataka, dostupan je samo podskup zaglavlja odgovora (iz bezbednosnih razloga).    


## Examples

### Example #1 
Preuzmite sadržaj &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; koristeći opcije RelativePath i Query. Ove opcije se mogu koristiti za dinamičko postavljanje upita o statičkoj osnovnoj URL adresi.
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
Izvršite POST protiv URL adrese, prosleđujući binarni JSON korisni teret i analizirajući odgovor kao JSON.
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
Povežite se na bezbednu URL adresu koja prihvata ključ za potvrdu identiteta kao deo niske upita. Umesto čvrstog kodiranja tajnog ključa u M (što bi predstavljalo bezbednosni rizik),     ključ može bezbedno da se obezbedi tako što će navesti njegovo ime (a ne vrednost) u M, odabrati potvrdu identiteta veb API-ja i uneti ključnu vrednost kao deo akreditiva veb API-ja.    Kada se koristi na ovaj način, sledeći primer će generisati zahtev za &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
