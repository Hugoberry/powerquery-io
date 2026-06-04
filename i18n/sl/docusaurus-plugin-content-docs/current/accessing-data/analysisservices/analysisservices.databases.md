---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Vrne zbirke podatkov storitev Analysis Services iz določenega gostitelja.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Vrne zbirke podatkov iz primerka storitev Analysis Services `server`. Navedete lahko izbirni parameter zapisa `options`, s katerim določite dodatne lastnosti. Zapis lahko vsebuje ta polja:

-   `TypedMeasureColumns` : Logična vrednost, ki določa, ali bodo vrste, določene v večdimenzionalnem ali tabelaričnem modelu, uporabljene za vrste dodanih stolpcev z merami. Če je ta vrednost nastavljena na"false", bo vrsta"number"uporabljena za vse stolpce z merami. Privzeta vrednost za to možnost je"false".
-   `Culture` : Ime kulture, ki določa kulturo podatkov. To ime ustreza lastnosti niza povezave"Območni identifikator".
-   `CommandTimeout` : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je odvisna od gonilnika.
-   `ConnectionTimeout` : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika.
-   `SubQueries` : Številka (0, 1 ali 2), ki nastavi vrednost lastnosti"SubQueries"v nizu povezave. Ta vrednost nadzoruje način delovanja izračunanih članov v podizborih ali podizrezih. (Privzeta vrednost je 2.)
-   `Implementation`



## Category
Accessing data
