---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Zamenja vrednosti v podanem vnosu.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Zamenja vrednost <code>old</code> v izvirnem <code>value</code> z vrednostjo <code>new</code>. To funkcijo zamenjevalnika lahko uporabite v <code>List.ReplaceValue</code> in <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Zamenjajte vrednost 11 z vrednostjo 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
