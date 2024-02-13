---
title: DateTime.FromFileTime
---

# DateTime.FromFileTime


Creates a datetime from a 64 bits long number.


## Syntax

```powerquery
DateTime.FromFileTime(
    fileTime as number
) as datetime
```


## Remarks

Creates a <code>datetime</code> value from the <code>fileTime</code> value and converts it to the local time zone. The filetime is a Windows file time value that represents the number of 100-nanosecond intervals that have elapsed since 12:00 midnight, January 1, 1601 A.D. (C.E.) Coordinated Universal Time (UTC).


## Examples

### Example #1 
Convert &lt;code&gt;129876402529842245&lt;/code&gt; into a datetime value.
```powerquery
DateTime.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetime(2012, 7, 24, 14, 50, 52.9842245)
```




## Category
DateTime
