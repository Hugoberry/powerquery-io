---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Vraća tabelu višedimenzionalnih kocki ili tabelarnih modela iz Analysis Services baze podataka.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vraća tabelu višedimenzionalnih kocki ili tabelarnih modela iz Analysis Services baze podataka `database` na serveru `server`. Moguće je navesti opcionalni parametar zapisa, `options`, radi kontrole sledećih opcija:

-   `Query` : Osnovni MDX upit koji se koristi za preuzimanje podataka.
-   `TypedMeasureColumns` : Logička vrednost koja naznačava da li će tipovi navedeni u višedimenzionalnom ili tabelarnom modelu biti korišćeni za tipove dodatih kolona mera. Kada je postavljen na false, tip „broj“ biće korišćen za sve kolone mera. Podrazumevana vrednost za ovu opciju je false.
-   `Culture` : Ime kulture koje navodi kulturu za podatke. To odgovara svojstvu niske veze „Locale Identifier“.
-   `CommandTimeout` : Vremenski period pomoću kojeg se određuje koliko dugo je upitu na strani servera dozvoljeno da bude aktivan pre otkazivanja. Podrazumevana vrednost zavisi od upravljačkog programa.
-   `ConnectionTimeout` : Vremenski period pomoću kojeg se određuje koliko dugo treba čekati pre odustajanja od pokušaja da se uspostavi veza sa serverom. Podrazumevana vrednost zavisi od upravljačkog programa.
-   `SubQueries` : Broj (0, 1 ili 2) kojim se određuje vrednost svojstva „SubQueries“ u nisci veze. Time se kontroliše ponašanje izračunatih članova za podizbore ili podkocke. (Podrazumevana vrednost je 2).
-   `Implementation`



## Category
Accessing data
