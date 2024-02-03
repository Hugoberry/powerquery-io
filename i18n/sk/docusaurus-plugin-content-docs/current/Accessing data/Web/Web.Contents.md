---
title: Web.Contents
---

# Web.Contents


## Description

Vráti obsah stiahnutý z adresy URL ako binárny údaj.


## Syntax

```powerquery
Web.Contents(
    url as text,
    optional options as record
) as binary
```


## Details

Vráti obsah stiahnutý z <code>url</code> ako binárny. Na zadanie ďalších vlastností sa môže zadať voliteľný parameter záznamu <code>options</code>. Záznam môže obsahovať nasledujúce polia:    <ul><li><code>Query</code> : Umožňuje pomocou programovania pridať parametre dotazu k adrese URL bez ob&#225;v z &#250;niku &#250;dajov.</li><li><code>ApiKeyName</code> : Ak m&#225; cieľov&#225; lokalita koncept kľ&#250;ča rozhrania API, tento parameter sa d&#225; použiť na zadanie n&#225;zvu (nie hodnoty) kľ&#250;ča parametra, ktor&#253; sa mus&#237; použiť v URL adrese. Skutočn&#225; hodnota kľ&#250;ča je zadan&#225; v poveren&#237;.</li><li><code>Headers</code> : Ak sa t&#225;to hodnota zad&#225; ako z&#225;znam, do požiadavky HTTP sa pridaj&#250; ďalšie hlavičky.</li><li><code>Timeout</code> : Ak sa t&#225;to hodnota zad&#225; ako trvanie, zmen&#237; sa časov&#253; limit požiadavky HTTP. Predvolen&#225; hodnota je 100 sek&#250;nd.</li><li><code>ExcludedFromCacheKey</code> : Ak sa t&#225;to hodnota zad&#225; ako zoznam, vyl&#250;čia sa tieto kľ&#250;če hlavičiek HTTP a nebud&#250; s&#250;časťou v&#253;počtu s&#250;visiaceho s ukladan&#237;m &#250;dajov do vyrovn&#225;vacej pam&#228;te.</li><li><code>IsRetry</code> : Ak bude zadan&#225; logick&#225; hodnota true, bud&#250; sa pri nač&#237;tavan&#237; &#250;dajov ignorovať ak&#233;koľvek existuj&#250;ce odpovede vo vyrovn&#225;vacej pam&#228;ti.</li><li><code>ManualStatusHandling</code> : Ak sa t&#225;to hodnota zad&#225; ako zoznam, zabr&#225;ni to ak&#233;mukoľvek vstavan&#233;mu spracov&#225;vaniu požiadaviek HTTP, ktor&#253;ch odpoveď m&#225; niektor&#253; z t&#253;chto k&#243;dov stavu.</li><li><code>RelativePath</code> : Ak sa t&#225;to hodnota zad&#225; ako text, pripoj&#237; text k z&#225;kladu URL adresy pred vykonan&#237;m požiadavky.</li><li><code>Content</code> : Ak sa zad&#225; t&#225;to hodnota, zmen&#237; sa webov&#225; požiadavka z met&#243;dy GET na POST, pričom sa použije hodnota možnosti ako obsah met&#243;dy POST.</li></ul>    Požiadavka HTTP sa vykoná ako GET (ak nie je zadaný žiadny obsah) alebo POST (ak existuje obsah). Žiadosti POST je možné vykonať iba anonymne.    <br />    Hlavičky odpovede HTTP sú k dispozícii ako metaúdaje v binárnom výsledku. Mimo kontextu vlastného údajového konektora je k dispozícii iba podmnožina hlavičiek odpovedí (z bezpečnostných dôvodov).    


## Examples

### Example #1 
Načítajte obsah &lt;code&gt;&#34;https://bing.com/search?q=Power+Query&#34;&lt;/code&gt; pomocou možností RelativePath a Query. Tieto možnosti je možné použiť na dynamické dotazovanie statickej základnej URL adresy.
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
Vykonajte na URL adresu požiadavku POST, pričom sa odovzdá binárna údajová časť formátu JSON a odpoveď sa analyzuje ako JSON.
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
Pripojte sa k zabezpečenej URL adrese, ktorá prijíma overovací kľúč ako súčasť reťazca dotazu. Namiesto pevného kódovania tajného kľúča v M (ktoré môže predstavovať bezpečnostné riziko)     kľúč možno poskytnúť bezpečne zadaním jeho názvu (nie jeho hodnoty) v M, výberom overenia webového rozhrania API a zadaním hodnoty kľúča ako súčasti poverenia webového rozhrania API.    Pri použití týmto spôsobom nasledujúci príklad vygeneruje požiadavku na &lt;code&gt;&#34;https://contoso.com/api/customers/get?api_key=\*\*\*\*\*\*&#34;&lt;/code&gt;.
```powerquery
Web.Contents("https://contoso.com/api/customers/get", [ApiKeyName="api_key"])
```

Result: 
```powerquery
binary
```




## Category
Accessing data
