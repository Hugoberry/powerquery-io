---
title: List.ContainsAny
---

# List.ContainsAny


## Description

Značí, kde seznam obsahuje jakoukoliv hodnotu jiného seznamu.


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Details

Značí, zda seznam <code>list</code> obsahuje jakoukoliv hodnotu v jiném seznamu <code>values</code>.        Vrátí hodnotu True, pokud je hodnota nalezena v seznamu, jinak vrátí hodnotu False. K řízení testování rovnosti lze zadat volitelnou hodnotu kritérií rovnice <code>equationCriteria</code>. 


## Examples

### Example #1 
Zjistí, zda seznam \{1, 2, 3, 4, 5} obsahuje hodnotu 3 nebo 9.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
Zjistí, zda seznam \{1, 2, 3, 4, 5} obsahuje hodnotu 6 nebo 7.
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
