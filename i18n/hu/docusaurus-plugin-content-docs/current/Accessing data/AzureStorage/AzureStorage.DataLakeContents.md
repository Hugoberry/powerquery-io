---
title: AzureStorage.DataLakeContents
---

# AzureStorage.DataLakeContents


## Description

Egy adott fájl tartalmát adja vissza egy Azure Data Lake Storage-fájlrendszerből.


## Syntax

```powerquery
AzureStorage.DataLakeContents(
    url as text,
    optional options as record
) as binary
```


## Details

A fájl tartalmát adja vissza az URL-címen (<code>url</code>) egy Azure Data Lake Storage-fájlrendszerből. A(z) <code>options</code> megadásával vezérelhetők a következő beállítások:    <ul><li><code>BlockSize</code> : Az adatfogyaszt&#243;ra val&#243; v&#225;rakoz&#225;s előtt beolvasni k&#237;v&#225;nt b&#225;jtok sz&#225;ma. Az alap&#233;rtelmezett &#233;rt&#233;k 4 MB.</li><li><code>RequestSize</code> : A kiszolg&#225;l&#243;ra egyetlen HTTP-k&#233;relemben beolvasni k&#237;v&#225;nt b&#225;jtok sz&#225;ma. Az alap&#233;rtelmezett &#233;rt&#233;k 4 MB.</li><li><code>ConcurrentRequests</code> : A ConcurrentRequests be&#225;ll&#237;t&#225;s az adatok gyorsabb let&#246;lt&#233;s&#233;t t&#225;mogatja a p&#225;rhuzamosan v&#233;gzett k&#233;relmek sz&#225;m&#225;nak megad&#225;s&#225;val, a mem&#243;ria kihaszn&#225;lts&#225;g&#225;nak &#225;r&#225;n. A sz&#252;ks&#233;ges mem&#243;ria (ConcurrentRequest \* RequestSize). Az alap&#233;rtelmezett &#233;rt&#233;k 16.</li></ul>



## Category
Accessing data
