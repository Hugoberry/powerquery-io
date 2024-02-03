---
title: Table.CombineColumnsToRecord
---

# Table.CombineColumnsToRecord


## Description

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


## Details

Yhdistää määritetyt <code>table</code> sarakkeet uuteen tietuearvoiseen sarakkeeseen, jonka nimi on <code>newColumnName</code>, jossa kullakin tietueella on niiden kenttien nimet ja arvot, jotka vastaavat yhdistettyjen sarakkeiden nimiä ja arvoja. Jos tietue on määritetty kohteelle <code>options</code>, seuraavat asetukset voidaan antaa:     <ul>     <li> <code>DisplayNameColumn</code>: tekstinä määritettynä tämä ilmaisee, että annettua sarakkeen nimeä tulee käsitellä tietueen näyttönimenä. Tämän ei tarvitse olla yksi tietueen sarakkeista. </li>     <li> <code>TypeName</code>: tekstinä määritettynä tämä antaa tulokseksi saatavan tietueen loogisen tyypin nimen, jota voidaan käyttää tietojen lataamisen aikana, jotta kuormitusympäristö voi ajaa toimintaa. </li>    </ul>    



## Category
Table.Transformation
