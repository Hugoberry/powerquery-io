---
title: List.Single
---

# List.Single


## Description

Vráti jedinú položku zoznamu pre zoznam s dĺžkou jeden, v opačnom prípade dôjde k výnimke.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

Ak sa v zozname <code>list</code> nachádza iba jedna položka, vráti túto položku.    Ak sa v zozname nachádza viac ako jedna položka alebo je prázdny, vo funkcii dôjde k výnimke.


## Examples

### Example #1 
Nájdite jednu hodnotu v zozname \{1}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Nájdite jednu hodnotu v zozname \{1, 2, 3}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
