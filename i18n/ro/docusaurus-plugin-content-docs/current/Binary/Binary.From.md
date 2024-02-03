---
title: Binary.From
---

# Binary.From


## Description

Creează o valoare binară din valoarea dată


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Returnează o valoare <code>binary</code> din <code>value</code> dată. Dacă <code>value</code> dată este <code>null</code>, <code>Binary.From</code> returnează <code>null</code>.  Dacă <code>value</code> dată este <code>binary</code>, se returnează <code>value</code>. Valorile următoarelor tipuri pot fi convertite la o valoare <code>binary</code>:      <ul>        <li><code>text</code>: o valoare <code>binary</code> din reprezentarea text. Pentru detalii, consultați <code>Binary.FromText</code>.</li>      </ul>Dacă <code>value</code> este de orice alt tip, se returnează o eroare.


## Examples

### Example #1 
Obţineţi valoarea &lt;code&gt;binary&lt;/code&gt; a &lt;code&gt;&#34;1011&#34;&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
