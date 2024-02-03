---
title: DateTime.From
---

# DateTime.From


## Description

Creează o valoare datetime din valoarea dată.


## Syntax

```powerquery
DateTime.From(
    value as any,
    optional culture as text
) as datetime
```


## Details

Returnează o valoare <code>datetime</code> din <code>value</code> dat. De asemenea, poate fi furnizat un parametru <code>culture</code> opțional (de exemplu, „ro-RO”).Dacă <code>value</code> dat este <code>null</code>, <code>DateTime.From</code> returnează <code>null</code>. Dacă <code>value</code> dat este <code>datetime</code>, se returnează <code>value</code>. Valorile următoarelor tipuri pot fi convertite într-o valoare <code>datetime</code>:      <ul>        <li><code>text</code>: o valoare <code>datetime</code> din reprezentarea textuală. Pentru detalii, consultați <code>DateTime.FromText</code>.</li>        <li><code>date</code>: o valoare <code>datetime</code> cu <code>value</code> drept componentă date și <code>12:00:00 AM</code> drept componentă time.</li>        <li><code>datetimezone</code>: echivalentul <code>datetime</code> local al <code>value</code>.</li>        <li><code>time</code>: o valoare <code>datetime</code> cu echivalentul de tip dată calendaristică al OLE Automation Date cu <code>0</code> pentru componenta date și <code>value</code> pentru componenta time.</li>        <li><code>number</code>: un echivalent de tip <code>datetime</code> al OLE Automation Date exprimată de <code>value</code>. </li>      </ul>Dacă <code>value</code> este de orice alt tip, se returnează o eroare.


## Examples

### Example #1 
Convertiţi &lt;code&gt;#time(06, 45, 12)&lt;/code&gt; la o valoare &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#time(06, 45, 12))
```

Result: 
```powerquery
#datetime(1899, 12, 30, 06, 45, 12)
```


### Example #2 
Convertiţi &lt;code&gt;#date(1975, 4, 4)&lt;/code&gt; la o valoare &lt;code&gt;datetime&lt;/code&gt;.
```powerquery
DateTime.From(#date(1975, 4, 4))
```

Result: 
```powerquery
#datetime(1975, 4, 4, 0, 0, 0)
```




## Category
DateTime
