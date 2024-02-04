---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Adiciona os trimestres especificados à data.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Devolve o resultado de <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> decorrente da adição de <code>numberOfQuarters</code> trimestres ao valor <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: o valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> ao qual estão a ser adicionados trimestres.</li>      <li><code>numberOfQuarters</code>: o número de trimestres a adicionar.</li>      </ul>


## Examples

### Example #1 
Adicionar 1 trimestre ao valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ou &lt;code&gt;datetimezone&lt;/code&gt; que representa a data 14/5/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
