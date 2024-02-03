---
title: List.Buffer
---

# List.Buffer


## Description

किसी सूची को बफ़र करता है.


## Syntax

```powerquery
List.Buffer(
    list as list
) as list
```


## Details

सूची <code>list</code> को स्मृति में बफ़र करता है. इस कॉल का परिणाम एक स्थिर सूची है.


## Examples

### Example #1 
सूची \{1..10} की एक स्थिर प्रतिलिपि बनाएँ.
```powerquery
List.Buffer({1..10})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
```




## Category
List.Selection
