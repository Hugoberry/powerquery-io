---
title: Date.Day
---

# Date.Day


## Description

Retorna o componente de dia.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

Retorna o componente de dia de um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code>.      <ul>        <li><code>dateTime</code>: um valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> com base no qual o componente de dia é extraído.</li>      </ul>


## Examples

### Example #1 
Obtenha o componente de dia de um valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ou &lt;code&gt;datetimezone&lt;/code&gt; que representa a data e a hora 14/5/2011 05:00: 00 PM.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
