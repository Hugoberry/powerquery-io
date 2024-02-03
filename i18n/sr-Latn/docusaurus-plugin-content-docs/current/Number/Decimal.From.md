---
title: Decimal.From
---

# Decimal.From


## Description

Kreira decimalu iz date vrednosti.


## Syntax

```powerquery
Decimal.From(
    value as any,
    optional culture as text
) as number
```


## Details

Vraća decimalnu vrednost <code>number</code> od datog <code>value</code>. Ako je dati <code>value</code> <code>null</code>, <code>Decimal.From</code> vraća <code>null</code>. Ako je dati <code>value</code> <code>number</code> u opsegu decimale, vraća se <code>value</code>, a u suprotnom se vraća greška. Ako je <code>value</code> nekog drugog tipa, prvo će biti konvertovan u <code>number</code> koristeći <code>Number.FromText</code>. Opcionalno se može navesti i <code>culture</code> (na primer, „en-US“).


## Examples

### Example #1 
Dobijte decimalnu &lt;code&gt;number&lt;/code&gt; vrednost od &lt;code&gt;&#34;4.5&#34;&lt;/code&gt;.
```powerquery
Decimal.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
