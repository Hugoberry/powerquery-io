---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


## Description

Norādītajos ievades datos tiek aizstātas vērtības.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Details

Sākotnējā sarakstā vai tabulā <code>value</code> vērtība <code>old</code> tiek aizstāta ar vērtību <code>new</code>. Šo aizstāšanas funkciju var izmantot izteiksmēs <code>List.ReplaceValue</code> un <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Aizstājiet vērtību 11 ar vērtību 10.
```powerquery
Replacer.ReplaceValue(11, 11, 10)
```

Result: 
```powerquery
10
```




## Category
Replacer
