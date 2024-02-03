---
title: Date.MonthName
---

# Date.MonthName


## Description

Hiermee wordt de naam van het maandonderdeel geretourneerd.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

Hiermee wordt de naam van het maandonderdeel geretourneerd voor de opgegeven <code>date</code>. Er kan ook een optionele <code>culture</code> worden opgegeven (bijvoorbeeld: nl-NL).


## Examples

### Example #1 
Hiermee wordt de naam van de maand opgehaald.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
