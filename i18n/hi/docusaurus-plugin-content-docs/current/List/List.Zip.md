---
title: List.Zip
---

# List.Zip


## Description

एक ही स्थान पर एकाधिक सूचियों के आइटमों को संयोजित करके सूचियों की सूची लौटाता है.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

सूचियों की सूची लेता है, <code>lists</code> और एक ही स्थान पर आइटमों को संयोजित करके सूचियों की सूची लौटाता है.


## Examples

### Example #1 
दो सरल सूचियों \{1, 2} और \{3, 4} को ज़िप करता है.
```powerquery
List.Zip({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, 4}
}
```


### Example #2 
अलग-अलग लंबाई की दो सरल सूचियों \{1, 2} और \{3} को ज़िप करता है.
```powerquery
List.Zip({{1, 2}, {3}})
```

Result: 
```powerquery
{
    {1, 3},
    {2, null}
}
```




## Category
List.Transformation functions
