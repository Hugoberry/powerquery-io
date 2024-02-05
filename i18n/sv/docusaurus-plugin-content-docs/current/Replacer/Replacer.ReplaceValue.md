---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Ersätter värden i angivna indata.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Ersätter värdet <code>old</code> i ursprungliga <code>value</code> med värdet <code>new</code>. Den här ersättningsfunktionen kan användas i <code>List.ReplaceValue</code> och <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Ersätt värdet 11 med värdet 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
