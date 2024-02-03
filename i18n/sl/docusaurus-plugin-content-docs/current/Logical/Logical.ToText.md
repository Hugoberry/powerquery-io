---
title: Logical.ToText
---

# Logical.ToText


## Description

Vrne besedilo &#34;true&#34; ali &#34;false&#34;, če navedete logično vrednost.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

Ustvari besedilno vrednost iz logične vrednosti <code>logicalValue</code>, ki je <code>true</code> ali <code>false</code>. Če <code>logicalValue</code> ni logična vrednost, pride do izjeme.


## Examples

### Example #1 
Ustvarite besedilno vrednost iz logične vrednosti &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
