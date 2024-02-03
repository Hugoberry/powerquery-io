---
title: Web.Headers
---

# Web.Headers


## Description

Vráti hlavičky HTTP stiahnuté z adresy URL ako hodnotu záznamu.


## Syntax

```powerquery
Web.Headers(
    url as text,
    optional options as record
) as record
```


## Details

Vráti hlavičky stiahnuté z <code>url</code> ako záznam. Na zadanie ďalších vlastností sa môže zadať voliteľný parameter záznamu <code>options</code>. Záznam môže obsahovať nasledujúce polia:    <ul><li><code>Query</code> : Umožňuje pomocou programovania pridať parametre dotazu k adrese URL bez ob&#225;v z &#250;niku &#250;dajov.</li><li><code>ApiKeyName</code> : Ak m&#225; cieľov&#225; lokalita koncept kľ&#250;ča rozhrania API, tento parameter sa d&#225; použiť na zadanie n&#225;zvu (nie hodnoty) kľ&#250;ča parametra, ktor&#253; sa mus&#237; použiť v URL adrese. Skutočn&#225; hodnota kľ&#250;ča je zadan&#225; v poveren&#237;.</li><li><code>Headers</code> : Ak sa t&#225;to hodnota zad&#225; ako z&#225;znam, do požiadavky HTTP sa pridaj&#250; ďalšie hlavičky.</li><li><code>Timeout</code> : Ak sa t&#225;to hodnota zad&#225; ako trvanie, zmen&#237; sa časov&#253; limit požiadavky HTTP. Predvolen&#225; hodnota je 100 sek&#250;nd.</li><li><code>ExcludedFromCacheKey</code> : Ak sa t&#225;to hodnota zad&#225; ako zoznam, vyl&#250;čia sa tieto kľ&#250;če hlavičiek HTTP a nebud&#250; s&#250;časťou v&#253;počtu s&#250;visiaceho s ukladan&#237;m &#250;dajov do vyrovn&#225;vacej pam&#228;te.</li><li><code>IsRetry</code> : Ak bude zadan&#225; logick&#225; hodnota true, bud&#250; sa pri nač&#237;tavan&#237; &#250;dajov ignorovať ak&#233;koľvek existuj&#250;ce odpovede vo vyrovn&#225;vacej pam&#228;ti.</li><li><code>ManualStatusHandling</code> : Ak sa t&#225;to hodnota zad&#225; ako zoznam, zabr&#225;ni to ak&#233;mukoľvek vstavan&#233;mu spracov&#225;vaniu požiadaviek HTTP, ktor&#253;ch odpoveď m&#225; niektor&#253; z t&#253;chto k&#243;dov stavu.</li><li><code>RelativePath</code> : Ak sa t&#225;to hodnota zad&#225; ako text, pripoj&#237; text k z&#225;kladu URL adresy pred vykonan&#237;m požiadavky.</li></ul>    Požiadavka HTTP sa vykoná pomocou metódy HEAD. Mimo kontextu vlastného údajového konektora je k dispozícii iba podmnožina hlavičiek odpovedí (z bezpečnostných dôvodov).    


## Examples

### Example #1 
Načítajte hlavičky HTTP pre &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; pomocou možností RelativePath a Query.
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
