---
title: Logical.ToText
---

# Logical.ToText


## Description

Vráti textovú hodnotu True alebo False s danou logickou hodnotou.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

Vytvorí textovú hodnotu z logickej hodnoty <code>logicalValue</code>, a to buď <code>true</code>, alebo <code>false</code>. Ak hodnota <code>logicalValue</code> nie je logická hodnota, dôjde k výnimke.


## Examples

### Example #1 
Vytvorte textovú hodnotu z logickej hodnoty &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
