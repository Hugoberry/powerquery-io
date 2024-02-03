---
title: Double.From
---

# Double.From


## Description

Creează o valoare Double din valoarea dată.


## Syntax

```powerquery
Double.From(
    value as any,
    optional culture as text
) as number
```


## Details

Returnează o valoare <code>number</code> Double din valoarea <code>value</code> dată. Dacă valoarea <code>value</code> dată este <code>null</code>, <code>Double.From</code> returnează <code>null</code>. Dacă valoarea <code>value</code> dată este un <code>number</code> în intervalul de numere Double, se returnează <code>value</code>, altfel se returnează o eroare. Dacă valoarea <code>value</code> dată este de orice alt tip, va fi convertită într-o valoare <code>number</code> utilizând <code>Number.FromText</code>. De asemenea, poate fi furnizat un parametru <code>culture</code> opțional (de exemplu, „ro-RO”).


## Examples

### Example #1 
Obțineți valoarea &lt;code&gt;number&lt;/code&gt; Double pentru &lt;code&gt;&#34;4&#34;&lt;/code&gt;.
```powerquery
Double.From("4.5")
```

Result: 
```powerquery
4.5
```




## Category
Number.Conversion and formatting
