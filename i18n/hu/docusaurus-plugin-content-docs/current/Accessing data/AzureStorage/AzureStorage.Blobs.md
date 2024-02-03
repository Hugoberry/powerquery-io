---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


## Description

Egy Azure-tárolócsoportbeli fiók tárolóit tartalmazó navigációs tábla visszaadása.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Details

Egy navigációs táblát ad vissza az Azure-tárfiókból, amely a fiók URL-címén (<code>account</code>) talált minden egyes tárolóhoz tartalmaz egy sort. Az egyes sorokban hivatkozás található a tárolóblobokra. A(z) <code>options</code> megadásával vezérelhetők a következő beállítások:    <ul><li><code>BlockSize</code> : Az adatfogyaszt&#243;ra val&#243; v&#225;rakoz&#225;s előtt beolvasni k&#237;v&#225;nt b&#225;jtok sz&#225;ma. Az alap&#233;rtelmezett &#233;rt&#233;k 4 MB.</li><li><code>RequestSize</code> : A kiszolg&#225;l&#243;ra egyetlen HTTP-k&#233;relemben beolvasni k&#237;v&#225;nt b&#225;jtok sz&#225;ma. Az alap&#233;rtelmezett &#233;rt&#233;k 4 MB.</li><li><code>ConcurrentRequests</code> : A ConcurrentRequests be&#225;ll&#237;t&#225;s az adatok gyorsabb let&#246;lt&#233;s&#233;t t&#225;mogatja a p&#225;rhuzamosan v&#233;gzett k&#233;relmek sz&#225;m&#225;nak megad&#225;s&#225;val, a mem&#243;ria kihaszn&#225;lts&#225;g&#225;nak &#225;r&#225;n. A sz&#252;ks&#233;ges mem&#243;ria (ConcurrentRequest \* RequestSize). Az alap&#233;rtelmezett &#233;rt&#233;k 16.</li></ul>



## Category
Accessing data
