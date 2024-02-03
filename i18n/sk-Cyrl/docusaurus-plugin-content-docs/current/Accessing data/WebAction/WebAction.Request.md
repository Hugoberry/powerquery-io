---
title: WebAction.Request
---

# WebAction.Request


## Description

Vytvorí akciu, ktorá po spustení vráti výsledky vykonania požiadavky HTTP ako binárnu hodnotu.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

Vytvorí akciu, ktorá po spustení vráti výsledky vykonania požiadavky <code>method</code> pre: <code>url</code> pomocou protokolu HTTP vo forme binárnej hodnoty.    Na zadanie ďalších vlastností sa môže zadať voliteľný parameter záznamu <code>options</code>. Záznam môže obsahovať nasledujúce polia:    <ul><li><code>Query</code> : Umožňuje pomocou programovania pridať parametre dotazu k adrese URL bez ob&#225;v z &#250;niku &#250;dajov.</li><li><code>ApiKeyName</code> : Ak m&#225; cieľov&#225; lokalita koncept kľ&#250;ča rozhrania API, tento parameter sa d&#225; použiť na zadanie n&#225;zvu (nie hodnoty) kľ&#250;ča parametra, ktor&#253; sa mus&#237; použiť v URL adrese. Skutočn&#225; hodnota kľ&#250;ča je zadan&#225; v poveren&#237;.</li><li><code>Headers</code> : Ak sa t&#225;to hodnota zad&#225; ako z&#225;znam, do požiadavky HTTP sa pridaj&#250; ďalšie hlavičky.</li><li><code>Timeout</code> : Ak sa t&#225;to hodnota zad&#225; ako trvanie, zmen&#237; sa časov&#253; limit požiadavky HTTP. Predvolen&#225; hodnota je 100 sek&#250;nd.</li><li><code>ExcludedFromCacheKey</code> : Ak sa t&#225;to hodnota zad&#225; ako zoznam, vyl&#250;čia sa tieto kľ&#250;če hlavičiek HTTP a nebud&#250; s&#250;časťou v&#253;počtu s&#250;visiaceho s ukladan&#237;m &#250;dajov do vyrovn&#225;vacej pam&#228;te.</li><li><code>IsRetry</code> : Ak bude zadan&#225; logick&#225; hodnota true, bud&#250; sa pri nač&#237;tavan&#237; &#250;dajov ignorovať ak&#233;koľvek existuj&#250;ce odpovede vo vyrovn&#225;vacej pam&#228;ti.</li><li><code>ManualStatusHandling</code> : Ak sa t&#225;to hodnota zad&#225; ako zoznam, zabr&#225;ni to ak&#233;mukoľvek vstavan&#233;mu spracov&#225;vaniu požiadaviek HTTP, ktor&#253;ch odpoveď m&#225; niektor&#253; z t&#253;chto k&#243;dov stavu.</li><li><code>RelativePath</code> : Ak sa t&#225;to hodnota zad&#225; ako text, pripoj&#237; text k z&#225;kladu URL adresy pred vykonan&#237;m požiadavky.</li><li><code>Content</code> : Ak sa zad&#225; t&#225;to hodnota, jej obsah sa stane telom požiadavky HTTP.</li></ul>    <br />    Všimnite si, že táto funkcia je vo väčšine kontextov vypnutá. Zvážte namiesto toho použitie súboru Web.Contents alebo Web.Headers.    


## Examples

### Example #1 
Vykonajte na Bing požiadavku GET.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
