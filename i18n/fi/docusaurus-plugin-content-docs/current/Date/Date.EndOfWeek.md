---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

Palauttaa viikon lopun.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Palauttaa viikon lopun, joka sisältää <code>dateTime</code>. Tämä funktio määrittää tämän suhteellisen laskutoimituksen viikon ensimmäiseksi päiväksi valinnaisen <code>Day</code> <code>firstDayOfWeek</code>. Oletusarvo on <code>Day.Sunday</code>. <ul> <li><code>dateTime</code>: <code>päivämäärä</code> <code>datetime</code> tai <code>datetimezone</code> arvo, josta viikon viimeinen päivä lasketaan</li> <li><code>firstDayOfWeek</code>:  <i>[Valinnainen]</i> viikon ensimmäistä päivää edustava <code>Day.Type</code>-arvo. Mahdollisia arvoja ovat <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code> <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> ja <code>Day.Saturday.</code> . Oletusarvo on <code>Day.Sunday</code>.</li> </ul>


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
