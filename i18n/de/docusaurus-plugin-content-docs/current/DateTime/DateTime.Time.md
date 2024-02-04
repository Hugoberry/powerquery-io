---
title: DateTime.Time
---

# DateTime.Time


## Description

Gibt den Uhrzeitanteil des angegebenen datetime-Werts zurück.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Gibt den Uhrzeitanteil des angegebenen datetime-Werts (<code>dateTime</code>) zurück.


## Examples

### Example #1 
Ermittelt den Uhrzeitwert von &#34;#datetime(2010, 12, 31, 11, 56, 02)&#34;.
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
