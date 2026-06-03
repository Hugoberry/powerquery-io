---
title: DateTime.LocalNow
---

# DateTime.LocalNow


Returns the current date and time in the local timezone.


## Syntax

```powerquery
DateTime.LocalNow(

) as datetime
```


## Remarks

Returns a `datetime` value set to the current date and time on the system.  
  
The value returned by this function depends on whether you're running your query on a local machine or online. For example, if you run your query on a system located in the U.S. Pacific Time zone, Power Query Desktop returns the date and time set on your local machine. However, if you run your query on the cloud, Power Query Online returns UTC time because it's reading the time set on the cloud virtual machines, which are all set to UTC.


## Examples

### Example #1
Invoke this function on a local machine running Power Query Desktop.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current local date and time.
```


### Example #2
Invoke this function on the cloud running Power Query Online.
```powerquery
DateTime.LocalNow()
```

Result: 
```powerquery
The current online (UTC) date and time.
```




## Category
DateTime
