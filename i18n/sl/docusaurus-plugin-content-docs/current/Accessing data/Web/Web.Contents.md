---
title: Web.Contents
---

# Web.Contents


## Description

Vrne vsebino, preneseno z URL-ja, kot dvojiško vrednost.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Vrne vsebino, preneseno iz vira <code>url</code> v dvojiški obliki zapisa. Za namene določevanja dodatnih lastnosti bo morda na voljo izbiren parameter zapisa <code>options</code>. Zapis lahko vsebuje ta polja:    <ul><li><code>Query</code> : Programsko dodajte parametre poizvedbe v naslov URL, pri tem pa vam ni treba skrbeti za dodajanje ubežnih znakov.</li><li><code>ApiKeyName</code> : Če je na ciljnem mestu omenjen ključ vmesnika API, lahko ta parameter uporabite za navedbo imena (ne vrednosti) parametra ključa, ki ga je treba uporabiti v naslovu URL. Dejanska vrednost ključa je navedena v poverilnici.</li><li><code>Headers</code> : Če navedete to vrednost kot zapis, boste v zahtevo HTTP dodali dodatne glave.</li><li><code>Timeout</code> : Če navedete to vrednost kot trajanje, boste spremenili časovno omejitev za zahtevo HTTP. Privzeta vrednost je 100 sekund.</li><li><code>ExcludedFromCacheKey</code> : Če navedete to vrednost kot seznam, bodo ti ključi glave HTTP izključeni iz dela izračuna za podatke predpomnjenja.</li><li><code>IsRetry</code> : Če navedete to logično vrednost kot &#187;true&#171;, boste pri pridobivanju podatkov prezrli vse obstoječe odgovore v predpomnilniku.</li><li><code>ManualStatusHandling</code> : Če navedete to vrednost kot seznam, boste preprečili vse vgrajeno obravnavanje zahtev HTTP, katerih odgovor vsebuje eno od teh kod stanja.</li><li><code>RelativePath</code> : Če navedete to vrednost kot besedilo, ga dodate osnovnemu naslovu URL, predem pošljete zahtevo.</li><li><code>Content</code> : Če navedete to vrednost, spremenite spletno zahtevo iz GET v POST tako, da uporabite vrednost možnosti kot vsebino zahteve POST.</li></ul>    Zahteva HTTP je podana kot zahteva GET (če ni navedena nobena vsebina) ali kot zahteva POST (če je vsebina na voljo). Zahteve POST so lahko le anonimne.    <br />    Glave odziva HTTP so na voljo kot metapodatki rezultatov v dvojiški obliki zapisa. Izven konteksta povezovalnika za podatke po meri je na voljo le podmnožica glav (zaradi varnosti).    


## Examples

### Example #1 
Pridobite vsebino &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; z možnostma RelativePath in Query. Ti možnosti lahko uporabite za dinamično poizvedovanje po statičnem osnovnem URL-ju.
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
Izvedite ukaz POST za URL, posredujte dvojiško koristno vsebino JSON in razčlenite odgovor kot JSON.
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
Vzpostavite povezavo z varnim URL-jem, ki sprejme ključ za preverjanje pristnosti kot del niza poizvedbe. Namesto kodiranja skrivnega ključa v M (kar bi predstavljalo varnostno tveganje),  lahko ključ varno navedete tako, da navedete njegovo ime (ne njegovo vrednost) v M, izberete preverjanje pristnosti spletnega vmesnika API in vnesete vrednost ključa kot del poverilnic spletnega vmesnika API.    Če ga uporabite na ta način, bo naslednji primer ustvaril zahtevo za &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
