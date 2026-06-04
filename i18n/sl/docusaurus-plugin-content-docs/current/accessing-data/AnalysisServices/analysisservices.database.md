---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Vrne tabelo večdimenzionalnih kock ali tabelaričnih modelov iz zbirke podatkov storitev Analysis Services.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Vrne tabelo večdimenzionalnih kock ali tabelaričnih modelov iz zbirke podatkov storitev Analysis Services `database` v strežniku `server`. Navedete lahko izbirni parameter zapisa `options`, s katerim nadzorujete te možnosti:

-   `Query` : Izvorna poizvedba MDX, uporabljena za pridobitev podatkov.
-   `TypedMeasureColumns` : Logična vrednost, ki določa, ali bodo vrste, določene v večdimenzionalnem ali tabelaričnem modelu, uporabljene za vrste dodanih stolpcev z merami. Če je ta vrednost nastavljena na"false", bo vrsta"number"uporabljena za vse stolpce z merami. Privzeta vrednost za to možnost je"false".
-   `Culture` : Ime kulture, ki določa kulturo podatkov. To ime ustreza lastnosti niza povezave"Območni identifikator".
-   `CommandTimeout` : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je odvisna od gonilnika.
-   `ConnectionTimeout` : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika.
-   `SubQueries` : Številka (0, 1 ali 2), ki nastavi vrednost lastnosti"SubQueries"v nizu povezave. Ta vrednost nadzoruje način delovanja izračunanih članov v podizborih ali podizrezih. (Privzeta vrednost je 2.)
-   `Implementation`



## Category
Accessing data
