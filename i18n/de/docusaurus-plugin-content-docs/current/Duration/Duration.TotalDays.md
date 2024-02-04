---
title: Duration.TotalDays
---

# Duration.TotalDays


## Description

Gibt die Gesamtanzahl von Tagen für diese Dauer zurück.


## Syntax

```powerquery
Duration.TotalDays(
    duration as duration
) as number
```


## Details

Gibt die Gesamtzahl der Tage zurück, die von <code>duration</code> umfasst werden.


## Examples

### Example #1 
Die Gesamtzahl der Tage suchen, die sich über einen Dauerwert erstrecken.
```powerquery
Duration.TotalDays(#duration(5, 4, 3, 2))
```

Result: 
```powerquery
5.1687731481481478
```




## Category
Duration
