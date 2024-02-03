---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

Zwraca początek godziny.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

Zwraca początek godziny reprezentowany przez <code>dateTime</code>.    <code>dateTime</code> musi być wartością typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>.


## Examples

### Example #1 
Znajdź początek godziny dla daty 10 października 2011 r. 8:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
