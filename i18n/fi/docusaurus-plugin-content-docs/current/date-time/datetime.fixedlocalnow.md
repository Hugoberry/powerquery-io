---
title: DateTime.FixedLocalNow
---

# DateTime.FixedLocalNow


Palauttaa nykyisen päivämäärän ja ajan paikallisella aikavyöhykkeellä. Tämä arvo on kiinteä, eikä se muutu peräkkäisten kutsujen myötä.


## Syntax

```powerquery
DateTime.FixedLocalNow(

) as datetime
```


## Remarks

Palauttaa `datetime`\-arvon, joka on asetettu järjestelmän nykyiseksi päivämääräksi ja kellonajaksi. Tämä arvo on kiinteä, eikä se muutu peräkkäisten kutsujen myötä toisin kuin DateTime.LocalNow, joka saattaa palauttaa erilaisia arvoja lausekkeen suorituksen aikana.



## Category
DateTime
