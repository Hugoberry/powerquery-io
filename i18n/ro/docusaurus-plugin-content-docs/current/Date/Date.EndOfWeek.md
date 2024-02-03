---
title: Date.EndOfWeek
---

# Date.EndOfWeek


## Description

Returnează sfârșitul săptămânii.


## Syntax

```powerquery
Date.EndOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Returnează sfârșitul săptămânii care conține <code>dateTime</code>.    Această funcție preia o valoare <code>Day</code> opțională, <code>firstDayOfWeek</code>, pentru a seta prima zi a săptămânii pentru acest calcul relativ. Valoarea implicită este <code>Day.Sunday</code>.      <ul>        <li><code>dateTime</code>: o valoare <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> din care este calculată ultima zi a săptămânii</li>        <li><code>firstDayOfWeek</code>: <i>[opțional]</i> o valoare <code>Day.Type</code> ce reprezintă prima zi a săptămânii. Valorile posibile sunt <code>Day.Sunday</code>, <code>Day.Monday</code>, <code>Day.Tuesday</code>, <code>Day.Wednesday</code>, <code>Day.Thursday</code>, <code>Day.Friday</code> și <code>Day.Saturday.</code>. Valoarea implicită este <code>Day.Sunday</code>.</li>      </ul>


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
