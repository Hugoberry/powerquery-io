---
title: Logical.From
---

# Logical.From


## Description

Kreira logičku vrednost od date vrednosti.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Details

Vraća vrednost <code>logical</code> od datog <code>value</code>. Ako dati <code>value</code> predstavlja <code>null</code>, <code>Logical.From</code> vraća <code>null</code>.  Ako dati <code>value</code> predstavlja <code>logical</code>, vraća se <code>value</code>. Vrednosti sledećih tipova se mogu konvertovati u vrednost <code>logical</code>:      <ul>        <li><code>text</code>: Vrednost <code>logical</code> od tekstualne vrednosti, bilo <code>"true"</code> ili <code>"false"</code>. Pogledajte <code>Logical.FromText</code> za detalje.</li>        <li><code>number</code>: <code>false</code> ako je <code>value</code> jednako <code>0</code>, a <code>true</code> ako nije.</li>      </ul>Ako je <code>value</code> nekog drugog tipa, vraća se greška.


## Examples

### Example #1 
Konvertovanje &lt;code&gt;2&lt;/code&gt; u &lt;code&gt;logical&lt;/code&gt; vrednost.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
