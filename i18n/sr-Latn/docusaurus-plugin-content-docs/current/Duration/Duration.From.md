---
title: Duration.From
---

# Duration.From


## Description

Kreira trajanje od date vrednosti.


## Syntax

```powerquery
Duration.From(
    value as any
) as duration
```


## Details

Vraća vrednost <code>duration</code> od datog <code>value</code>. Ako dati <code>value</code> predstavlja <code>null</code>, <code>Duration.From</code> vraća <code>null</code>.  Ako dati <code>value</code> predstavlja <code>duration</code>, vraća se <code>value</code>. Vrednosti sledećih tipova se mogu konvertovati u vrednost <code>duration</code>:      <ul>        <li><code>text</code>: Vrednost <code>duration</code> od tekstualnih oblika proteklog vremena (d.h:m:s). Pogledajte <code>Duration.FromText</code> za detalje.</li>        <li><code>number</code>: <code>duration</code> ekvivalent broju celih i frakcionih dana izraženih pomoću <code>value</code>.</li>      </ul>Ako je <code>value</code> nekog drugog tipa, vraća se greška.


## Examples

### Example #1 
Konvertovanje &lt;code&gt;2.525&lt;/code&gt; u vrednost &lt;code&gt;duration&lt;/code&gt;.
```powerquery
Duration.From(2.525)
```

Result: 
```powerquery
#duration(2, 12, 36, 0)
```




## Category
Duration
