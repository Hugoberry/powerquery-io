---
title: Date.AddYears
---

# Date.AddYears


## Description

Adaugă anii specificaţi la dată.


## Syntax

```powerquery
Date.AddYears(
    dateTime as any,
    numberOfYears as number
) as any
```


## Details

Returnează rezultatul <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> din adăugarea a <code>numberOfYears</code> la o valoare <code>datetime</code><code>dateTime</code>.      <ul>        <li><code>dateTime</code>: valoarea <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> la care sunt adăugați anii.</li>        <li><code>numberOfYears</code>: numărul de ani de adăugat.</li>      </ul>


## Examples

### Example #1 
Adăugaţi 4 ani la valoarea &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; sau &lt;code&gt;datetimezone&lt;/code&gt; reprezentând data 14/05/2011.
```powerquery
Date.AddYears(#date(2011, 5, 14), 4)
```

Result: 
```powerquery
#date(2015, 5, 14)
```


### Example #2 
Adăugaţi 10 ani la valoarea &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; sau &lt;code&gt;datetimezone&lt;/code&gt; reprezentând data şi ora 14/05/2011 08:15:22.
```powerquery
Date.AddYears(#datetime(2011, 5, 14, 8, 15, 22), 10)
```

Result: 
```powerquery
#datetime(2021, 5, 14, 8, 15, 22)
```




## Category
Date
