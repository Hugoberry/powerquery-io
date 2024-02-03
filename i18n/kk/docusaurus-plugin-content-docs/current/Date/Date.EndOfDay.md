---
title: Date.EndOfDay
---

# Date.EndOfDay


## Description

Күннің соңын қайтарады.


## Syntax

```powerquery
Date.EndOfDay(
    dateTime as any
) as any
```


## Details

<code>dateTime</code> арқылы көрсетілетін күннің соңын қайтарады. Уақыт белдеуі туралы деректер сақталады.      <ul>        <li><code>dateTime</code>: күннің соңы есептелетін <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні</li>      </ul>


## Examples

### Example #1 
5/14/2011 05:00:00 PM үшін күннің соңын алу.
```powerquery
Date.EndOfDay(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 23, 59, 59.9999999)
```


### Example #2 
5/17/2011 05:00:00 PM -7:00 үшін күннің соңын алу.
```powerquery
Date.EndOfDay(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 23, 59, 59.9999999, -7, 0)
```




## Category
Date
