---
title: Web.Contents
---

# Web.Contents


Vrne vsebino, preneseno z URL-ja, kot dvojiško vrednost.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Vrne vsebino, preneseno iz vira `url` v dvojiški obliki zapisa. Navedete lahko izbirni parameter zapisa `options`, s katerim določite dodatne lastnosti. Zapis lahko vsebuje sledeča polja:

-   `Query` : Programsko dodajte parametre poizvedbe v naslov URL, pri tem pa vam ni treba skrbeti za dodajanje ubežnih znakov.
-   `ApiKeyName` : Če je na ciljnem mestu omenjen ključ vmesnika API, lahko ta parameter uporabite za navedbo imena (ne vrednosti) parametra ključa, ki ga je treba uporabiti v naslovu URL. Dejanska vrednost ključa je navedena v poverilnici.
-   `Headers` : Če navedete to vrednost kot zapis, boste v zahtevo HTTP dodali dodatne glave.
-   `Timeout` : Če navedete to vrednost kot trajanje, boste spremenili časovno omejitev za zahtevo HTTP. Privzeta vrednost je 100 sekund.
-   `ExcludedFromCacheKey` : Če navedete to vrednost kot seznam, bodo ti ključi glave HTTP izključeni iz dela izračuna za podatke predpomnjenja.
-   `IsRetry` : Če navedete to logično vrednost kot"true", boste pri pridobivanju podatkov prezrli vse obstoječe odgovore v predpomnilniku.
-   `ManualStatusHandling` : Če navedete to vrednost kot seznam, boste preprečili vse vgrajeno obravnavanje zahtev HTTP, katerih odgovor vsebuje eno od teh kod stanja.
-   `RelativePath` : Če navedete to vrednost kot besedilo, ga dodate osnovnemu naslovu URL, predem pošljete zahtevo.
-   `Content` : Če navedete to vrednost, spremenite spletno zahtevo iz GET v POST tako, da uporabite vrednost možnosti kot vsebino zahteve POST.

Zahteva HTTP je podana kot zahteva GET (če ni navedena nobena vsebina) ali kot zahteva POST (če vsebina je na voljo). Zahteve POST so lahko le anonimne.  
  
Glave odziva HTTP so na voljo kot metapodatki razultata v dvojiški obliki zapisa. Izven konteksta povezovalnika za podatke po meri je na voljo le podnabor glav odgovorov (zaradi varnosti).


## Examples

### Example #1
Pridobite vsebino `"https://bing.com/search?q=Power+Query"` z možnostma RelativePath in Query. Ti možnosti lahko uporabite za dinamično poizvedovanje po statičnem osnovnem URL-ju.
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
Vzpostavite povezavo z varnim URL-jem, ki sprejme ključ za preverjanje pristnosti kot del niza poizvedbe. Namesto kodiranja skrivnega ključa v M (kar bi predstavljalo varnostno tveganje), lahko ključ varno navedete tako, da navedete njegovo ime (ne njegove vrednosti) v M, izberete preverjanje pristnosti spletnega vmesnika API in vnesete vrednost ključa kot del poverilnic spletnega vmesnika API. Če ga uporabite na ta način, bo naslednji primer ustvaril zahtevo za `"https://contoso.com/api/customers/get?api_key=******"`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
