---
title: Date.AddQuarters
---

# Date.AddQuarters


Adiciona os trimestres especificados à data.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Remarks

Retorna o resultado de <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> após adicionar <code>numberOfQuarters</code> trimestres ao valor <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: O valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> ao qual os trimestres estão sendo adicionados.</li>      <li><code>numberOfQuarters</code>: O número de trimestres a serem adicionados.</li>      </ul>


## Examples

### Example #1 
Adicione 1 trimestre ao valor &lt;code&gt;datetime&lt;/code&gt;, &lt;code&gt;datetimezone&lt;/code&gt; ou &lt;code&gt;date&lt;/code&gt; que representa a data 14/5/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
