---
title: SharePoint.Contents
---

# SharePoint.Contents


## Description

Vrne tabelo z vsebino s spletnega mesta SharePoint.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Details

Vrne tabelo, ki vsebuje vrstico za vsako mapo in dokument na navedenem SharePointovem spletnem mestu <code>url</code>. Vsaka vrstica vsebuje lastnosti mape ali datoteke in povezavo do vsebine. Navedete lahko <code>options</code>, s katerim nadzorujete te možnosti:    <ul><li><code>ApiVersion</code> : Število (14 ali 15) ali besedilo &#187;Samodejno&#171;, ki določa različico vmesnika API za SharePoint, ki bo uporabljena za to mesto. Če tega parametra ne navedete, bo uporabljena različica 14 vmesnika API. Če navedete &#187;Samodejno&#171;, bo različica strežnika samodejno odkrita, če bo to mogoče, v nasprotnem primeru pa je privzeto izbrana različica 14. Za SharePointova mesta, ki niso v angleščini, potrebujete vsaj različico 15.</li></ul>    



## Category
Accessing data
