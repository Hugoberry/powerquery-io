---
title: Percentage.From
---

# Percentage.From


## Description

Returnează o valoare procentuală din valoarea dată.


## Syntax

```powerquery
Percentage.From(
    value as any,
    optional culture as text
) as number
```


## Details

Returnează o valoare<code>percentage</code> dintr-o valoare <code>value</code> dată. Dacă <code>value</code> dată este <code>null</code>, <code>Percentage.From</code> returnează <code>null</code>. Dacă <code>value</code> dată este <code>text</code> cu un simbol la un procent de sfârșit, atunci va fi returnat numărul zecimal convertit. În caz contrar, convertiți la o valoare <code>number</code> utilizând <code>Number.From</code>. De asemenea, poate fi furnizat un parametru <code>culture</code> opțional (de exemplu, „ro-RO”).


## Examples

### Example #1 
Obțineți valoarea &lt;code&gt;percentage&lt;/code&gt; a &lt;code&gt;&#34;12.3%&#34;&lt;/code&gt;.
```powerquery
Percentage.From("12.3%")
```

Result: 
```powerquery
0.123
```




## Category
Number.Conversion and formatting
