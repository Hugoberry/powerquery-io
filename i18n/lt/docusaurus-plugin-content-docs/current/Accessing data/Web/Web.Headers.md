---
title: Web.Headers
---

# Web.Headers


## Description

Pateikiamos HTTP antraštės, atsisiųstos iš URL kaip įrašo reikšmė.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

Pateikiamos iš <code>url</code> atsisiųstos antraštės kaip įrašas. Norint nurodyti papildomas ypatybes, gali būti pateiktas pasirenkamas įrašo parametras, <code>options</code>. Įraše gali būti šie laukai:    <ul><li><code>Query</code> : Programiniu būdu įtraukite užklausos parametrus į URL nesirūpindami dėl kaitos.</li><li><code>ApiKeyName</code> : Jei paskirties svetainėje žinomas API raktas, naudojant šį parametrą galima nurodyti URL naudojamo rakto parametro pavadinimą (bet ne reikšmę). Faktinė rakto reikšmė nurodyta kredencialuose.</li><li><code>Headers</code> : Nurodžius šią reikšmę kaip įrašą, į HTTP užklausą bus įtraukta papildomų antraščių.</li><li><code>Timeout</code> : Nurodant šią reikšmę kaip trukmę bus pakeistas HTTP užklausos skirtasis laikas. Numatytoji reikšmė yra 100 sekundžių.</li><li><code>ExcludedFromCacheKey</code> : Nurodant šią reikšmę kaip sąrašą, šie HTTP antraščių raktai nebus įtraukti į duomenų gavimo skaičiavimą.</li><li><code>IsRetry</code> : Nurodant šią loginę reikšmę kaip teisingą, bus nepaisoma visų talpykloje esamų atsakymų, kai gaunami duomenys.</li><li><code>ManualStatusHandling</code> : Nurodžius šią reikšmę kaip sąrašą, bus neleidžiama vykdyti jokio įtaisytojo HTTP užklausų, kurių atsakas nurodo kurį nors iš šių būsenos kodų, apdorojimo.</li><li><code>RelativePath</code> : Nurodžius šią reikšmę kaip tekstą, prieš pateikiant užklausą ji pridedama prie pagrindinio URL.</li></ul>    HTTP užklausa pateikta naudojant HEAD metodą. Už pasirinktinės duomenų jungties konteksto ribų galimas tik atsakymų antraščių poaibis (saugumo sumetimais).    


## Examples

### Example #1 
Naudodami „RelativePath“ ir „Query“ parinktis gaukite &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; HTTP antraštes.
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
