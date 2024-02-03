---
title: List.ContainsAll
---

# List.ContainsAll


## Description

Značí, kde seznam obsahuje všechny hodnoty jiného seznamu.


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Značí, zda seznam <code>list</code> obsahuje všechny hodnoty jiného seznamu <code>values</code>.    Vrátí hodnotu True pokud je hodnota nalezena v seznamu, jinak vrátí hodnotu False. K řízení testování rovnosti lze zadat volitelnou hodnotu kritérií rovnice <code>equationCriteria</code>. 


## Examples

### Example #1 
Zjistí, zda seznam \{1, 2, 3, 4, 5} obsahuje hodnoty 3 a 4.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
Zjistí, zda seznam \{1, 2, 3, 4, 5} obsahuje hodnoty 5 a 6.
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
