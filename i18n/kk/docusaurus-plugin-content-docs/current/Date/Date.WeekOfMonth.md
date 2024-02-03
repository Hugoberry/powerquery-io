---
title: Date.WeekOfMonth
---

# Date.WeekOfMonth


## Description

Осы күн айдың қай аптасына келетінін көрсететін 1 мен 6 арасындағы сандарды қайтарады.


## Syntax

```powerquery
Date.WeekOfMonth(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as number
```


## Details

<code>dateTime</code> күні айдың қай аптасына келетінін көрсететін 1 мен 6 арасындағы сандарды қайтарады. <ul>        <li><code>dateTime</code>: айдың аптасы анықталатын <code>datetime</code> мәні.</li>      </ul>


## Examples

### Example #1 
2011 жылындағы 15-ші наурыздың қай аптасына келетінін анықтау.
```powerquery
Date.WeekOfMonth(#date(2011, 03, 15))
```

Result: 
```powerquery
3
```




## Category
Date
