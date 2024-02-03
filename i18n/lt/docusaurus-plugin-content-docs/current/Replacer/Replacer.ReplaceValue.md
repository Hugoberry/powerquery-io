---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Pakeičiamos reikšmės pateiktoje įvestyje.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Pakeičiama <code>old</code> reikšmė pradiniame <code>value</code> į <code>new</code> reikšmę. Šią pakeitimo funkciją galima naudoti <code>List.ReplaceValue</code> ir <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Pakeičiama reikšmė 11 reikšme 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
