---
title: Combiner.CombineTextByPositions
---

# Combiner.CombineTextByPositions


## Description

Returnează o funcție ce combină o listă de texte utilizând pozițiile de rezultat specificate.


## Syntax

```powerquery
Combiner.CombineTextByPositions(
    positions as list,
    optional template as text
) as function
```


## Details

Returnează o funcție ce combină o listă de valori text într-o singură valoare text utilizând pozițiile de rezultat specificate.


## Examples

### Example #1 
Combinați o listă de valori text plasându-le în rezultat la pozițiile specificate.
```powerquery
Combiner.CombineTextByPositions({0, 5, 10})({"abc", "def", "ghi"})
```

Result: 
```powerquery
"abc  def  ghi"
```




## Category
Combiner
