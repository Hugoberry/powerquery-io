---
title: Web.Contents
---

# Web.Contents


## Description

Palauttaa URL-osoitteesta ladatun sisällön binaarimuodossa.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Palauttaa kohteesta <code>url</code> ladatun sisällön binaarimuodossa. Valinnainen tietueparametri, <code>options</code>, voidaan antaa lisäominaisuuksien määrittämistä varten. Tietue voi sisältää seuraavat kentät:     <ul><li><code>Query</code> : Lis&#228;&#228; kyselyparametreja ohjelmallisesti URL-osoitteeseen ilman, ett&#228; sinun pit&#228;&#228; huolehtia ohjauskoodeista.</li><li><code>ApiKeyName</code> : Jos kohdesivustossa on ohjelmointirajapinta-avaimen k&#228;site, t&#228;m&#228;n parametrin avulla voidaan m&#228;&#228;ritt&#228;&#228; sen avainparametrin nimi (ei arvo), jota on k&#228;ytett&#228;v&#228; URL-osoitteessa. Todellinen avainarvo annetaan tunnistetiedoissa.</li><li><code>Headers</code> : T&#228;m&#228;n arvon m&#228;&#228;ritt&#228;minen tietueena antaa lis&#228;otsikoita HTTP-pyynn&#246;lle.</li><li><code>Timeout</code> : T&#228;m&#228;n arvon m&#228;&#228;ritt&#228;minen kestona muuttaa HTTP-pyynn&#246;n aikakatkaisua. Oletusarvo on 100 sekuntia.</li><li><code>ExcludedFromCacheKey</code> : T&#228;m&#228;n arvon m&#228;&#228;ritt&#228;minen luettelona j&#228;tt&#228;&#228; pois n&#228;m&#228; HTTP-otsikkoavaimet tietojen v&#228;limuistiin tallentamisen laskutoimituksesta.</li><li><code>IsRetry</code> : T&#228;m&#228;n loogisen arvon m&#228;&#228;ritt&#228;minen true-arvoksi ohittaa v&#228;limuistissa olevan vastauksen noudettaessa tietoja.</li><li><code>ManualStatusHandling</code> : T&#228;m&#228;n arvon m&#228;&#228;ritt&#228;minen luettelona est&#228;&#228; kaiken sis&#228;isen k&#228;sittelyn HTTP-pyynn&#246;ille, joiden vastauksella on jokin n&#228;ist&#228; tilakoodeista.</li><li><code>RelativePath</code> : T&#228;m&#228;n arvon m&#228;&#228;ritt&#228;minen tekstin&#228; liitt&#228;&#228; sen URL-perusosoitteeseen ennen pyynn&#246;n tekemist&#228;.</li><li><code>Content</code> : T&#228;m&#228;n arvon m&#228;&#228;ritt&#228;minen muuttaa verkkopyynn&#246;n GET-pyynn&#246;st&#228; POST-pyynn&#246;ksi k&#228;ytt&#228;en asetuksen arvoa POST-pyynn&#246;n sis&#228;lt&#246;n&#228;.</li></ul>     HTTP-pyyntö tehdään joko GET-muodossa (kun sisältöä ei ole määritetty) tai POST-muodossa (kun sisältöä on). POST-pyyntöjä voi tehdä vain anonyymisti.    <br />     HTTP-vastauksen otsikot ovat käytettävissä binaarituloksen metatietoina. Mukautetun tietoyhdistimen kontekstin ulkopuolella vain vastausotsikoiden alijoukko on käytettävissä (tietoturvasyistä). 


## Examples

### Example #1 
Nouda &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; sisältö RelativePath- ja Query-asetusten avulla. Näitä asetuksia voidaan käyttää staattisen perus-URL-osoitteen dynaamiseen kyselyyn.
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
Muodosta yhteys suojattuun URL-osoitteeseen, joka hyväksyy todennusavaimen osana kyselymerkkijonoa. Sen sijaan, että salainen avain koodattaisiin M:ssä (mikä aiheuttaisi suojausriskin),     avaimen voi antaa turvallisesti määrittämällä avaimen nimen (ei sen arvoa) M:ssä, valitsemalla verkon ohjelmointirajapinnan todentamisen ja antamalla avaimen arvon osana verkon ohjelmointirajapinnan tunnistetietoja.    Näin käytettynä seuraava esimerkki luo pyynnön kohteeseen &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
