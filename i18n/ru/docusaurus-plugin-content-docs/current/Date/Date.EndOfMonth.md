---
title: Date.EndOfMonth
---

# Date.EndOfMonth


## Description

Возвращает конец месяца.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Details

Возвращает конец месяца, который содержит <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: значение <code>date</code>, <code>datetime</code> или <code>datetimezone</code>, на основе которого вычисляется конец месяца.</li>      </ul>


## Examples

### Example #1 
Возвращает конец месяца для 14.05.2011.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
Возвращает конец месяца для 17.05.2011 17:00:00-7:00.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
