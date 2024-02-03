---
title: Date.EndOfMonth
---

# Date.EndOfMonth


## Description

Vrátí konec měsíce.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Details

Vrátí konec měsíce, který obsahuje <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code>, nebo <code>datetimezone</code>, ze které se počítá konec měsíce</li>      </ul>


## Examples

### Example #1 
Získat konec měsíce pro 14. 5. 2011
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
Získat konec měsíce pro 14. 5. 2011, 17:00:00 -7:00
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
