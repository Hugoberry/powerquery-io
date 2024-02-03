---
title: Combiner.CombineTextByRanges
---

# Combiner.CombineTextByRanges


## Description

Returnează o funcție ce combină o listă de texte utilizând pozițiile și lungimile specificate.


## Syntax

```powerquery
Combiner.CombineTextByRanges(
    ranges as list,
    optional template as text
) as function
```


## Details

Returnează o funcție ce combină o listă de valori text într-o singură valoare text utilizând pozițiile de rezultat și lungimile specificate. O lungime nulă indică faptul că trebuie inclusă întreaga valoare text.


## Examples

### Example #1 
Combinați o listă de valori text utilizând pozițiile de rezultat și lungimile specificate.
```powerquery
Combiner.CombineTextByRanges({{0, 1}, {3, 2}, {6, null}})({"abc", "def", "ghijkl"})
```

Result: 
```powerquery
"a  de ghijkl"
```




## Category
Combiner
