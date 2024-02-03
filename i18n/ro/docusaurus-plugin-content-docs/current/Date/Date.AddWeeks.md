---
title: Date.AddWeeks
---

# Date.AddWeeks


## Description

Adaugă săptămânile specificate la dată.


## Syntax

```powerquery
Date.AddWeeks(
    dateTime as any,
    numberOfWeeks as number
) as any
```


## Details

Returnează rezultatul <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> din adăugarea a <code>numberOfWeeks</code> săptămâni la valoarea <code>datetime</code><code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Valoarea <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> la care sunt adăugate săptămâni.</li>      <li><code>numberOfWeeks</code>: Numărul de săptămâni de adăugat.</li>      </ul>


## Examples

### Example #1 
Adăugaţi 2 săptămâni la valoarea &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; sau &lt;code&gt;datetimezone&lt;/code&gt; reprezentând data 14/05/2011.
```powerquery
Date.AddWeeks(#date(2011, 5, 14), 2)
```

Result: 
```powerquery
#date(2011, 5, 28)
```




## Category
Date
