---
title: AnalysisServices.Database
---

# AnalysisServices.Database


## Description

Vrne tabelo večdimenzionalnih kock ali tabelaričnih modelov iz zbirke podatkov storitev Analysis Services.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Vrne tabelo večdimenzionalnih kock ali tabelaričnih modelov iz zbirke podatkov storitev Analysis Services <code>database</code> v strežniku <code>server</code>. Navedete lahko izbirni parameter zapisa <code>options</code>, s katerim nadzorujete te možnosti:    <ul><li><code>Query</code> : Izvorna poizvedba MDX, uporabljena za pridobitev podatkov.</li><li><code>TypedMeasureColumns</code> : Logična vrednost, ki določa, ali bodo vrste, določene v večdimenzionalnem ali tabelaričnem modelu, uporabljene za vrste dodanih stolpcev z merami. Če je ta vrednost nastavljena na &#187;false&#171;, bo vrsta &#187;number&#171; uporabljena za vse stolpce z merami. Privzeta vrednost za to možnost je &#187;false&#171;.</li><li><code>Culture</code> : Ime kulture, ki določa kulturo podatkov. To ime ustreza lastnosti niza povezave &#187;Območni identifikator&#171;.</li><li><code>CommandTimeout</code> : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je odvisna od gonilnika.</li><li><code>ConnectionTimeout</code> : Trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom. Privzeta vrednost je odvisna od gonilnika.</li><li><code>SubQueries</code> : Številka (0, 1 ali 2), ki nastavi vrednost lastnosti &#187;SubQueries&#171; v nizu povezave. Ta vrednost nadzoruje način delovanja izračunanih članov v podizborih ali podizrezih. (Privzeta vrednost je 2.)</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
