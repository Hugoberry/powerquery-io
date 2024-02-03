---
title: Date.Day
---

# Date.Day


## Description

Vráti komponent dňa.


## Syntax

```powerquery
Date.Day(
    dateTime as any
) as number
```


## Details

Vráti komponent dňa z hodnoty <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>.      <ul>        <li><code>dateTime</code>: Hodnota <code>date</code>, <code>datetime</code> alebo <code>datetimezone</code>, z ktorej sa extrahuje komponent dňa.</li>      </ul>


## Examples

### Example #1 
Získajte komponent dňa hodnoty &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; alebo &lt;code&gt;datetimezone&lt;/code&gt; predstavujúcej dátum 14. 5. 2011 a čas 17:00:00.
```powerquery
Date.Day(#datetime(2011, 5, 14, 17, 0, 0))
```

Result: 
```powerquery
14
```




## Category
Date
