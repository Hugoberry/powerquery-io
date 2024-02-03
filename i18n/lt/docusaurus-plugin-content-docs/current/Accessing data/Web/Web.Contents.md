---
title: Web.Contents
---

# Web.Contents


## Description

Pateikiamas turinys, atsisiųstas iš URL kaip dvejatainis.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Pateikiamas iš <code>url</code> atsisiųstas turinys kaip dvejetainis. Norint nurodyti papildomas ypatybes, gali būti pateikiamas pasirenkamas įrašo parametras, <code>options</code>. Į įrašą gali būti įtraukti šie laukai:    <ul><li><code>Query</code> : Programiniu būdu įtraukite užklausos parametrus į URL nesirūpindami dėl kaitos.</li><li><code>ApiKeyName</code> : Jei paskirties svetainėje žinomas API raktas, naudojant šį parametrą galima nurodyti URL naudojamo rakto parametro pavadinimą (bet ne reikšmę). Faktinė rakto reikšmė nurodyta kredencialuose.</li><li><code>Headers</code> : Nurodžius šią reikšmę kaip įrašą, į HTTP užklausą bus įtraukta papildomų antraščių.</li><li><code>Timeout</code> : Nurodant šią reikšmę kaip trukmę bus pakeistas HTTP užklausos skirtasis laikas. Numatytoji reikšmė yra 100 sekundžių.</li><li><code>ExcludedFromCacheKey</code> : Nurodant šią reikšmę kaip sąrašą, šie HTTP antraščių raktai nebus įtraukti į duomenų gavimo skaičiavimą.</li><li><code>IsRetry</code> : Nurodant šią loginę reikšmę kaip teisingą, bus nepaisoma visų talpykloje esamų atsakymų, kai gaunami duomenys.</li><li><code>ManualStatusHandling</code> : Nurodžius šią reikšmę kaip sąrašą, bus neleidžiama vykdyti jokio įtaisytojo HTTP užklausų, kurių atsakas nurodo kurį nors iš šių būsenos kodų, apdorojimo.</li><li><code>RelativePath</code> : Nurodžius šią reikšmę kaip tekstą, prieš pateikiant užklausą ji pridedama prie pagrindinio URL.</li><li><code>Content</code> : Nurodžius šią reikšmę, žiniatinklio užklausa GET pakeičiama į POST kaip POST turinį naudojant parinkties reikšmę.</li></ul>    HTTP užklausa pateikiama kaip GET (kai nenurodytas turinys) arba POST (kai yra turinys). POST užklausas galima pateikti tik anonimiškai.    <br />    HTTP atsakymo antraštės pasiekiamos kaip dvejetainio rezultato metaduomenys. Už pasirinktinės duomenų jungties konteksto ribų galimas tik atsakymo antraščių poaibis (saugumo sumetimais).    


## Examples

### Example #1 
Gaukite &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; turinį naudodami RelativePath ir užklausos parinktis. Šios parinktys gali būti naudojamos pateikti dinamiškas užklausas statinio pagrindo URL.
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
Atlikite funkciją SKELBTI pagal URL, perduodami dvejetainio JSON paketo turinį ir analizuodami atsaką kaip JSON.
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
Prisijunkite prie saugaus URL, kuris kaip užklausos eilutės dalį priima autentifikavimo raktą. Užuot užprogramavus slaptąjį raktą M (tai gali kelti grėsmę saugai),  raktą galima saugiai pateikti nurodant jo pavadinimą (ne jo reikšmę) M, pasirinkdami žiniatinklio API autentifikavimą ir įvesdami rakto reikšmę kaip žiniatinklio API credential. Naudojant tokiu būdu, toliau pateiktame pavyzdyje bus sugeneruota užklausa &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*&#34;&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
