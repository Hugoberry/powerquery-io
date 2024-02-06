---
title: Date.AddYears
---

# Date.AddYears


Adiciona os anos especificados à data.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Remarks

Retorna o resultado de <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> após adicionar <code>numberOfYears</code> a um valor <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: o valor <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> ao qual os anos são adicionados.</li>        <li><code>numberOfYears</code>: o número de anos a serem adicionados.</li>      </ul>


## Examples

### Example #1 
Adicione 4 anos ao valor &lt;code&gt;datetime&lt;/code&gt;, &lt;code&gt;datetimezone&lt;/code&gt; ou &lt;code&gt;date&lt;/code&gt; que representa a data 14/5/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Adicione 10 anos ao valor &lt;code&gt;datetime&lt;/code&gt;, &lt;code&gt;datetimezone&lt;/code&gt; ou &lt;code&gt;date&lt;/code&gt; que representa a data e a hora 14/5/2011 08:15:22 AM.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
