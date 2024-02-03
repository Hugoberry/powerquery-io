---
title: DateTime.Time
---

# DateTime.Time


## Description

Vráti časť času z danej hodnoty dátumu a času.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Vráti časť času z danej hodnoty dátumu a času <code>dateTime</code>.


## Examples

### Example #1 
Vyhľadajte hodnotu času hodnoty #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
