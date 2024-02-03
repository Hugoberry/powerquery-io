---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Korvaa arvot annetun syötteen sisällä.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Korvaa arvon <code>old</code> alkuperäisessä kohteessa <code>value</code> arvolla <code>new</code>. Tätä korvaustoimintoa voi käyttää kohteissa <code>List.ReplaceValue</code> ja <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Korvaa arvo 11 arvolla 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
