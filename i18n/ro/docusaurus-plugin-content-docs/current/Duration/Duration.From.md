---
title: Duration.From
---

# Duration.From


## Description

Creează o durată din valoarea dată.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Returnează o valoare <code>duration</code> din <code>value</code> dat. Dacă <code>value</code> dat este <code>null</code>, <code>Duration.From</code> returnează <code>null</code>.  Dacă <code>value</code> dat este <code>duration</code>, se returnează <code>value</code>. Valorile de următoarele tipuri pot fi convertite la o valoare <code>duration</code>:      <ul>        <li><code>text</code>: o valoare <code>duration</code> din formele textuale ale timpului scurs (d.h:m:s). Pentru detalii, consultați <code>Duration.FromText</code>.</li>        <li><code>number</code>: un echivalent de tip <code>duration</code> pentru numărul zilelor întregi sau fracționare exprimate de <code>value</code>.</li>      </ul>Dacă <code>value</code> este de orice alt tip, se returnează o eroare.


## Examples

### Example #1 
Convertiţi &lt;code&gt;2.525&lt;/code&gt; într-o valoare &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
