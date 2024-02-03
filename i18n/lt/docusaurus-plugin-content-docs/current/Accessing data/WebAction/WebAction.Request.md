---
title: WebAction.Request
---

# WebAction.Request


## Description

Sukuriamas veiksmas, kuris jį įvykdžius, pateikia HTTP užklausos vykdymo rezultatus kaip dvejetainę reikšmę.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

Sukuriamas veiksmas, kurį įvykdžius pateikiami užklausos <code>method</code>, skirtos <code>url</code>, naudojant HTTP kaip dvejetainę reikšmę, vykdymo rezultatai.    Norint nurodyti papildomų ypatybių, galima pateikti pasirenkamą įrašo parametrą <code>options</code>. Į įrašą gali būti įtraukti šie laukai:    <ul><li><code>Query</code> : Programiniu būdu įtraukite užklausos parametrus į URL nesirūpindami dėl kaitos.</li><li><code>ApiKeyName</code> : Jei paskirties svetainėje žinomas API raktas, naudojant šį parametrą galima nurodyti URL naudojamo rakto parametro pavadinimą (bet ne reikšmę). Faktinė rakto reikšmė nurodyta kredencialuose.</li><li><code>Headers</code> : Nurodžius šią reikšmę kaip įrašą, į HTTP užklausą bus įtraukta papildomų antraščių.</li><li><code>Timeout</code> : Nurodant šią reikšmę kaip trukmę bus pakeistas HTTP užklausos skirtasis laikas. Numatytoji reikšmė yra 100 sekundžių.</li><li><code>ExcludedFromCacheKey</code> : Nurodant šią reikšmę kaip sąrašą, šie HTTP antraščių raktai nebus įtraukti į duomenų gavimo skaičiavimą.</li><li><code>IsRetry</code> : Nurodant šią loginę reikšmę kaip teisingą, bus nepaisoma visų talpykloje esamų atsakymų, kai gaunami duomenys.</li><li><code>ManualStatusHandling</code> : Nurodžius šią reikšmę kaip sąrašą, bus neleidžiama vykdyti jokio įtaisytojo HTTP užklausų, kurių atsakas nurodo kurį nors iš šių būsenos kodų, apdorojimo.</li><li><code>RelativePath</code> : Nurodžius šią reikšmę kaip tekstą, prieš pateikiant užklausą ji pridedama prie pagrindinio URL.</li><li><code>Content</code> : Nurodžius šią reikšmę, jos turinys taps HTTP užklausos tekstu.</li></ul>        <br />      Atkreipkite dėmesį, kad ši funkcija daugelyje kontekstų yra išjungta. Vietoj jos naudokite Web.Contents arba Web.Headers.    


## Examples

### Example #1 
Atlikite GET užklausą dėl „Bing“.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
