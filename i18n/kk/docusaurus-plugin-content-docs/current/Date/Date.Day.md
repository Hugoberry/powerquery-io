---
title: Date.Day
---

# Date.Day


## Description

Күн құрамдасын қайтарады.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

<code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәнінің күн компонентін қайтарады.      <ul>        <li><code>dateTime</code>: күн компоненті шығарып алынатын <code>date</code>, <code>datetime</code> немесе <code>datetimezone</code> мәні.</li>      </ul>


## Examples

### Example #1 
5/14/2011 05:00:00 PM күнін және уақытын білдіретін &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; немесе &lt;code&gt;datetimezone&lt;/code&gt; мәнінің күн құрамдасын алу.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
