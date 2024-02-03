---
title: Date.Day
---

# Date.Day


## Description

Pateikiamas dienos komponentas.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

Pateikiamas <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmės dienos komponentas.      <ul>        <li><code>dateTime</code>: <code>date</code>, <code>datetime</code> arba <code>datetimezone</code> reikšmė, kurią naudojant išskleidžiamas dienos komponentas.</li>      </ul>


## Examples

### Example #1 
Gauti &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; arba &lt;code&gt;datetimezone&lt;/code&gt; reikšmės dienos komponentą, nurodantį datą ir laiką: 2011 05 14 05:00:00 po pietų.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
