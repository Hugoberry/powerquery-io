---
title: SharePoint.Contents
---

# SharePoint.Contents


Vrne tabelo z vsebino s spletnega mesta SharePoint.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo, ki vsebuje vrstico za vsako mapo in dokument na navedenem SharePointovem spletnem mestu `url`. Vsaka vrstica vsebuje lastnosti mape ali datoteke in povezavo do vsebine. Navedete lahko `options`, s katerim nadzorujete te možnosti:

-   `ApiVersion` : Število (14 ali 15) ali besedilo"Samodejno", ki določa različico vmesnika API za SharePoint, ki bo uporabljena za to mesto. Če tega parametra ne navedete, bo uporabljena različica 14 vmesnika API. Če navedete"Samodejno", bo različica strežnika samodejno odkrita, če bo to mogoče, v nasprotnem primeru pa je privzeto izbrana različica 14. Za SharePointova mesta, ki niso v angleščini, potrebujete vsaj različico 15.
-   `Implementation` : Neobvezno. Določa, katero različico SharePointovega priključka želite uporabiti. Sprejete vrednosti so"2.0"ali"null". Če je vrednost"2.0", je uporabljena uvedba SharePointovega povezovalnika 2.0. Če je vrednost"null", je uporabljena izvirna uvedba SharePointovega povezovalnika.



## Category
Accessing data
