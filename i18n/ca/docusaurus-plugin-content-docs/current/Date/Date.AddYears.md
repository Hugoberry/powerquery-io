---
title: Date.AddYears
---

# Date.AddYears


## Description

Afegeix els anys especificats a la data.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

Retorna el resultat <code>date</code>, <code>datetime</code> o <code>datetimezone</code> a partir d'afegir <code>numberOfYears</code> a un valor <code>datetime</code> <code>dateTime</code>.      <ul>        <li><code>dateTime</code>: valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> al qual s'afegeixen anys.</li>        <li><code>numberOfYears</code>: nombre d'anys que s'han d'afegir.</li>      </ul>


## Examples

### Example #1 
Afegeix 4 anys al valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; que representa la data 5/14/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Afegeix 10 anys al valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; que representa la data i l&#39;hora de 5/14/2011 08:15:22 am.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
