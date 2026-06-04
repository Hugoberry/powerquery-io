---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Palauttaa viikon lopun.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Palauttaa viikon lopun, joka sisältää `dateTime`. Tämä funktio määrittää tämän suhteellisen laskutoimituksen viikon ensimmäiseksi päiväksi valinnaisen `Day` `firstDayOfWeek`. Oletusarvo on `Day.Sunday`.

-   `dateTime`: `date` `datetime` tai `datetimezone` arvo, josta viikon viimeinen päivä lasketaan
-   `firstDayOfWeek`: *(Valinnainen)* Viikon ensimmäistä päivää edustava `Day.Type`\-arvo. Mahdollisia arvoja ovat `Day.Sunday`, `Day.Monday`, `Day.Tuesday` `Day.Wednesday`, `Day.Thursday`, `Day.Friday` ja `Day.Saturday.`. Oletusarvo on `Day.Sunday`.


## Examples

### Example #1
Hae viikon loppu kohteelle 14.5.2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Hae viikon loppu kohteelle 17.5.2011 17.00.00 -7.00, kun sunnuntai on viikon ensimmäinen päivä.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
