---
title: Duration.Days
---

# Duration.Days


## Description

Gibt den Tageanteil einer Dauer zurück.


## Syntax

```powerquery
Duration.Days(
    duration as duration
) as number
```


## Details

Gibt den Tageanteil von <code>duration</code> zurück.


## Examples

### Example #1 
Extrahieren Sie die Anzahl der Tage zwischen zwei Datumsangaben.
```powerquery
Duration.Days(#date(2022, 3, 4) - #date(2022, 2, 25))
```

Result: 
```powerquery
7
```




## Category
Duration
