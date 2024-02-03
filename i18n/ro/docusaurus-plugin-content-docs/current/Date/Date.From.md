---
title: Date.From
---

# Date.From


## Description

Creează o dată din valoarea dată.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Returnează o valoare <code>date</code> din <code>value</code> dat. De asemenea, poate fi furnizat un parametru <code>culture</code> opțional (de exemplu, „ro-RO”).Dacă <code>value</code> dat este <code>null</code>, <code>Date.From</code> returnează <code>null</code>. Dacă <code>value</code> dat este <code>date</code>, se returnează <code>value</code>. Valorile următoarelor tipuri pot fi convertite într-o valoare <code>date</code>:      <ul>        <li><code>text</code>: o valoare <code>date</code> din reprezentarea textuală. Pentru detalii, consultați <code>Date.FromText</code>.</li>        <li><code>datetime</code>: componenta dată calendaristică a <code>value</code>.</li>        <li><code>datetimezone</code>: componenta dată calendaristică a echivalentului de tip datetime local al <code>value</code>.</li>        <li><code>number</code>: componenta dată calendaristică a echivalentului de tip datetime al OLE Automation Date exprimată de <code>value</code>.</li>      </ul>Dacă <code>value</code> este de orice alt tip, se returnează o eroare.


## Examples

### Example #1 
Convertiţi &lt;code&gt;43910&lt;/code&gt; la o valoare &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Convertiţi &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; la o valoare &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
