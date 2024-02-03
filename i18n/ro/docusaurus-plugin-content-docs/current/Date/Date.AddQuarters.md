---
title: Date.AddQuarters
---

# Date.AddQuarters


## Description

Adaugă trimestrele specificate la dată.


## Syntax

```powerquery
Date.AddQuarters(
    dateTime as any,
    numberOfQuarters as number
) as any
```


## Details

Returnează rezultatul <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> din adăugarea a <code>numberOfQuarters</code> trimestre la valoarea <code>datetime</code><code>dateTime</code>.      <ul>      <li><code>dateTime</code>: Valoarea <code>date</code>, <code>datetime</code> sau <code>datetimezone</code> la care sunt adăugate trimestre.</li>      <li><code>numberOfQuarters</code>: Numărul de trimestre de adăugat.</li>      </ul>


## Examples

### Example #1 
Adăugaţi 1 trimestru la valoarea &lt;code&gt;date&lt;/code&gt;, &lt;code&gt;datetime&lt;/code&gt; sau &lt;code&gt;datetimezone&lt;/code&gt; reprezentând data 14/05/2011.
```powerquery
Date.AddQuarters(#date(2011, 5, 14), 1)
```

Result: 
```powerquery
#date(2011, 8, 14)
```




## Category
Date
