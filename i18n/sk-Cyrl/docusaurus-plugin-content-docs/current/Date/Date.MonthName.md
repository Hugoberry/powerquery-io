---
title: Date.MonthName
---

# Date.MonthName


## Description

Vráti komponent názvu mesiaca.


## Syntax

```powerquery
Date.MonthName(
    date as any,
    optional culture as text
) as text
```


## Details

Vráti súčasť názvu mesiaca pre zadaný <code>date</code>. Voliteľne sa tiež môže zadať <code>culture</code> (napríklad en-US).


## Examples

### Example #1 
Získajte názov mesiaca.
```powerquery
Date.MonthName(#datetime(2011, 12, 31, 5, 0, 0), "en-US")
```

Result: 
```powerquery
"December"
```




## Category
Date
