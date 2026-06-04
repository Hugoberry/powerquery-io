---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Vrne konec tedna.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Vrne konec tedna, ki vsebuje `dateTime`. Ta funkcija vzame izbirno vrednost `Day`, `firstDayOfWeek`, in jo nastavi kot prvi dan tedna za ta relativni izračun. Privzeta vrednost je `Day.Sunday`.

-   `dateTime`: vrednost `date`, `datetime` ali `datetimezone`, na podlagi katere je izračunan zadnji dan tedna
-   `firstDayOfWeek`: *(Izbirno)* Vrednost `Day.Type`, ki predstavlja prvi dan tedna. Možne vrednosti so `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` in `Day.Saturday.`. Privzeta vrednost je `Day.Sunday`.


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
