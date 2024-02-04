---
title: Date.AddMonths
---

# Date.AddMonths


## Description

Adiciona os meses especificados à data.


## Syntax

```powerquery
Date.AddMonths(
    dateTime as any,
    numberOfMonths as number
) as any
```


## Details

Devolve o resultado de <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> decorrente da adição de <code>numberOfMonths</code> meses ao valor <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: o valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> ao qual estão a ser adicionados meses.</li>        <li><code>numberOfMonths</code>: o número de meses a adicionar.</li>      </ul>


## Examples

### Example #1 
Adicionar 5 meses ao valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ou &lt;code&gt;datetimezone&lt;/code&gt; que representa a data 14/5/2011.
```powerquery
Date.AddMonths(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 10, 14)
```


### Example #2 
Adicionar 18 meses ao valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ou &lt;code&gt;datetimezone&lt;/code&gt; que representa a data e hora 14/5/2011 08:15:22.
```powerquery
Date.AddMonths(#datetime(2011, 5, 14, 8, 15, 22), 18)
```

Result: 
```powerquery
#datetime(2012, 11, 14, 8, 15, 22)
```




## Category
Date
