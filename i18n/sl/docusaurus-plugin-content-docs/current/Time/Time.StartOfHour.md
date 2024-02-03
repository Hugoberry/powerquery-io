---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

Vrne začetek ure.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

Vrne začetek ure, ki je prikazan kot <code>dateTime</code>.    <code>dateTime</code> mora biti vrednost <code>time</code>, <code>datetime</code> ali <code>datetimezone</code>.


## Examples

### Example #1 
Poiščite začetek ure za 10. oktober 2011, 8:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
