---
title: SharePoint.Files
---

# SharePoint.Files


Vrne tabelo z dokumenti s spletnega mesta SharePoint.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo, ki vsebuje vrstico za vsak dokument, ki je bil najden na navedenem SharePointovem spletnem mestu `url`, in podmape. Vsaka vrstica vsebuje lastnosti mape ali datoteke in povezavo do vsebine. Navedete lahko `options`, s katerim nadzorujete te možnosti:

-   `ApiVersion` : Število (14 ali 15) ali besedilo"Samodejno", ki določa različico vmesnika API za SharePoint, ki bo uporabljena za to mesto. Če tega parametra ne navedete, bo uporabljena različica 14 vmesnika API. Če navedete"Samodejno", bo različica strežnika samodejno odkrita, če bo to mogoče, v nasprotnem primeru pa je privzeto izbrana različica 14. Za SharePointova mesta, ki niso v angleščini, potrebujete vsaj različico 15.



## Category
Accessing data
