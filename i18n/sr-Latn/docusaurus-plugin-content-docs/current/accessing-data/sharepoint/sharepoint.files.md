---
title: SharePoint.Files
---

# SharePoint.Files


Vraća tabelu koja sadrži dokumente sa SharePoint lokacije.


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

Vraća tabelu koja sadrži red za svaki dokument pronađen na navedenoj SharePoint lokaciji, `url`, kao i u potfasciklama. Svaki red sadrži svojstva fascikle ili datoteke i vezu do njenog sadržaja. `options` može da se navede kako bi kontrolisala sledeće opcije:

-   `ApiVersion` : Broj (14 ili 15) ili tekst „Automatski“ koji navodi verziju SharePoint API-ja koja će se koristiti za ovaj sajt. Kada verzija API-ja nije navedena, koristi se 14. Kada se navede „Automatski“, verzija servera će se automatski otkriti ukoliko je moguće. Ako nije, verzija će podrazumevano biti 14. SharePoint sajtovi koji nisu na engleskom zahtevaju barem verziju 15.



## Category
Accessing data
