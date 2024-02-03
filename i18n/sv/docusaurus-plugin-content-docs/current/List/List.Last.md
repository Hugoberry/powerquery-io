---
title: List.Last
---

# List.Last


## Description

Returnerar det sista värdet i listan eller det angivna standardvärdet om listan är tom.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Returnerar det sista objektet i listan <code>list</code>, eller det valfria standardvärdet <code>defaultValue</code> om listan är tom.    Om listan är tom och inget standardvärde anges returnerar funktionen <code>null</code>.


## Examples

### Example #1 
Hitta det sista värdet i listan \{1, 2, 3}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Hitta det sista värdet i listan \{} eller -1 om listan är tom.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
