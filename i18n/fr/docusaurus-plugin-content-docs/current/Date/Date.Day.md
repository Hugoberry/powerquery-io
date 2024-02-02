---
title: Date.Day
---

# Date.Day


## Description

Retourne le composant de jour.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

Retourne le composant de jour d'une valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code>.      <ul>        <li><code>dateTime</code> : valeur <code>date</code>, <code>datetime</code> ou <code>datetimezone</code> à partir de laquelle le composant de jour est extrait.</li>      </ul>


## Examples

### Example #1 
Obtient le composant de jour d&#39;une valeur &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; ou &lt;code&gt;datetimezone&lt;/code&gt; représentant la date et l&#39;heure 5/14/2011 05:00:00 PM.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
