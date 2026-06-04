---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


Yhdistää määritetyt sarakkeet uuteen tietuearvoiseen sarakkeeseen, jossa kullakin tietueella on kenttien nimet ja arvot, jotka vastaavat yhdistettyjen sarakkeiden nimiä ja arvoja.


## Syntax

```powerquery
Table.CombineColumnsToRecord(
    table as table,
    newColumnName as text,
    sourceColumns as list,
    optional options as record
) as table
```


## Remarks

Yhdistää määritetyt `table` sarakkeet uuteen tietuearvoiseen sarakkeeseen, jonka nimi on `newColumnName`, jossa kullakin tietueella on niiden kenttien nimet ja arvot, jotka vastaavat yhdistettyjen sarakkeiden nimiä ja arvoja. Jos tietue on määritetty kohteelle `options`, seuraavat asetukset voidaan antaa:

-   `DisplayNameColumn`: tekstinä määritettynä tämä ilmaisee, että annettua sarakkeen nimeä tulee käsitellä tietueen näyttönimenä. Tämän ei tarvitse olla yksi tietueen sarakkeista.
-   `TypeName`: tekstinä määritettynä tämä antaa tulokseksi saatavan tietueen loogisen tyypin nimen, jota voidaan käyttää tietojen lataamisen aikana, jotta kuormitusympäristö voi ajaa toimintaa.



## Category
Table.Transformation
