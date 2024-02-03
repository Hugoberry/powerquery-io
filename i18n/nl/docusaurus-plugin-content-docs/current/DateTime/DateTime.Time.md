---
title: DateTime.Time
---

# DateTime.Time


## Description

Retourneert het tijdgedeelte van de opgegeven datum-/tijdwaarde.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Retourneert het tijdgedeelte van de opgegeven datum-/tijdwaarde, <code>dateTime</code>.


## Examples

### Example #1 
De tijdwaarde zoeken van #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
