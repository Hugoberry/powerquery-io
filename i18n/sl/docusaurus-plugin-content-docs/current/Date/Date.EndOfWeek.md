---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

Vrne konec tedna.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Vrne konec tedna, ki vsebuje <code>dateTime</code>.    Ta funkcija vzame izbirno vrednost <code>Day</code>, <code>firstDayOfWeek</code>, in jo nastavi kot prvi dan tedna za ta relativni izračun. Privzeta vrednost je <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: vrednost <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, na podlagi katere je izračunan zadnji dan tedna</li>        <li><code>firstDayOfWeek</code>: <i>[izbirno]</i> vrednost <code>Day.Type</code>, ki predstavlja prvi dan tedna. Možne vrednosti so <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> in <code>Day.Saturday.</code> . Privzeta vrednost je <code>Day.Sunday</code>.</li>      </ul>


## Examples

### Example #1 
Poiščite konec tedna za 5/14/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2 
Poiščite konec tedna za 5/17/2011 05:00:00 PM -7:00, pri čemer je prvi dan tedna nedelja.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
