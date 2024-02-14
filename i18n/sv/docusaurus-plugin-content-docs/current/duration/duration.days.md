---
title: Duration.Days
---

# Duration.Days


Returnerar dagarnas del av en varaktighet.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Remarks

Returnerar dagarnas del av <code>duration</code>.


## Examples

### Example #1 
Extrahera antalet dagar mellan två datum.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
