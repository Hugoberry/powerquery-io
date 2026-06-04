---
title: OData.Feed
---

# OData.Feed


Palauttaa OData-palvelun tarjoamien OData-syötteiden taulukon.


## Syntax

```powerquery
OData.Feed(
    serviceUri as text,
    optional headers as record,
    optional options as any
) as any
```


## Remarks

Palauttaa OData-palvelun tarjoaman OData-syötteiden taulukon uri-osoitteesta `serviceUri`, otsikot `headers`. Totuusarvo, joka määrittää, käytetäänkö rinnakkaisia yhteyksiä, tai valinnainen tietueparametri `options` saatetaan määrittää seuraavien asetusten hallintaa varten:

-   `Query`: lisää kyselyparametrit URL-osoitteeseen ohjelmallisesti tarvitsematta huolehtia ohjausmerkeistä.
-   `Headers`: Jos tämä arvo määritetään tietueeksi, HTTP-pyyntöön annetaan lisäotsikoita.
-   `ExcludedFromCacheKey`: tämän arvon määrittäminen luettelona jättää nämä HTTP-otsikot pois välimuistiin sijoitettavien tietojen laskennasta.
-   `ApiKeyName`: Jos kohdesivustolla on ohjelmointirajapinta-avaimen käsite, tämän parametrin avulla voidaan määrittää URL-osoitteessa käytettävän avainparametrin nimi (ei arvo). Todellinen avaimen arvo annetaan tunnistetiedossa.
-   `Timeout`: Tämän arvon määrittäminen kestona muuttaa HTTP-pyynnön aikakatkaisua. Oletusarvo on 600 sekuntia.
-   `EnableBatch`: looginen arvo (true/false), joka määrittää, sallitaanko OData $batch -pyynnön muodostaminen, jos MaxUriLength ylitetään (oletusasetus on false).
-   `MaxUriLength`: Luku, joka ilmaisee OData-palveluun lähetetyn sallitun uri-osoitteen enimmäispituuden. Jos tämä ylitetään, ja EnableBatch on true, pyyntö tehdään OData $batch -päätepisteelle, ja muussa tapauksessa se epäonnistuu (oletusarvo on 2048).
-   `Concurrent`: Looginen arvo (true/false), jonka asetus true määrittää, että palvelun pyynnöt tehdään samanaikaisesti. Kun asetus on false, pyynnöt tehdään järjestyksessä. Kun tätä ei määritetä, arvon määrittää palvelun AsynchronousRequestsSupported-huomautus. Jos palvelu ei määritä, tuetaanko AsynchronousRequestsSupported-kohdetta, pyynnöt tehdään järjestyksessä.
-   `ODataVersion`: Luku (3 tai 4), joka määrittää tälle OData-palvelulle käytettävän OData-protokollaversion. Kun tätä ei määritetä, kaikkia tuettuja versioita pyydetään. Palvelun versio määräytyy palvelun palauttaman OData-Version-otsikon mukaan.
-   `FunctionOverloads`: Looginen (tosi/epätosi), kun asetuksena on tosi, funktion tuonnin ylikuormitukset näkyvät siirtymistoiminnossa erillisinä merkintöinä, kun arvoksi on määritetty epätosi, funktion tuonnin ylikuormitukset luetellaan yhtenä yhdistämisfunktiona siirtymistoiminnossa. V3:n oletusarvo: epätosi. V4:n oletusarvo: tosi.
-   `MoreColumns`: Totuusarvo (tosi/epätosi), kun asetus on tosi, lisää Lisää sarakkeita -sarakkeen jokaiseen entiteettisyötteeseen, joka sisältää avoimia tyyppejä ja polymorfisia tyyppejä. Tämä sisältää kentät, joita ei ole esitelty perustyypissä. Kun arvo on epätosi, tätä kenttää ei ole. Oletusarvo on epätosi.
-   `IncludeAnnotations`: Pilkuin eroteltu luettelo nimitilan tarkennuksista termien nimistä tai malleista, jotka sisällytetään yleismerkkinä \*. Oletusarvoisesti mitään huomautuksia ei sisällytetä.
-   `IncludeMetadataAnnotations`: Pilkuin eroteltu luettelo metatietotiedostopyyntöihin nimitilan tarkennuksista termien nimistä tai malleista, joiden yleismerkkinä on \*. Sisältää oletusarvon mukaan samat huomautukset kuin IncludeAnnotations.
-   `OmitValues`: Sallii OData-palvelun välttää tiettyjen arvojen kirjoittamisen vastauksiin. Jos palvelu vahvistetaa tämän, kyseiset arvot päätellään pois jätetyistä kentistä. Asetuksia ovat seuraavat:
    -   `ODataOmitValues.Nulls`: Sallii OData-palvelun jättää tyhjäarvot pois.
-   `Implementation` : määrittää käytettävän OData-liittimen toteutuksen. Kelvolliset arvot ovat 2.0 tai tyhjäarvo.


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
