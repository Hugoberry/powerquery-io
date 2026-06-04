---
title: SharePoint.Contents
---

# SharePoint.Contents


Vraća tabelu koja obuhvata sadržaj sa SharePoint lokacije.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Remarks

Vraća tabelu sa redom za svaku fasciklu i dokument pronađen na navedenom SharePoint sajtu `url`. Svaki red sadrži svojstva fascikle ili datoteke i vezu do sadržaja. `options` može biti naveden radi kontrole sledećih opcija:

-   `ApiVersion` : Broj (14 ili 15) ili tekst „Automatski“ koji navodi verziju SharePoint API-ja koja će se koristiti za ovaj sajt. Kada verzija API-ja nije navedena, koristi se 14. Kada se navede „Automatski“, verzija servera će se automatski otkriti ukoliko je moguće. Ako nije, verzija će podrazumevano biti 14. SharePoint sajtovi koji nisu na engleskom zahtevaju barem verziju 15.
-   `Implementation` : Opcionalno. Navodi koju verziju SharePoint konektora treba koristiti. Prihvaćene vrednosti su „2.0“ ili bez vrednosti. Ako je vrednost „2.0“, koristi se primena 2.0 SharePoint konektora. Ako je vrednost bez vrednosti, koristi se originalna primena SharePoint konektora.



## Category
Accessing data
