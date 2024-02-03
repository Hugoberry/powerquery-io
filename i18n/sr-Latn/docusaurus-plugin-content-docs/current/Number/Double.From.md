---
title: Double.From
---

# Double.From


## Description

Kreira dupliranu vrednost iz date vrednosti.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

Vraća dupliranu vrednost <code>number</code> od datog <code>value</code>. Ako je dati <code>value</code> <code>null</code>, <code>Double.From</code> vraća <code>null</code>. Ako je dati <code>value</code> <code>number</code> u opsegu duplirane vrednosti, vraća se <code>value</code>, a u suprotnom se vraća greška. Ako je <code>value</code> nekog drugog tipa, prvo će biti konvertovan u <code>number</code> koristeći <code>Number.FromText</code>. Opcionalno se može navesti i <code>culture</code> (na primer, „en-US“).


## Examples

### Example #1 
Dobijte dupliranu vrednost &lt;code&gt;number&lt;/code&gt; od &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
