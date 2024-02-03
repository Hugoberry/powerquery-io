---
title: Web.Headers
---

# Web.Headers


## Description

Atgriež HTTP galvenes, kas lejupielādētas no vietrāža URL kā ieraksta vērtība.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

Tiek atgrieztas galvenes, kas lejupielādētas no <code>url</code> kā ieraksts. Lai norādītu papildu rekvizītus, <code>options</code> var norādīt neobligātu ieraksta parametru. Ierakstā var būt šādi lauki:    <ul><li><code>Query</code> : Programmiski pievienojiet vaicājuma parametrus vietrādim URL, neraizējoties par atkāpi.</li><li><code>ApiKeyName</code> : Ja mērķa vietnei ir priekšstats par API atslēgu, šo parametru var izmantot, lai norādītu vietrādī URL izmantojamo atslēgas parametra nosaukumu (nevis vērtību). Faktiskā atslēgas vērtība ir norādīta akreditācijas datos.</li><li><code>Headers</code> : Norādot šo vērtību kā ierakstu, HTTP pieprasījumam tiks nodrošinātas papildu galvenes.</li><li><code>Timeout</code> : Norādot šo vērtību kā ilgumu, tiks mainīts HTTP pieprasījuma taimauts. Noklusējuma vērtība ir 100 sekundes.</li><li><code>ExcludedFromCacheKey</code> : Norādot šo vērtību kā sarakstu, šīs HTTP galvenes atslēgas tiks izslēgtas no datu kešdarbes aprēķina daļas.</li><li><code>IsRetry</code> : Ja norādīsit šo loģisko vērtību kā true (patiess), ienesot datus, tiks ignorētas visas kešatmiņā esošās atbildes.</li><li><code>ManualStatusHandling</code> : Norādot šo vērtību kā sarakstu, netiks pieļauta jebkāda iebūvētā apstrāde tiem HTTP pieprasījumiem, kuru atbilde ir viens no šiem statusa kodiem.</li><li><code>RelativePath</code> : Norādot šo vērtību kā tekstu, pirms pieprasījuma veikšanas tas tiek pievienots pamata vietrādim URL.</li></ul>    HTTP pieprasījums ir veikts, izmantojot metodi HEAD. Ārpus pielāgota datu savienotāja konteksta ir pieejama tikai atbildes galveņu apakškopa (drošības apsvērumu dēļ).    


## Examples

### Example #1 
Izgūstiet HTTP galvenes &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt;, izmantojot opcijas RelativePath un Query.
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
