---
title: List.Single
---

# List.Single


## Description

Returnerer ét listeelement for en liste med længden én. Ellers udløses der en undtagelse.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

Hvis der kun er ét element på listen <code>list</code>, returneres dette element.    Hvis der er mere end ét element, eller listen er tom, udløser funktionen en undtagelse.


## Examples

### Example #1 
Find den eneste værdi på listen \{1}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Find den eneste værdi på listen \{1, 2, 3}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
