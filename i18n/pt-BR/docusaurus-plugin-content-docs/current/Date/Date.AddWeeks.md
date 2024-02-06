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

Retorna o resultado de <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> após adicionar <code>numberOfWeeks</code> semanas ao valor <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: O valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> ao qual as semanas estão sendo adicionadas.</li>      <li><code>numberOfWeeks</code>: O número de semanas a serem adicionadas.</li>      </ul>


## Examples

### Example #1 
Adicione 2 semanas ao valor &lt;code&gt;datetime&lt;/code&gt;, &lt;code&gt;datetimezone&lt;/code&gt; ou &lt;code&gt;date&lt;/code&gt; que representa a data 14/5/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
