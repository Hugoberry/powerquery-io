---
title: Date.From
---

# Date.From


## Description

Kreira datum od date vrednosti.


## Syntax

```powerquery
Date.From(
    value as any,
    optional culture as text
) as date
```


## Details

Vraća vrednost <code>date</code> od datog <code>value</code>. Opcionalno se može navesti i <code>culture</code> (na primer, „en-US“).Ako dati <code>value</code> predstavlјa <code>null</code>, <code>Date.From</code> vraća <code>null</code>. Ako dati <code>value</code> predstavlјa <code>date</code>, vraća se <code>value</code>. Vrednosti sledećih tipova se mogu konvertovati u vrednost <code>date</code>:      <ul>        <li><code>text</code>: Vrednost <code>date</code> od tekstualne reprezentacije. Pogledajte <code>Date.FromText</code> za detalјe.</li>>        <li><code>datetime</code>: Komponenta datuma za <code>value</code>.</li>        <li><code>datetimezone</code>: Komponenta datuma lokalnog ekvivalenta datuma i vremena za <code>value</code>.</li>        <li><code>number</code>: Komponenta datuma ekvivalenta datuma i vremena za datum OLE automatizacije izražen pomoću <code>value</code>.</li>      </ul>Ako je <code>value</code> nekog drugog tipa, vraća se greška.


## Examples

### Example #1 
Konvertovanje &lt;code&gt;43910&lt;/code&gt; u vrednost &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(43910)
```

Result: 
```powerquery
#date(2020, 3, 20)
```


### Example #2 
Konvertovanje &lt;code&gt;#datetime(1899, 12, 30, 06, 45, 12)&lt;/code&gt; u vrednost &lt;code&gt;date&lt;/code&gt;.
```powerquery
Date.From(#datetime(1899, 12, 30, 06, 45, 12))
```

Result: 
```powerquery
#date(1899, 12, 30)
```




## Category
Date
