---
title: Date.Day
---

# Date.Day


## Description

Devolve o componente de dia.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

Devolve o componente de dia de um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code>.      <ul>        <li><code>dateTime</code>: um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> a partir do qual o componente de dia é extraído.</li>      </ul>


## Examples

### Example #1 
Obter o componente de dia de um valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ou &lt;code&gt;datetimezone&lt;/code&gt; que representa a data e hora 14/5/2011 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
