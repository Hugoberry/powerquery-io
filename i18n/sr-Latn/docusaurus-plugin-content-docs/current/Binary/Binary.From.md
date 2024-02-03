---
title: Binary.From
---

# Binary.From


## Description

Kreira binarnu vrednost od date vrednosti


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Details

Vraća <code>Binary</code> vrednost od datog <code>value</code>. Ako dati <code>value</code> predstavlja <code>null</code>, <code>Binary.From</code> vraća <code>null</code>.  Ako je <code>value</code> <code>binary</code> vrednost, vraća se <code>value</code>. Vrednosti sledećih tipova mogu se konvertovati u <code>binary</code> vrednost:      <ul>        <li><code>text</code>: <code>Binary</code> vrednost iz tekstualne reprezentacije. Pogledajte <code>Binary.FromText</code> za detalje.</li>      </ul>Ako je <code>value</code> nekog drugog tipa, vraća se greška.


## Examples

### Example #1 
Dobijanje &lt;code&gt;binary&lt;/code&gt; vrednosti za &lt;code&gt;&#34;1011&#34;&lt;/code&gt;.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
