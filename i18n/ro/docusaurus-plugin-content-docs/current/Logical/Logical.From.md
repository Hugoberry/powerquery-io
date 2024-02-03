---
title: Logical.From
---

# Logical.From


## Description

Creează o valoare logical din valoarea dată.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Returnează o valoare <code>logical</code> din <code>value</code> dat. Dacă <code>value</code> dat este <code>null</code>, <code>Logical.From</code> returnează <code>null</code>.  Dacă <code>value</code> dat este <code>logical</code>, se returnează <code>value</code>. Valorile următoarelor tipuri pot fi convertite la o valoare <code>logical</code>:      <ul>        <li><code>text</code>: o valoare <code>logical</code> din valoarea text, fie <code>„true”</code>, fie <code>„false”</code>. Pentru detalii, consultați <code>Logical.FromText</code>.</li>        <li><code>number</code>: <code>false</code> dacă <code>value</code> este egal cu <code>0</code>; în caz contrar, <code>true</code>.</li>      </ul>Dacă <code>value</code> este de orice alt tip, se returnează o eroare.


## Examples

### Example #1 
Convertiţi &lt;code&gt;2&lt;/code&gt; la o valoare &lt;code&gt;logical&lt;/code&gt;.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
