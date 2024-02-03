---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


## Description

Visszaad egy navigációs táblát, amely az Azure Data Lake Storage-ban lévő megadott tárolóban és annak almappáiban található dokumentumokat tartalmazza.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Details

Visszaad egy navigációs táblát, amely egy Azure Data Lake Storage-fájlrendszerben lévő, <code>endpoint</code> URL-címen elérhető fiók megadott tárolójában és annak almappáiban található dokumentumokat tartalmazza. A(z) <code>options</code> megadásával vezérelhetők a következő beállítások:    <ul><li><code>BlockSize</code> : Az adatfogyaszt&#243;ra val&#243; v&#225;rakoz&#225;s előtt beolvasni k&#237;v&#225;nt b&#225;jtok sz&#225;ma. Az alap&#233;rtelmezett &#233;rt&#233;k 4 MB.</li><li><code>RequestSize</code> : A kiszolg&#225;l&#243;ra egyetlen HTTP-k&#233;relemben beolvasni k&#237;v&#225;nt b&#225;jtok sz&#225;ma. Az alap&#233;rtelmezett &#233;rt&#233;k 4 MB.</li><li><code>ConcurrentRequests</code> : A ConcurrentRequests be&#225;ll&#237;t&#225;s az adatok gyorsabb let&#246;lt&#233;s&#233;t t&#225;mogatja a p&#225;rhuzamosan v&#233;gzett k&#233;relmek sz&#225;m&#225;nak megad&#225;s&#225;val, a mem&#243;ria kihaszn&#225;lts&#225;g&#225;nak &#225;r&#225;n. A sz&#252;ks&#233;ges mem&#243;ria (ConcurrentRequest \* RequestSize). Az alap&#233;rtelmezett &#233;rt&#233;k 16.</li><li><code>HierarchicalNavigation</code> : Logikai (igaz/hamis) &#233;rt&#233;k, amely meghat&#225;rozza, hogy a rendszer a f&#225;jlokat egy faszerű k&#246;nyvt&#225;rn&#233;zetben adja-e vissza vagy egy egyszerű list&#225;ban. Az alap&#233;rtelmezett &#233;rt&#233;k a hamis.</li></ul>



## Category
Accessing data
