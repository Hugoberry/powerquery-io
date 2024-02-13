---
title: Date.AddDays
---

# Date.AddDays


Adiciona os dias especificados à data.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Remarks

Devolve o resultado de <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> decorrente da adição de <code>numberOfDays</code> dias ao valor <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: o valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> ao qual estão a ser adicionados dias.</li>      <li><code>numberOfDays</code>: o número de dias a adicionar.</li>      </ul>


## Examples

### Example #1 
Adicionar 5 dias ao valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ou &lt;code&gt;datetimezone&lt;/code&gt; que representa a data 14/5/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
