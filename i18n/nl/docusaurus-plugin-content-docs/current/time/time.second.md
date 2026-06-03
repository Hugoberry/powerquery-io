---
title: Time.Second
---

# Time.Second


Retourneert het secondegedeelte.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Remarks

Retourneert het secondegedeelte van de opgegeven waarde `dateTime` voor `time`, `datetime` of `datetimezone`.


## Examples

### Example #1
De secondewaarde zoeken in een datum/tijdwaarde.
```powerquery
Time.Second(#datetime(2011, 12, 31, 9, 15, 36.5))
```

Result: 
```powerquery
36.5
```




## Category
Time
