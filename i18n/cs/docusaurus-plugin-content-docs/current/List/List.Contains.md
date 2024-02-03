---
title: List.Contains
---

# List.Contains


## Description

Značí, zda seznam obsahuje hodnotu.


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

Značí, zda seznam <code>list</code> obsahuje hodnotu <code>value</code>.    Vrátí hodnotu True, pokud je hodnota nalezena v seznamu, jinak vrátí hodnotu False. K řízení testování rovnosti lze zadat volitelnou hodnotu kritérií rovnice <code>equationCriteria</code>. 


## Examples

### Example #1 
Zjistí, zda seznam \{1, 2, 3, 4, 5} obsahuje hodnotu 3.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
Zjistí, zda seznam \{1, 2, 3, 4, 5} obsahuje hodnotu 6.
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
