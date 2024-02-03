---
title: Date.DayOfWeekName
---

# Date.DayOfWeekName


## Description

Vrne ime dneva v tednu.


## Syntax

```powerquery
Date.DayOfWeekName(
    date as any,
    optional culture as text
) as text
```


## Details

Vrne dan imena tedna za navedeno vrednost <code>date</code>. Navedete lahko tudi izbirni parameter <code>culture</code> (na primer "sl-SI").


## Examples

### Example #1 
Pridobite ime dneva v tednu.
```powerquery
Date.DayOfWeekName(#date(2011, 12, 31), "en-US")
```

Result: 
```powerquery
"Saturday"
```




## Category
Date
