---
title: Time.Second
---

# Time.Second


## Description

Retourneert het secondegedeelte.


## Syntax

```powerquery
Time.Second(
    dateTime as any
) as number
```


## Details

Retourneert het secondegedeelte van de opgegeven waarde <code>dateTime</code> voor <code>time</code>, <code>datetime</code> of <code>datetimezone</code>.


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
