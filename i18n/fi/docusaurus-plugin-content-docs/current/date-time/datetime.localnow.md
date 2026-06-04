---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Palauttaa nykyisen päivämäärän ja ajan paikallisella aikavyöhykkeellä.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Palauttaa `datetime-` arvon, joka on asetettu system.  
  
Tämän funktion palauttama arvo riippuu siitä, suoritatko kyselyä paikallisessa tietokoneessa vai online-tilassa. Jos esimerkiksi suoritat kyselyn järjestelmässä, joka sijaitsee Yhdysvaltojen Tyynenmeren aikavyöhykkeellä, Power Query Desktop palauttaa paikallisessa koneessasi asetetun päivämäärän ja kellonajan. Jos kuitenkin suoritat kyselyn pilvipalvelussa, Power Query Online palauttaa UTC-ajan, koska se lukee pilvivirtuaalikoneissa asetettua aikaa, joka on kaikki asetettu UTC:ksi.


## Examples

### Example #1
Käynnistä tämä funktio paikallisessa tietokoneessa, jossa on käytössä Power Query Desktop.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Käynnistä tämä funktio pilvipalvelussa, jossa Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
