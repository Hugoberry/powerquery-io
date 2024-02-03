---
title: Web.Contents
---

# Web.Contents


## Description

URL мекенжайынан екілік файл ретінде жүктелген мазмұнды қайтарады.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Екілік мән ретінде <code>url</code> арқылы жүктеп алынған контентті қайтарады. Қосымша сипаттарды көрсету үшін <code>options</code> қосымша жазба параметрі берілуі мүмкін. Жазбада мына өрістер болуы мүмкін:    <ul><li><code>Query</code> : Бас тарту туралы алаңдамай, бағдарламалау жолымен сұрау параметрлерін URL мекенжайына қосыңыз.</li><li><code>ApiKeyName</code> : Егер мақсатты сайтта API кілті ұғымы болса, бұл параметрді URL мекенжайында пайдаланылуы тиіс кілт параметрінің атауын (мәнін емес) көрсету үшін пайдалануға болады. Нақты кілт мәні тіркелгі деректерінде беріледі.</li><li><code>Headers</code> : Бұл мән жазба ретінде көрсетілсе, HTTP сұрауы үшін қосымша тақырыптарды береді.</li><li><code>Timeout</code> : Бұл мән ұзақтық ретінде көрсетілсе, HTTP сұрауы үшін күту уақыты өзгереді. Әдепкі мәні: 100 секунд.</li><li><code>ExcludedFromCacheKey</code> : Бұл мән тізім ретінде көрсетілсе, осы HTTP тақырыбының кілттері деректерді кэштеу үшін есептеудің бөлігі болмайды.</li><li><code>IsRetry</code> : Бұл логикалық мән &quot;шын&quot; ретінде көрсетілсе, деректерді алу кезінде кэштегі бар жауап ескерілмейді.</li><li><code>ManualStatusHandling</code> : Бұл мән тізім ретінде көрсетілсе, жауабы осы күй кодтарының біреуіне ие HTTP сұраулары үшін ендірілген өңдеу болдырылмайды.</li><li><code>RelativePath</code> : Бұл мән мәтін ретінде көрсетілсе, сұрау жасалудан бұрын ол негізгі URL мекенжайына қолданылады.</li><li><code>Content</code> : Бұл мәнді көрсету параметр мәнін POST контенті ретінде пайдаланып, GET арқылы POST үшін веб-сұрауды өзгертеді.</li></ul>    HTTP сұрауы GET әдісімен (контент көрсетілмеген жағдайда) немесе POST әдісімен (контент көрсетілген жағдайда) орындалады.    <br />    HTTP жауабының тақырыптары екілік нәтиже үшін метадеректер ретінде қолжетімді. Реттелетін деректер қосқышы контекстінен тыс, тек жауап тақырыптарының қосалқы жиынтығы қолжетімді (қауіпсіздік мақсатында).    


## Examples

### Example #1 
RelativePath және Сұрау опциялары арқылы &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; мазмұнын шығарып алыңыз. Бұл опцияларды статикалық негізді URL мекенжайын динамикалық түрде сұрау үшін пайдалануға болады.
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
Екілік JSON пайдалы деректерінен өтіп және жауапты JSON ретінде талдай отырып, URL мекенжайы үшін “ЖАРИЯЛАУ” пәрменін орындаңыз.
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
Аутентификация кілтін сұрау жолының бір бөлігі ретінде қабылдайтын қауіпсіз URL мекенжайына қосылыңыз. М ішінде құпия кілтті қатаң кодтаудың (бұл қауіпсіздікке қауіп төндіреді) орнына,     кілтті оның атауын (оның мәнін емес) М ішінде көрсету арқылы, веб API аутентификациясын таңдау және кілт мәнін веб API тіркелгі деректерінің бөлігі ретінде енгізу арқылы сенімді түрде енгізуге болады.    Осылайша пайдаланғанда келесі мысал &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt; сұрауын тудырады.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
