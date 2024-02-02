---
title: DateTimeZone.FromFileTime
---

# DateTimeZone.FromFileTime


## Description

Creates a datetimezone from a 64 bits long number.


## Syntax

```powerquery
DateTimeZone.FromFileTime(
    fileTime as number
) as datetimezone
```


## Details

Creates a <code>datetimezone</code> value from the <code>fileTime</code> value and converts it to the local time zone. The filetime is a Windows file time value that represents the number of 100-nanosecond intervals that have elapsed since 12:00 midnight, January 1, 1601 A.D. (C.E.) Coordinated Universal Time (UTC).    


## Examples

### Example #1 
Convert &lt;code&gt;129876402529842245&lt;/code&gt; into a datetimezone value.
```powerquery
DateTimeZone.FromFileTime(129876402529842245)
```

Result: 
```powerquery
#datetimezone(2012, 7, 24, 14, 50, 52.9842245, -7, 0)
```




## Category
DateTimeZone
