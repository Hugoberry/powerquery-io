---
title: Table.View
---

# Table.View


## Description

Luo tai laajentaa taulukkoa käyttäen käyttäjän määrittämiä käsittelytoimintoja kysely- ja toimitoiminnoille.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Details

 Palauttaa <code>table</code> näkymän, jossa <code>handlers</code> määritettyjä funktioita käytetään toiminnon oletustoiminnan sijasta, kun toimintoa käytetään view.<br />Jos <code>table</code> annetaan, kaikki käsittelijäfunktiot ovat valinnaisia. Jos <code>table</code> ei anneta, tarvitaan <code>GetType</code> ja <code>GetRows</code>käsittelijäfunktiot. Jos käsittelijäfunktiota ei ole määritetty toiminnolle, toiminnon oletustoimintaa käytetään sen sijaan <code>table</code> (paitsi jos kyseessä on <code>GetExpression</code>).<br />Handler-funktioiden on palautettava arvo, joka vastaa semanttisesti toiminnon <code>table</code> (tai tuloksena olevaa näkymää, jos kyseessä on <code>GetExpression</code>).<br />Jos käsittelijäfunktio aiheuttaa virheen, toiminnon oletustoimintaa käytetään view.<br /><code>Table.View</code> voidaan käyttää taittamiseen tietolähteeseen – M-kyselyiden muuntamiseksi lähdekohtaisiksi kyselyiksi (kohteelle esimerkiksi T-SQL-lausekkeiden luomiseksi M-kyselyistä).<br />Näytä julkaistut Power Query mukautetun liittimen ohjeet, jotta saat kattavamman kuvauksen <code>Table.View</code>.<br />


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
