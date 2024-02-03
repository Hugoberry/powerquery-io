---
title: Percentage.From
---

# Percentage.From


## Description

Vrátí procentní hodnotu ze zadané hodnoty.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

Vrátí hodnotu typu <code>percentage</code> ze zadaného parametru <code>value</code>. Pokud jako <code>value</code> zadáte <code>null</code>, <code>Percentage.From</code> vrátí <code>null</code>. Pokud jako <code>value</code> zadáte <code>text</code> se symbolem procent na konci, vrátí se převedené desítkové číslo. Jinak se hodnota převede pomocí <code>Number.From</code> na typ <code>number</code>. Volitelně je možné zadat i <code>culture</code> (např. en-US).


## Examples

### Example #1 
Vrátí hodnotu typu &lt;code&gt;percentage&lt;/code&gt; z &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
