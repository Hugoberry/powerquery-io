---
title: Logical.ToText
---

# Logical.ToText


## Description

Vraća tekstualnu vrednost „true“ ili „false“ na osnovu logičke vrednosti.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

Kreira tekstualnu vrednost od logičke vrednosti <code>logicalValue</code>, bilo <code>true</code> ili <code>false</code>. Ako <code>logicalValue</code> nije logička vrednost, vraća se izuzetak.


## Examples

### Example #1 
Kreiranje tekstualne vrednosti od logičke &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
