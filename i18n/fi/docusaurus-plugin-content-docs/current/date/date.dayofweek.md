---
title: Date.DayOfWeek
---

# Date.DayOfWeek


Palauttaa luvun (0–6), joka ilmaisee annetun arvon viikonpäivän.


## Syntax

```powerquery
Date.DayOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as Day.Type
```


## Remarks

Palauttaa luvun (0–6), joka ilmaisee annetun arvon `dateTime` viikonpäivän.

-   `dateTime`: `date`\-, `datetime`\- tai `datetimezone`\-arvo.
-   `firstDayOfWeek`: `Day`\-arvo ilmaisee, mitä päivää tulee pitää viikon ensimmäisenä päivänä. Sallitut arvot ovat Day.Sunday, Day.Monday, Day.Tuesday, Day.Wednesday, Day.Thursday, Day.Friday ja Day.Saturday. Jos tätä ei määritetä, käytetään maa-asetuksesta riippuvaista oletusarvoa.


## Examples

### Example #1
Nouda viikonpäivä muodossa maanantai, 21. helmikuuta 2011 käsitellen sunnuntaita viikon ensimmäisenä päivänä.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Sunday)
```

Result: 
```powerquery
1
```


### Example #2
Nouda viikonpäivä muodossa maanantai, 21. helmikuuta 2011 käsitellen maanantaita viikon ensimmäisenä päivänä.
```powerquery
Date.DayOfWeek(#date(2011, 02, 21), Day.Monday)
```

Result: 
```powerquery
0
```




## Category
Date
