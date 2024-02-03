---
title: Single.From
---

# Single.From


## Description

Kreira jedinstvenu vrednost iz date vrednosti.


## Syntax

```powerquery
Single.From(
    value as any,
    optional culture as text
) as number
```


## Details

Vraća pojedinačnu vrednost <code>number</code> od datog <code>value</code>. Ako je dati <code>value</code> <code>null</code>, <code>Single.From</code> vraća <code>null</code>. Ako je dati <code>value</code> <code>number</code> u opsegu pojedinačne vrednosti, vraća se <code>value</code>, a u suprotnom se vraća greška. Ako je <code>value</code> nekog drugog tipa, prvo će biti konvertovan u <code>number</code> koristeći <code>Number.FromText</code>. Opcionalno se može navesti i <code>culture</code> (na primer, „en-US“).


## Examples

### Example #1 
Dobijte jedinstvenu &lt;code&gt;number&lt;/code&gt; vrednost od &lt;code&gt;&#34;1.5&#34;&lt;/code&gt;.
```powerquery
Single.From("1.5")
```

Result: 
```powerquery
1.5
```




## Category
Number.Conversion and formatting
