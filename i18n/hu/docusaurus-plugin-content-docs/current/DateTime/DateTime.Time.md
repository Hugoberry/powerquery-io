---
title: DateTime.Time
---

# DateTime.Time


## Description

A megadott datetime érték idő összetevőjét adja vissza.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

A megadott <code>dateTime</code> datetime érték idő összetevőjét adja vissza.


## Examples

### Example #1 
A #datetime(2010, 12, 31, 11, 56, 02) érték időértékének megállapítása
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
