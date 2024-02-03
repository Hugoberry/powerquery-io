---
title: DateTimeZone.FixedLocalNow
---

# DateTimeZone.FixedLocalNow


## Description

Palauttaa nykyisen päivämäärän ja ajan paikallisella aikavyöhykkeellä. Tämä arvo on kiinteä, eikä se muutu peräkkäisten kutsujen myötä.


## Syntax

```powerquery
DateTimeZone.FixedLocalNow(

) as datetimezone
```


## Details

Palauttaa <code>datetime</code>-arvon, joka on asetettu järjestelmän nykyiseksi päivämääräksi ja kellonajaksi. Palautettu arvo sisältää paikallista aikavyöhykettä edustavia aikavyöhyketietoja. Tämä arvo on kiinteä, eikä se muutu peräkkäisten kutsujen myötä toisin kuin DateTimeZone.LocalNow, joka saattaa palauttaa erilaisia arvoja lausekkeen suorituksen aikana.



## Category
DateTimeZone
