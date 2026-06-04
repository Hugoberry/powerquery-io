---
title: Replacer.ReplaceValue
---

# Replacer.ReplaceValue


Norādītajos ievades datos tiek aizstātas vērtības.


## Syntax

```powerquery
Replacer.ReplaceValue(
    value as any,
    old as any,
    new as any
) as any
```


## Remarks

Sākotnējā sarakstā vai tabulā `value` vērtība `old` tiek aizstāta ar vērtību `new`. Šo aizstāšanas funkciju var izmantot izteiksmēs `List.ReplaceValue` un `Table.ReplaceValue`.


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
