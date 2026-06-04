---
title: Table.View
---

# Table.View


Luo tai laajentaa taulukkoa käyttäen käyttäjän määrittämiä käsittelytoimintoja kysely- ja toimitoiminnoille.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Palauttaa `table` näkymän, jossa `handlers` määritettyjä funktioita käytetään toiminnon oletustoiminnan sijasta, kun toimintoa käytetään view.

Jos `table` annetaan, kaikki käsittelijäfunktiot ovat valinnaisia. Jos `table` ei anneta, tarvitaan `GetType` ja `GetRows`käsittelijäfunktiot. Jos käsittelijäfunktiota ei ole määritetty toiminnolle, toiminnon oletustoimintaa käytetään sen sijaan `table` (paitsi jos kyseessä on `GetExpression`).

Handler-funktioiden on palautettava arvo, joka vastaa semanttisesti toiminnon `table` (tai tuloksena olevaa näkymää, jos kyseessä on `GetExpression`).

Jos käsittelijäfunktio aiheuttaa virheen, toiminnon oletustoimintaa käytetään view.

`Table.View` voidaan käyttää taittamiseen tietolähteeseen – M-kyselyiden muuntamiseksi lähdekohtaisiksi kyselyiksi (kohteelle esimerkiksi T-SQL-lausekkeiden luomiseksi M-kyselyistä).

Näytä julkaistut Power Query mukautetun liittimen ohjeet, jotta saat kattavamman kuvauksen `Table.View`.


## Examples

### Example #1
Luo perusnäkymä, joka ei edellytä rivien käyttämistä tyypin tai rivimäärän määrittämiseksi.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
