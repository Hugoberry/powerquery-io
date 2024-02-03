---
title: WebAction.Request
---

# WebAction.Request


## Description

Egy műveletet hoz létre, amely a végrehajtáskor egy HTTP-kérés végrehajtásának eredményét adja vissza bináris értékként.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

Olyan művelet létrehozása, amely a végrehajtásakor a következőnek küldött HTTP-alapú <code>method</code>-kérés végrehajtásának eredményét adja vissza bináris értékként: <code>url</code>.    A nem kötelező <code>options</code> rekordparaméter használatával további tulajdonságok is megadhatók. A rekord a következő mezőket tartalmazhatja:    <ul><li><code>Query</code> : Lek&#233;rdez&#233;sparam&#233;terek szoftveres hozz&#225;ad&#225;sa az URL-c&#237;mhez escape-karaktersorozat haszn&#225;lata n&#233;lk&#252;l.</li><li><code>ApiKeyName</code> : Ha a c&#233;lhely API-kulcsot haszn&#225;l, ezzel a param&#233;terrel adhat&#243; meg a kulcsparam&#233;ter neve (nem pedig az &#233;rt&#233;ke), amelyet az URL-c&#237;mben kell haszn&#225;lni. A kulcs t&#233;nyleges &#233;rt&#233;ke a hiteles&#237;tő adatokban tal&#225;lhat&#243;.</li><li><code>Headers</code> : Az &#233;rt&#233;k rekordk&#233;nt val&#243; meghat&#225;roz&#225;s&#225;val tov&#225;bbi fejl&#233;cek adhat&#243;k hozz&#225; egy HTTP-k&#233;r&#233;shez.</li><li><code>Timeout</code> : Az &#233;rt&#233;k időtartamk&#233;nt val&#243; megad&#225;sa m&#243;dos&#237;tja a HTTP-k&#233;r&#233;s időkorl&#225;tj&#225;t. Az alap&#233;rtelmezett &#233;rt&#233;k 100 m&#225;sodperc.</li><li><code>ExcludedFromCacheKey</code> : Ha ezen &#233;rt&#233;ket listak&#233;nt adja meg, kiz&#225;rja ezeket a HTTP-fejl&#233;ckulcsokat az adatok gyors&#237;t&#243;t&#225;raz&#225;s&#225;nak sz&#225;m&#237;t&#225;s&#225;b&#243;l.</li><li><code>IsRetry</code> : Ha a logikai &#233;rt&#233;ket igazk&#233;nt adja meg, figyelmen k&#237;v&#252;l hagyja a gyors&#237;t&#243;t&#225;rban l&#233;vő megl&#233;vő v&#225;laszokat az adatok leh&#237;v&#225;sakor.</li><li><code>ManualStatusHandling</code> : Ha az &#233;rt&#233;ket listak&#233;nt adja meg, megg&#225;tolja azon HTTP-k&#233;r&#233;sek be&#233;p&#237;tett kezel&#233;s&#233;t, amelyek v&#225;lasza ezen &#225;llapotk&#243;dok egyik&#233;t tartalmazza.</li><li><code>RelativePath</code> : Ha az &#233;rt&#233;ket sz&#246;vegk&#233;nt hat&#225;rozza meg, az alap URL-hez fűzi azt a k&#233;r&#233;s elv&#233;gz&#233;se előtt.</li><li><code>Content</code> : Ha megadja ezt az &#233;rt&#233;ket, annak tartalma lesz a HTTP-k&#233;r&#233;s t&#246;rzse.</li></ul>    <br />    Vegye figyelembe, hogy ez a függvény a legtöbb környezetben le van tiltva. Helyette a Web.Contents vagy a Web.Headers használata javasolt.    


## Examples

### Example #1 
GET kérés küldése a Bingnek.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
