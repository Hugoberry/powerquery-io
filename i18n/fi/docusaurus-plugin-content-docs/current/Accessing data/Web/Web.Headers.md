---
title: Web.Headers
---

# Web.Headers


## Description

Palauttaa URL-osoitteesta ladatut HTTP-otsikot tietuearvona.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

Palauttaa kohteesta <code>url</code> ladatut otsikot tietueena. Valinnainen tietueparametri, <code>options</code>, voidaan antaa lisäominaisuuksien määrittämistä varten. Tietue voi sisältää seuraavat kentät:    <ul><li><code>Query</code> : Lis&#228;&#228; kyselyparametreja ohjelmallisesti URL-osoitteeseen ilman, ett&#228; sinun pit&#228;&#228; huolehtia ohjauskoodeista.</li><li><code>ApiKeyName</code> : Jos kohdesivustossa on ohjelmointirajapinta-avaimen k&#228;site, t&#228;m&#228;n parametrin avulla voidaan m&#228;&#228;ritt&#228;&#228; sen avainparametrin nimi (ei arvo), jota on k&#228;ytett&#228;v&#228; URL-osoitteessa. Todellinen avainarvo annetaan tunnistetiedoissa.</li><li><code>Headers</code> : T&#228;m&#228;n arvon m&#228;&#228;ritt&#228;minen tietueena antaa lis&#228;otsikoita HTTP-pyynn&#246;lle.</li><li><code>Timeout</code> : T&#228;m&#228;n arvon m&#228;&#228;ritt&#228;minen kestona muuttaa HTTP-pyynn&#246;n aikakatkaisua. Oletusarvo on 100 sekuntia.</li><li><code>ExcludedFromCacheKey</code> : T&#228;m&#228;n arvon m&#228;&#228;ritt&#228;minen luettelona j&#228;tt&#228;&#228; pois n&#228;m&#228; HTTP-otsikkoavaimet tietojen v&#228;limuistiin tallentamisen laskutoimituksesta.</li><li><code>IsRetry</code> : T&#228;m&#228;n loogisen arvon m&#228;&#228;ritt&#228;minen true-arvoksi ohittaa v&#228;limuistissa olevan vastauksen noudettaessa tietoja.</li><li><code>ManualStatusHandling</code> : T&#228;m&#228;n arvon m&#228;&#228;ritt&#228;minen luettelona est&#228;&#228; kaiken sis&#228;isen k&#228;sittelyn HTTP-pyynn&#246;ille, joiden vastauksella on jokin n&#228;ist&#228; tilakoodeista.</li><li><code>RelativePath</code> : T&#228;m&#228;n arvon m&#228;&#228;ritt&#228;minen tekstin&#228; liitt&#228;&#228; sen URL-perusosoitteeseen ennen pyynn&#246;n tekemist&#228;.</li></ul>     HTTP-pyyntö tehdään HEAD-menetelmällä. Mukautetun tietoyhdistimen kontekstin ulkopuolella vain vastausotsikoiden alijoukko on käytettävissä (tietoturvasyistä).


## Examples

### Example #1 
Nouda headers for &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; HTTP-otsikot RelativePath- ja Query-asetusten avulla.
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
