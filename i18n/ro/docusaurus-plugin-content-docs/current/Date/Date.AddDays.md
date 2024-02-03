---
title: Date.AddDays
---

# Date.AddDays


## Description

Adaugă zilele specificat la dată.


## Syntax

```powerquery
Date.AddDays(
    dateTime as any,
    numberOfDays as number
) as any
```


## Details

Returnează rezultatul <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> din adăugarea a <code>numberOfDays</code> zile la valoarea <code>datetime</code><code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Valoarea <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> la care sunt adăugate zile.</li>      <li><code>numberOfDays</code>: Numărul de zile de adăugat.</li>      </ul>


## Examples

### Example #1 
Adăugaţi 5 zile la valoarea &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; sau &lt;code&gt;datetimezone&lt;/code&gt; reprezentând data 14/05/2011.
```powerquery
Date.AddDays(#date(2011, 5, 14), 5)
```

Result: 
```powerquery
#date(2011, 5, 19)
```




## Category
Date
