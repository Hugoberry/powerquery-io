---
title: Date.Day
---

# Date.Day


## Description

Vrátí komponentu dne.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

Vrátí komponentu dne předané hodnoty <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>.      <ul>        <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> nebo <code>datetimezone</code>, ze které se extrahuje komponenta dne.</li>      </ul>


## Examples

### Example #1 
Získat komponentu dne z hodnoty &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; nebo &lt;code&gt;datetimezone&lt;/code&gt; představující datum 14. 5. 2011, čas 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
