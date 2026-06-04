---
title: Date.EndOfWeek
---

# Date.EndOfWeek


Returnează sfârșitul săptămânii.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Returnează sfârșitul săptămânii care conține `dateTime`. Această funcție preia o valoare `Day` opțională, `firstDayOfWeek`, pentru a seta prima zi a săptămânii pentru acest calcul relativ. Valoarea implicită este `Day.Sunday`.

-   `dateTime`: o valoare `date`, `datetime` sau `datetimezone` din care este calculată ultima zi a săptămânii
-   `firstDayOfWeek`: *\[opțional\]* O valoare `Day.Type` ce reprezintă prima zi a săptămânii. Valorile posibile sunt `Day.Sunday`, `Day.Monday`, `Day.Tuesday`, `Day.Wednesday`, `Day.Thursday`, `Day.Friday` și `Day.Saturday`. Valoarea implicită este `Day.Sunday`.


## Examples

### Example #1
Aflaţi sfârşitul săptămânii pentru 14/05/2011.
```powerquery
Date.EndOfWeek(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 14)
```


### Example #2
Aflaţi sfârşitul săptămânii pentru 17/05/2011 17:00:00 – 7:00, cu duminică drept prima zi a săptămânii.
```powerquery
Date.EndOfWeek(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0), Day.Sunday)
```

Result: 
```powerquery
#datetimezone(2011, 5, 21, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
