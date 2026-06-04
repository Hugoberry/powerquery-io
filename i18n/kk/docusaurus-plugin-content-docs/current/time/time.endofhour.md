---
title: Time.EndOfHour
---

# Time.EndOfHour


Сағаттың соңын қайтарады.


## Syntax

```powerquery
Time.EndOfHour(
    dateTime as any
) as any
```


## Remarks

`dateTime` арқылы көрсетілетін сағаттың соңын қайтарады, секунд үлестерін қамтиды. Уақыт белдеуі туралы ақпарат сақталады.

-   `dateTime`: сағаттың соңы есептелетін `time`, `datetime` немесе `datetimezone` мәні.


## Examples

### Example #1
5/14/2011 05:00:00 PM үшін сағаттың соңын алу.
```powerquery
Time.EndOfHour(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 5, 14, 17, 59, 59.9999999)
```


### Example #2
5/17/2011 05:00:00 PM -7:00 үшін сағаттың соңын алу.
```powerquery
Time.EndOfHour(#datetimezone(2011, 5, 17, 5, 0, 0, -7, 0))
```

Result: 
```powerquery
#datetimezone(2011, 5, 17, 5, 59, 59.9999999, -7, 0)
```




## Category
Date
