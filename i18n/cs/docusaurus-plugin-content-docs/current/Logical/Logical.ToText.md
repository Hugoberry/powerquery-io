---
title: Logical.ToText
---

# Logical.ToText


## Description

Vrátí textovou hodnotu True nebo False na základě předané logické hodnoty.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

Vytvoří textovou hodnotu z logické hodnoty <code>logicalValue</code> – buď <code>true</code>, nebo <code>false</code>. Pokud hodnota <code>logicalValue</code> není logická, je vyvolána výjimka.


## Examples

### Example #1 
Vytvoří textovou hodnotu z logické hodnoty &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
