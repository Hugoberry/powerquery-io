---
title: Time.From
---

# Time.From


## Description

Creează o valoare time din valoarea dată.


## Syntax

```powerquery
Time.From(
    value as any,
    optional culture as text
) as time
```


## Details

Returnează o valoare <code>time</code> din <code>value</code> dat. De asemenea, poate fi furnizat un parametru <code>culture</code> opțional (de exemplu, „ro-RO”).Dacă <code>value</code> dat este <code>null</code>, <code>Time.From</code> returnează <code>null</code>. Dacă <code>value</code> dat este <code>time</code>, se returnează <code>value</code>. Valorile de următoarele tipuri pot fi convertite la o valoare <code>time</code>:      <ul>        <li><code>text</code>: o valoare <code>time</code> din reprezentarea textuală. Pentru detalii, consultați <code>Time.FromText</code>.</li>        <li><code>datetime</code>: componenta time a <code>value</code>.</li>        <li><code>datetimezone</code>: componenta time a echivalentului de tip datetime local al <code>value</code>.</li>        <li><code>number</code>: o valoare <code>time</code> echivalentă cu numărul de zile fracționare exprimate de <code>value</code>. Dacă <code>value</code> este negativ sau mai mare sau egal cu 1, se returnează o eroare.</li>      </ul>Dacă <code>value</code> este de orice alt tip, se returnează o eroare.


## Examples

### Example #1 
Convertiţi &lt;code&gt;0.7575&lt;/code&gt; la o valoare &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(0.7575)
```

Result: 
```powerquery
#time(18, 10, 48)
```


### Example #2 
Convertiţi &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; la o valoare &lt;code&gt;time&lt;/code&gt;.
```powerquery
Time.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#time(06, 45, 12)
```




## Category
Time
