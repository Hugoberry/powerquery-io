---
title: WebAction.Request
---

# WebAction.Request


Sukuriamas veiksmas, kuris jį įvykdžius, pateikia HTTP užklausos vykdymo rezultatus kaip dvejetainę reikšmę.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Sukuriamas veiksmas, kurį įvykdžius pateikiami užklausos `method`, skirtos `url`, naudojant HTTP kaip dvejetainę reikšmę, vykdymo rezultatai. Norint nurodyti papildomas ypatybes, gali būti pateikiamas pasirenkamas įrašo parametras, `options`. Įraše gali būti šie laukai:

-   `Query` : Programiniu būdu įtraukite užklausos parametrus į URL nesirūpindami dėl kaitos.
-   `ApiKeyName` : Jei paskirties svetainėje žinomas API raktas, naudojant šį parametrą galima nurodyti URL naudojamo rakto parametro pavadinimą (bet ne reikšmę). Faktinė rakto reikšmė nurodyta kredencialuose.
-   `Headers` : Nurodžius šią reikšmę kaip įrašą, į HTTP užklausą bus įtraukta papildomų antraščių.
-   `Timeout` : Nurodant šią reikšmę kaip trukmę bus pakeistas HTTP užklausos skirtasis laikas. Numatytoji reikšmė yra 100 sekundžių.
-   `ExcludedFromCacheKey` : Nurodant šią reikšmę kaip sąrašą, šie HTTP antraščių raktai nebus įtraukti į duomenų gavimo skaičiavimą.
-   `IsRetry` : Nurodant šią loginę reikšmę kaip teisingą, bus nepaisoma visų talpykloje esamų atsakymų, kai gaunami duomenys.
-   `ManualStatusHandling` : Nurodžius šią reikšmę kaip sąrašą, bus neleidžiama vykdyti jokio įtaisytojo HTTP užklausų, kurių atsakas nurodo kurį nors iš šių būsenos kodų, apdorojimo.
-   `RelativePath` : Nurodžius šią reikšmę kaip tekstą, prieš pateikiant užklausą ji pridedama prie pagrindinio URL.
-   `Content` : Nurodžius šią reikšmę, jos turinys taps HTTP užklausos tekstu.

Atkreipkite dėmesį, kad ši funkcija daugelyje kontekstų yra išjungta. Vietoj to naudokite Web.Contents arba Web.Headers.


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
