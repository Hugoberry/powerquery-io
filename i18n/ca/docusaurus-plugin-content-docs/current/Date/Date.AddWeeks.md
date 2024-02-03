---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

Afegeix les setmanes especificades a la data.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

Retorna el resultat <code>date</code>, <code>datetime</code> o <code>datetimezone</code> a partir d'afegir <code>numberOfWeeks</code> setmanes al valor <code>datetime</code> <code>dateTime</code>.      <ul>      <li><code>dateTime</code>: el valor <code>date</code>, <code>datetime</code> o <code>datetimezone</code> al qual s'afegeixen setmanes.</li>      <li><code>numberOfWeeks</code>: el nombre de setmanes que s'han d'afegir.</li>      </ul>


## Examples

### Example #1 
Afegeix 2 setmanes al valor &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; o &lt;code&gt;datetimezone&lt;/code&gt; que representa la data 5/14/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
