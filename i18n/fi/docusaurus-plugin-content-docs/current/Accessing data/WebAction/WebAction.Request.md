---
title: WebAction.Request
---

# WebAction.Request


## Description

Luo toiminnon, joka suoritettuna palauttaa HTTP-pyynnön suorittamisen tulokset binaariarvona.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

Luo toiminnon, joka suoritettuna palauttaa <code>method</code> -pyynnön suorittamisen tulokset <code>url</code> käyttäen HTTP:tä binaariarvona.    Valinnainen tietueparametri, <code>options</code>, voidaan antaa lisäominaisuuksien määrittämistä varten. Tietue voi sisältää seuraavat kentät:    <ul><li><code>Query</code> : Lis&#228;&#228; kyselyparametreja ohjelmallisesti URL-osoitteeseen ilman, ett&#228; sinun pit&#228;&#228; huolehtia ohjauskoodeista.</li><li><code>ApiKeyName</code> : Jos kohdesivustossa on ohjelmointirajapinta-avaimen k&#228;site, t&#228;m&#228;n parametrin avulla voidaan m&#228;&#228;ritt&#228;&#228; sen avainparametrin nimi (ei arvo), jota on k&#228;ytett&#228;v&#228; URL-osoitteessa. Todellinen avainarvo annetaan tunnistetiedoissa.</li><li><code>Headers</code> : T&#228;m&#228;n arvon m&#228;&#228;ritt&#228;minen tietueena antaa lis&#228;otsikoita HTTP-pyynn&#246;lle.</li><li><code>Timeout</code> : T&#228;m&#228;n arvon m&#228;&#228;ritt&#228;minen kestona muuttaa HTTP-pyynn&#246;n aikakatkaisua. Oletusarvo on 100 sekuntia.</li><li><code>ExcludedFromCacheKey</code> : T&#228;m&#228;n arvon m&#228;&#228;ritt&#228;minen luettelona j&#228;tt&#228;&#228; pois n&#228;m&#228; HTTP-otsikkoavaimet tietojen v&#228;limuistiin tallentamisen laskutoimituksesta.</li><li><code>IsRetry</code> : T&#228;m&#228;n loogisen arvon m&#228;&#228;ritt&#228;minen true-arvoksi ohittaa v&#228;limuistissa olevan vastauksen noudettaessa tietoja.</li><li><code>ManualStatusHandling</code> : T&#228;m&#228;n arvon m&#228;&#228;ritt&#228;minen luettelona est&#228;&#228; kaiken sis&#228;isen k&#228;sittelyn HTTP-pyynn&#246;ille, joiden vastauksella on jokin n&#228;ist&#228; tilakoodeista.</li><li><code>RelativePath</code> : T&#228;m&#228;n arvon m&#228;&#228;ritt&#228;minen tekstin&#228; liitt&#228;&#228; sen URL-perusosoitteeseen ennen pyynn&#246;n tekemist&#228;.</li><li><code>Content</code> : T&#228;m&#228;n arvon m&#228;&#228;ritt&#228;minen aiheuttaa sen, ett&#228; sen sis&#228;ll&#246;st&#228; tulee HTTP-pyynn&#246;n leip&#228;teksti.</li></ul>    <br />    Huomaa, että tämä funktio on poistettu käytöstä useimmissa konteksteissa. Harkitse Web.Contents- tai Web.Headers-kohteen käyttämistä sen sijaan.


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
