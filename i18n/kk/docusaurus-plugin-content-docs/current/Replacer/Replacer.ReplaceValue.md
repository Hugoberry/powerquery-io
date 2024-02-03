---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Көрсетілген енгізбедегі мәндерді ауыстырады.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Бастапқы <code>value</code> ішіндегі <code>old</code> мәнін <code>new</code> мәнімен ауыстырады. Бұл алмастыру құралын <code>List.ReplaceValue</code> және <code>Table.ReplaceValue</code> ішінде пайдалануға болады.


## Examples

### Example #1 
11 мәнін 10 мәнімен ауыстыру.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
