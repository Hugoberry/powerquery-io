---
title: Date.WeekOfYear
---

# Date.WeekOfYear


## Description

Palauttaa luvun 1–54, joka ilmaisee, millä vuoden viikolla tämä päivämäärä on.


## Syntax

```powerquery
Date.WeekOfYear(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

Palauttaa luvun 1–54, joka ilmaisee, mihin vuoden viikkoon päivämäärä <code>dateTime</code> osuu. <ul>        <li><code>dateTime</code>: <code>datetime</code>-arvo, jolle vuoden viikko selvitetään.</li>        <li><code>firstDayOfWeek</code>: Valinnainen <code>Day.Type</code>-arvo, joka ilmaisee, mitä päivää pidetään uuden viikon alkuna (esimerkiksi <code>Day.Sunday</code>). Jos tätä ei määritetä, käytetään maa-aluesidonnaista oletusarvoa.</li>      </ul>


## Examples

### Example #1 
Selvitä kuukauden alku kohteelle 10. lokakuuta 2011 klo 8.10.32.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27))
```

Result: 
```powerquery
14
```


### Example #2 
Selvitä, mikä vuoden viikko sisältää 27. maaliskuuta 2011, käyttämällä viikon alkuna maanantaita.
```powerquery
Date.WeekOfYear(#date(2011, 03, 27), Day.Monday)
```

Result: 
```powerquery
13
```




## Category
Date
