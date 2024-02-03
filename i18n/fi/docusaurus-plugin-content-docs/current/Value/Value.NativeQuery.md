---
title: Value.NativeQuery
---

# Value.NativeQuery


## Description

Laskee kyselyn suhteessa tavoitteeseen.


## Syntax

```powerquery
Value.NativeQuery(
    target as any,
    query as text,
    optional parameters as any,
    optional options as record
) as any
```


## Details

Arvostaa <code>query</code><code>target</code> käyttämällä <code>parameters</code> määritettyjä parametreja ja <code>options</code>.<br />Kyselyn tulosteen määrittää <code>target</code>.<br />><code>target</code> tarjoaa kontekstin @no__t_ kuvaamalle toiminnolle 10_ .<br /><code>query</code> kuvaa kyselyä, joka suoritetaan <code>target</code>. <code>query</code> ilmaistaan <code>target</code> (esimerkiksi T-SQL-lauseke). <br /> Valinnainen <code>parameters</code>-arvo voi sisältää joko luettelon tai tietueen, jonka avulla voidaan antaa <code>query</code>.<br /> Valinnainen <code>options</code> tietue voi sisältää -asetukset, jotka vaikuttavat <code>query</code> arviointitoimintaan <code>target</code>. Nämä asetukset koskevat <code>target</code>.<br />



## Category
Values
