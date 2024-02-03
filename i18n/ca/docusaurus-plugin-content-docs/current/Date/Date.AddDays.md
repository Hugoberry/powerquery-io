---
title: Date.AddDays
---

# Date.AddDays


## Description

Afegeix els dies especificats a la data.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Retorna el resultat <code>date</code>, <code>datetime</code> o <code>datetimezone</code> a partir d'afegir <code>numberOfDays</code> dies al valor <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: el valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> al qual s'afegeixen dies.</li>      <li><code>numberOfDays</code>: el nombre de dies que s'han d'afegir.</li>      </ul>


## Examples

### Example #1 
Afegeix 5 dies al valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; que representa la data 5/14/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
