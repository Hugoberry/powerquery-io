---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


## Description

Gibt eine Zahl zurück, die angibt, in welchem Quartal des Jahres das Datum liegt.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Details

Gibt eine Zahl zwischen eins und vier zurück, die angibt, in welchem Quartal des Jahres das Datum "<code>dateTime</code>" liegt. "<code>dateTime</code>" kann ein <code>date</code>-, <code>datetime</code>- oder <code>datetimezone</code>-Wert sein.


## Examples

### Example #1 
Ermittelt das Quartal des Jahres, in dem das Datum &#34;#date(2011, 12, 31)&#34; liegt.
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
