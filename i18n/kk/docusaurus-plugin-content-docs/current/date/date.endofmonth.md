---
title: Date.EndOfMonth
---

# Date.EndOfMonth


Айдың соңын қайтарады.


## Syntax

```powerquery
Date.EndOfMonth(
    dateTime as any
) as any
```


## Remarks

`dateTime` мәнін қамтитын айдың соңын қайтарады.

-   `dateTime`: айдың соңы есептелетін `date`, `datetime` немесе `datetimezone` мәні.


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
