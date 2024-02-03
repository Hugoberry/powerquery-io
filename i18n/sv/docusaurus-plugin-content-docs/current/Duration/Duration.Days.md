---
title: Duration.Days
---

# Duration.Days


## Description

Returnerar dagarnas del av en varaktighet.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

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
