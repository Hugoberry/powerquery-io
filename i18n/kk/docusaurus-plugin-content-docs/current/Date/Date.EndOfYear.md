---
title: Date.EndOfYear
---

# Date.EndOfYear


## Description

Жылдың соңын қайтарады.


## Syntax

```powerquery
Date.EndOfYear(
    dateTime as any
) as any
```


## Details

<code>dateTime</code> мәнін қамтитын жылдың соңын қайтарады, секунд үлестерін қамтиды. Уақыт белдеуі туралы ақпарат сақталады.      <ul>        <li><code>dateTime</code>: жылдың соңы есептелетін <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      </ul>


## Examples

### Example #1 
5/14/2011 05:00:00 PM үшін жылдың соңын алу.
```powerquery
Date.EndOfYear(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```


### Example #2 
5/17/2011 05:00:00 PM -7:00 үшін сағаттың соңын алу.
```powerquery
Date.EndOfYear(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 12, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
