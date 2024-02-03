---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Afegeix els trimestres especificats a la data.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Retorna el resultat <code>date</code>, <code>datetime</code> o <code>datetimezone</code> a partir d'afegir <code>numberOfQuarters</code> trimestres al valor <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: el valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> al qual s'afegeixen trimestres.</li>      <li><code>numberOfQuarters</code>: el nombre de trimestres que s'han d'afegir.</li>      </ul>


## Examples

### Example #1 
Afegeix 1 trimestre al valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; que representa la data 5/14/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
