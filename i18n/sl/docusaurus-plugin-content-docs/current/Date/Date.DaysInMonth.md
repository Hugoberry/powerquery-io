---
title: Date.DaysInMonth
---

# Date.DaysInMonth


## Description

Vrne število od 28 do 31, ki kaže število dni v mesecu.


## Syntax

```powerquery
Date.DaysInMonth(
    dateTime as any
) as number
```


## Details

Vrne število dni v mesecu v vrednosti <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, <code>dateTime</code>. <ul>        <li><code>dateTime</code>: vrednost <code>date</code>, <code>datetime</code> ali <code>datetimezone</code>, za katero je vrnjeno število dni v mesecu.</li>      </ul>


## Examples

### Example #1 
Število dni v mesecu decembru, kot ga predstavlja &lt;code&gt;#date(2011, 12, 01)&gt;&lt;/code&gt;.
```powerquery
Date.DaysInMonth(#date(2011, 12, 01))
```

Result: 
```powerquery
31
```




## Category
Date
