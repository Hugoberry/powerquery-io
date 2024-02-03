---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

Аптаның басын қайтарады.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

<code>dateTime</code> мәнін қамтитын аптаның басын қайтарады.    <code>dateTime</code> <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні болуы керек.


## Examples

### Example #1 
Сейсенбі, 2011 жылдың 11 қазаны үшін аптаның басын табу.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Аптаның басын сейсенбі, 11 қазан 2011 жыл үшін, дүйсенбіні аптаның басы ретінде пайдаланып табу.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
