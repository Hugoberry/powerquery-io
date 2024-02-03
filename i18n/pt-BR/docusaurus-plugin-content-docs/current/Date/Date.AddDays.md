---
title: Date.AddDays
---

# Date.AddDays


## Description

Adiciona os dias especificados à data.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Retorna o resultado de <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> após adicionar <code>numberOfDays</code> dias ao valor <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: O valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> ao qual os dias estão sendo adicionados.</li>      <li><code>numberOfDays</code>: O número de dias a serem adicionados.</li>      </ul>


## Examples

### Example #1 
Adicione 5 dias ao valor &lt;code&gt;datetime&lt;/code&gt;, &lt;code&gt;datetimezone&lt;/code&gt; ou &lt;code&gt;date&lt;/code&gt; que representa a data 14/5/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
