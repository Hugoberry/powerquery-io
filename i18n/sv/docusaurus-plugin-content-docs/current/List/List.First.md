---
title: List.First
---

# List.First


## Description

Returnerar det första värdet i listan eller det angivna standardvärdet om listan är tom.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Returnerar det första objektet i listan <code>list</code>, eller det valfria standardvärdet <code>defaultValue</code> om listan är tom.    Om listan är tom och inget standardvärde anges returnerar funktionen <code>null</code>.


## Examples

### Example #1 
Hitta det första värdet i listan \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Hitta det första värdet i listan \{}. Returnera -1 om listan är tom.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
