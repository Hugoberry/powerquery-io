---
title: Web.Headers
---

# Web.Headers


Palauttaa URL-osoitteesta ladatut HTTP-otsikot tietuearvona.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Remarks

Palauttaa kohteesta `url` ladatut otsikot tietueena. Valinnainen tietueparametri, `options`, voidaan antaa lisäominaisuuksien määrittämistä varten. Tietue voi sisältää seuraavat kentät:

-   `Query` : Lisää kyselyparametreja ohjelmallisesti URL-osoitteeseen ilman, että sinun pitää huolehtia ohjauskoodeista.
-   `ApiKeyName` : Jos kohdesivustossa on ohjelmointirajapinta-avaimen käsite, tämän parametrin avulla voidaan määrittää sen avainparametrin nimi (ei arvo), jota on käytettävä URL-osoitteessa. Todellinen avainarvo annetaan tunnistetiedoissa.
-   `Headers` : Tämän arvon määrittäminen tietueena antaa lisäotsikoita HTTP-pyynnölle.
-   `Timeout` : Tämän arvon määrittäminen kestona muuttaa HTTP-pyynnön aikakatkaisua. Oletusarvo on 100 sekuntia.
-   `ExcludedFromCacheKey` : Tämän arvon määrittäminen luettelona jättää pois nämä HTTP-otsikkoavaimet tietojen välimuistiin tallentamisen laskutoimituksesta.
-   `IsRetry` : Tämän loogisen arvon määrittäminen true-arvoksi ohittaa välimuistissa olevan vastauksen noudettaessa tietoja.
-   `ManualStatusHandling` : Tämän arvon määrittäminen luettelona estää kaiken sisäisen käsittelyn HTTP-pyynnöille, joiden vastauksella on jokin näistä tilakoodeista.
-   `RelativePath` : Tämän arvon määrittäminen tekstinä liittää sen URL-perusosoitteeseen ennen pyynnön tekemistä.

HTTP-pyyntö tehdään HEAD-menetelmällä. Mukautetun tietoyhdistimen kontekstin ulkopuolella vain vastausotsikoiden alijoukko on käytettävissä (tietoturvasyistä).


## Examples

### Example #1
Nouda headers for `"https://bing.com/search?q=Power+Query"` HTTP-otsikot RelativePath- ja Query-asetusten avulla.
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
