---
title: Date.AddWeeks
---

# Date.AddWeeks


Adiciona as semanas especificadas à data.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Remarks

Devolve o resultado de <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> decorrente da adição de <code>numberOfWeeks</code> semanas ao valor <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: o valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> ao qual estão a ser adicionadas semanas.</li>      <li><code>numberOfWeeks</code>: o número de semanas a adicionar.</li>      </ul>


## Examples

### Example #1 
Adicionar 2 semanas ao valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ou &lt;code&gt;datetimezone&lt;/code&gt; que representa a data 14/5/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
