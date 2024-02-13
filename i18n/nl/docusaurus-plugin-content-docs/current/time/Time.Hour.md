---
title: Time.Hour
---

# Time.Hour


Retourneert het uurgedeelte.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Retourneert het uurgedeelte van de opgegeven waarde <code>dateTime</code> voor <code>time</code>, <code>datetime</code> of <code>datetimezone</code>.


## Examples

### Example #1 
Het uur zoeken in #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
