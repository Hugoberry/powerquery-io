---
title: Time.StartOfHour
---

# Time.StartOfHour


## Description

Сағаттың басын қайтарады.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Details

<code>dateTime</code> арқылы көрсетілетін сағаттың басын қайтарады.    <code>dateTime</code> <code>time</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні болуы керек.


## Examples

### Example #1 
10 қазан 2011 ж., 8:10:32 үшін сағаттың басын табу.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
