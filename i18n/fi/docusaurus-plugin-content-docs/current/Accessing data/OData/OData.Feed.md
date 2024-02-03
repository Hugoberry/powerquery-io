---
title: OData.Feed
---

# OData.Feed


## Description

Palauttaa OData-palvelun tarjoamien OData-syötteiden taulukon.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Details

Palauttaa OData-palvelun tarjoaman OData-syötteiden taulukon uri-osoitteesta <code>serviceUri</code>, otsikot <code>headers</code>. Totuusarvo, joka määrittää, käytetäänkö rinnakkaisia yhteyksiä, tai valinnainen tietueparametri <code>options</code> saatetaan määrittää seuraavien asetusten hallintaa varten:    <ul>    <li><code>Query</code>: lisää kyselyparametrit URL-osoitteeseen ohjelmallisesti tarvitsematta huolehtia ohjausmerkeistä. </li>    <li> <code>Headers</code>: tämän arvon määrittäminen tietueena antaa lisäotsikoita HTTP-pyyntöön.</li>    <li> <code>ExcludedFromCacheKey</code>: tämän arvon määrittäminen luettelona jättää nämä HTTP-otsikot pois välimuistiin sijoitettavien tietojen laskennasta.</li>    <li> <code>ApiKeyName</code>: Jos kohdesivustossa on jokin API-avaimen käsite, tämän parametrin avulla voidaan määrittää sen avainparametrin nimi (ei arvo), jota on käytettävä URL-osoitteessa. Todellinen avaimen arvo annetaan tunnistetiedossa.</li>    <li> <code>Timeout</code>: Tämän arvon määrittäminen kestona muuttaa HTTP-pyynnön aikakatkaisua. Oletusarvo on 600 sekuntia.</li>    <li> <code>EnableBatch</code>: looginen arvo (true/false), joka määrittää, sallitaanko OData $batch -pyynnön muodostaminen, jos MaxUriLength ylitetään (oletusasetus on false).</li>    <li> <code>MaxUriLength</code>: Luku, joka ilmaisee OData-palveluun lähetetyn sallitun uri-osoitteen enimmäispituuden. Jos tämä ylitetään, ja EnableBatch on true, pyyntö tehdään OData $batch -päätepisteelle, ja muussa tapauksessa se epäonnistuu (oletusarvo on 2048).</li>    <li> <code>Concurrent</code>: Looginen arvo (true/false), jonka asetus true määrittää, että palvelun pyynnöt tehdään samanaikaisesti. Kun asetus on false, pyynnöt tehdään järjestyksessä. Kun tätä ei määritetä, arvon määrittää palvelun AsynchronousRequestsSupported-huomautus. Jos palvelu ei määritä, tuetaanko AsynchronousRequestsSupported-kohdetta, pyynnöt tehdään järjestyksessä.</li>    <li> <code>ODataVersion</code>: Luku (3 tai 4), joka määrittää tälle OData-palvelulle käytettävän OData-protokollaversion. Kun tätä ei määritetä, kaikkia tuettuja versioita pyydetään. Palvelun version määrittää palvelun palauttama OData-Version-otsikko.</li>    <li> <code>FunctionOverloads</code>: Looginen arvo (true/false), jonka asetus true määrittää, että funktion tuonnin ylikuormitukset luetellaan siirtymistoiminnassa erillisinä merkintöinä, ja arvo false määrittää, että funktion tuonnin ylilataukset luetellaan yhtenä union-funktiona siirtymistoiminnossa. Oletusarvo V3:lle on false. Oletusarvo V4:lle on true.</li>    <li> <code>MoreColumns</code>: Looginen arvo (true/false), jonka asetus true lisää Lisää sarakkeita -sarakkeen kuhunkin entiteettisyötteeseen, joka sisältää avoimia tyyppejä ja polymorfisia tyyppejä. Tämä sisältää kentät, joita ei ole määritetty perustyypissä. Kun arvo on false, tätä kenttää ei ole. Oletusarvo on false.</li>    <li> <code>IncludeAnnotations</code>: Pilkuin eroteltu luettelo nimitilan täydellisiä termien nimiä tai malleja, jotka sisällytetään yleismerkillä \*. Oletusarvon mukaan mitään huomautuksista ei sisällytetä.</li>    <li> <code>IncludeMetadataAnnotations</code> : Pilkuin eroteltu luettelo nimitilan täydellisiä termien nimiä tai malleja, jotka sisällytetään metatietotiedostopyyntöihin. Yleismerkki on \*. Sisältää oletusarvon mukaan samat huomautukset kuin IncludeAnnotations.</li>    <li> <code>OmitValues</code> : Antaa OData-palvelun välttää tiettyjen arvojen kirjoittamisen vastauksiin. Jo tämä vahvistetaan, kyseiset arvot päätellään pois jätetyistä kentistä. Asetuksia ovat seuraavat:      <ul>        <li><code>ODataOmitValues.Nulls</code> : antaa OData-palvelun jättää pois null-tyhjäarvot.</li>      </ul>    </li>    <li> <code>Implementation</code> : määrittää käytettävän OData-liittimen toteutuksen. Kelvolliset arvot ovat 2.0 tai tyhjäarvo.</li>    </ul>


## Examples

### Example #1 
Muodosta yhteys TripPinin OData-palveluun.
```powerquery
OData.Feed("https://services.odata.org/V4/TripPinService")
```

Result: 
```powerquery
table
```




## Category
Accessing data
