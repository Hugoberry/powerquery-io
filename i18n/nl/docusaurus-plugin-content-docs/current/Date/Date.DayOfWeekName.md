---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

Hiermee wordt de dag van de week geretourneerd.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

Hiermee wordt de dag van de week geretourneerd voor de opgegeven <code>date</code>. Er kan ook een optionele <code>culture</code> worden opgegeven (bijvoorbeeld: nl-NL).


## Examples

### Example #1 
Hiermee wordt de naam van de dag van de week opgehaald.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
