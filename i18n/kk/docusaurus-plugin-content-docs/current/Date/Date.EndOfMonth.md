---
title: Date.EndOfMonth
---

# Date.EndOfMonth


## Description

Айдың соңын қайтарады.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Details

<code>dateTime</code> мәнін қамтитын айдың соңын қайтарады.      <ul>        <li><code>dateTime</code>: айдың соңы есептелетін <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні</li>      </ul>


## Examples

### Example #1 
5/14/2011 үшін айдың соңын алу.
```powerquery
Date.EndOfMonth(#date(2011, 5, 14))
```

Result: 
```powerquery
#date(2011, 5, 31)
```


### Example #2 
5/17/2011 05:00:00 PM -7:00 үшін айдың соңын алу.
```powerquery
Date.EndOfMonth(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 31, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
