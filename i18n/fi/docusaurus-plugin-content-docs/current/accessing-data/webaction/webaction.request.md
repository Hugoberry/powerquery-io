---
title: WebAction.Request
---

# WebAction.Request


Luo toiminnon, joka suoritettuna palauttaa HTTP-pyynnön suorittamisen tulokset binaariarvona.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Luo toiminnon, joka suoritettuna palauttaa tulokset `method`\-pyynnön suorittamisesta kohteelle `url` käyttäen HTTP:tä binaariarvona. Valinnainen tietueparametri, `options`, voidaan antaa lisäominaisuuksien määrittämistä varten. Tietue voi sisältää seuraavat kentät:

-   `Query` : Lisää kyselyparametreja ohjelmallisesti URL-osoitteeseen ilman, että sinun pitää huolehtia ohjauskoodeista.
-   `ApiKeyName` : Jos kohdesivustossa on ohjelmointirajapinta-avaimen käsite, tämän parametrin avulla voidaan määrittää sen avainparametrin nimi (ei arvo), jota on käytettävä URL-osoitteessa. Todellinen avainarvo annetaan tunnistetiedoissa.
-   `Headers` : Tämän arvon määrittäminen tietueena antaa lisäotsikoita HTTP-pyynnölle.
-   `Timeout` : Tämän arvon määrittäminen kestona muuttaa HTTP-pyynnön aikakatkaisua. Oletusarvo on 100 sekuntia.
-   `ExcludedFromCacheKey` : Tämän arvon määrittäminen luettelona jättää pois nämä HTTP-otsikkoavaimet tietojen välimuistiin tallentamisen laskutoimituksesta.
-   `IsRetry` : Tämän loogisen arvon määrittäminen true-arvoksi ohittaa välimuistissa olevan vastauksen noudettaessa tietoja.
-   `ManualStatusHandling` : Tämän arvon määrittäminen luettelona estää kaiken sisäisen käsittelyn HTTP-pyynnöille, joiden vastauksella on jokin näistä tilakoodeista.
-   `RelativePath` : Tämän arvon määrittäminen tekstinä liittää sen URL-perusosoitteeseen ennen pyynnön tekemistä.
-   `Content` : Tämän arvon määrittäminen aiheuttaa sen, että sen sisällöstä tulee HTTP-pyynnön leipäteksti.

Huomaa, että tämä funktio on poistettu käytöstä useimmissa konteksteissa. Harkitse Web.Contentsin käyttämistä sen sijaan.


## Examples

### Example #1
Suorita GET-pyyntö Bingille.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
