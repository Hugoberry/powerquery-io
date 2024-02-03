---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Айдағы күндер санын көрсететін 28 мен 31 арасындағы санды қайтарады.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

<code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәніндегі айдағы күндер санын қайтарады <code>dateTime</code>.  <ul>        <li><code>dateTime</code>: айдағы күндер саны қайтарылатын <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      </ul>


## Examples

### Example #1 
&lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt; арқылы көрсетілгендей желтоқсан айындағы күндер саны.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
