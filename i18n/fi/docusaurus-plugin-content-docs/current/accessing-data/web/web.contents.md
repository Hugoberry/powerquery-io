---
title: Web.Contents
---

# Web.Contents


Palauttaa URL-osoitteesta ladatun sisällön binaarimuodossa.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Remarks

Palauttaa kohteesta `url` ladatun sisällön binaarimuodossa. Valinnainen tietueparametri, `options`, voidaan antaa lisäominaisuuksien määrittämistä varten. Tietue voi sisältää seuraavat kentät:

-   `Query` : Lisää kyselyparametreja ohjelmallisesti URL-osoitteeseen ilman, että sinun pitää huolehtia ohjauskoodeista.
-   `ApiKeyName` : Jos kohdesivustossa on ohjelmointirajapinta-avaimen käsite, tämän parametrin avulla voidaan määrittää sen avainparametrin nimi (ei arvo), jota on käytettävä URL-osoitteessa. Todellinen avainarvo annetaan tunnistetiedoissa.
-   `Headers` : Tämän arvon määrittäminen tietueena antaa lisäotsikoita HTTP-pyynnölle.
-   `Timeout` : Tämän arvon määrittäminen kestona muuttaa HTTP-pyynnön aikakatkaisua. Oletusarvo on 100 sekuntia.
-   `ExcludedFromCacheKey` : Tämän arvon määrittäminen luettelona jättää pois nämä HTTP-otsikkoavaimet tietojen välimuistiin tallentamisen laskutoimituksesta.
-   `IsRetry` : Tämän loogisen arvon määrittäminen true-arvoksi ohittaa välimuistissa olevan vastauksen noudettaessa tietoja.
-   `ManualStatusHandling` : Tämän arvon määrittäminen luettelona estää kaiken sisäisen käsittelyn HTTP-pyynnöille, joiden vastauksella on jokin näistä tilakoodeista.
-   `RelativePath` : Tämän arvon määrittäminen tekstinä liittää sen URL-perusosoitteeseen ennen pyynnön tekemistä.
-   `Content` : Tämän arvon määrittäminen muuttaa verkkopyynnön GET-pyynnöstä POST-pyynnöksi käyttäen asetuksen arvoa POST-pyynnön sisältönä.

HTTP-pyyntö tehdään joko GET-muodossa (kun sisältöä ei ole määritetty) tai POST-muodossa (kun sisältöä on). POST-pyyntöjä voi tehdä vain anonyymisti.  
  
HTTP-vastauksen otsikot ovat käytettävissä binaarituloksen metatietoina. Mukautetun tietoyhdistimen kontekstin ulkopuolella vain vastausotsikoiden alijoukko on käytettävissä (tietoturvasyistä).


## Examples

### Example #1
Nouda `"https://bing.com/search?q=Power+Query"` sisältö RelativePath- ja Query-asetusten avulla. Näitä asetuksia voidaan käyttää staattisen perus-URL-osoitteen dynaamiseen kyselyyn.
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
Suorita POST-toiminto URL-osoitteelle välittämällä binaariset JSON-tiedot ja jäsentämällä vastaus JSON-muotoon.
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
Muodosta yhteys suojattuun URL-osoitteeseen, joka hyväksyy todennusavaimen osana kyselymerkkijonoa. Sen sijaan, että salainen avain koodattaisiin M:ssä (mikä aiheuttaisi suojausriskin), avaimen voi antaa turvallisesti määrittämällä avaimen nimen (ei sen arvoa) M:ssä, valitsemalla verkon ohjelmointirajapinnan todentamisen ja antamalla avaimen arvon osana verkon ohjelmointirajapinnan tunnistetietoja. Näin käytettynä seuraava esimerkki luo pyynnön kohteeseen `"https://contoso.com/api/customers/get?api_key=******"`.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
