---
title: Web.Headers
---

# Web.Headers


## Description

URL мекенжайынан жазба мәні ретінде жүктелген HTTP тақырыптарын қайтарады.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

Жазба ретінде <code>url</code> арқылы жүктеп алынған тақырыптарды қайтарады. Қосымша сипаттарды көрсету үшін <code>options</code> қосымша жазба параметрі берілуі мүмкін. Жазбада мына өрістер болуы мүмкін:    <ul><li><code>Query</code> : Бас тарту туралы алаңдамай, бағдарламалау жолымен сұрау параметрлерін URL мекенжайына қосыңыз.</li><li><code>ApiKeyName</code> : Егер мақсатты сайтта API кілті ұғымы болса, бұл параметрді URL мекенжайында пайдаланылуы тиіс кілт параметрінің атауын (мәнін емес) көрсету үшін пайдалануға болады. Нақты кілт мәні тіркелгі деректерінде беріледі.</li><li><code>Headers</code> : Бұл мән жазба ретінде көрсетілсе, HTTP сұрауы үшін қосымша тақырыптарды береді.</li><li><code>Timeout</code> : Бұл мән ұзақтық ретінде көрсетілсе, HTTP сұрауы үшін күту уақыты өзгереді. Әдепкі мәні: 100 секунд.</li><li><code>ExcludedFromCacheKey</code> : Бұл мән тізім ретінде көрсетілсе, осы HTTP тақырыбының кілттері деректерді кэштеу үшін есептеудің бөлігі болмайды.</li><li><code>IsRetry</code> : Бұл логикалық мән &quot;шын&quot; ретінде көрсетілсе, деректерді алу кезінде кэштегі бар жауап ескерілмейді.</li><li><code>ManualStatusHandling</code> : Бұл мән тізім ретінде көрсетілсе, жауабы осы күй кодтарының біреуіне ие HTTP сұраулары үшін ендірілген өңдеу болдырылмайды.</li><li><code>RelativePath</code> : Бұл мән мәтін ретінде көрсетілсе, сұрау жасалудан бұрын ол негізгі URL мекенжайына қолданылады.</li></ul>    HTTP сұрауы HEAD әдісімен орындалады. Реттелетін деректер қосқышы контекстінен тыс, тек жауап тақырыптарының қосалқы жиынтығы қолжетімді (қауіпсіздік мақсатында).    


## Examples

### Example #1 
RelativePath және Query параметрлерін пайдалану арқылы &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; үшін HTTP тақырыптарын алу.
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
