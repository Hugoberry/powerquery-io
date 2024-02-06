---
title: Time.Minute
---

# Time.Minute


Retourneert het minuutgedeelte.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Retourneert het minuutgedeelte van de opgegeven waarde <code>dateTime</code> voor <code>time</code>, <code>datetime</code> of <code>datetimezone</code>.


## Examples

### Example #1 
De minuut zoeken in #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
