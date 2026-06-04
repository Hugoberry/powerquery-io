---
title: Value.NativeQuery
---

# Value.NativeQuery


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


## Remarks

Arvostaa `query``target` käyttämällä `parameters` määritettyjä parametreja ja `options`.

Kyselyn tulosteen määrittää `target`.

\>`target` tarjoaa kontekstin @no\_\_t\_ kuvaamalle toiminnolle 10\_ .

`query` kuvaa kyselyä, joka suoritetaan `target`. `query` ilmaistaan `target` (esimerkiksi T-SQL-lauseke).

Valinnainen `parameters`\-arvo voi sisältää joko luettelon tai tietueen, jonka avulla voidaan antaa `query`.

Valinnainen `options` tietue voi sisältää -asetukset, jotka vaikuttavat `query` arviointitoimintaan `target`. Nämä asetukset koskevat `target`.



## Category
Values
