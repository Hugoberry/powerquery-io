---
title: SharePoint.Contents
---

# SharePoint.Contents


## Description

Vraća tabelu koja obuhvata sadržaj sa SharePoint lokacije.


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Details

Vraća tabelu sa redom za svaku fasciklu i dokument pronađen na navedenom SharePoint sajtu <code>url</code>. Svaki red sadrži svojstva fascikle ili datoteke i vezu do sadržaja. <code>options</code> može biti naveden radi kontrole sledećih opcija:    <ul><li><code>ApiVersion</code> : Broj (14 ili 15) ili tekst „Automatski“ koji navodi verziju SharePoint API-ja koja će se koristiti za ovaj sajt. Kada verzija API-ja nije navedena, koristi se 14. Kada se navede „Automatski“, verzija servera će se automatski otkriti ukoliko je moguće. Ako nije, verzija će podrazumevano biti 14. SharePoint sajtovi koji nisu na engleskom zahtevaju barem verziju 15.</li></ul>    



## Category
Accessing data
