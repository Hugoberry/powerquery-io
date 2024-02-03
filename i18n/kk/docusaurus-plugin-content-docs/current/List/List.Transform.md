---
title: List.Transform
---

# List.Transform


## Description

Осы тізімнен есептелген жаңа мәндер тізімін қайтарады.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

<code>transform</code> түрлендіру функциясын <code>list</code> тізіміне қолдану арқылы жаңа мәндер тізімін қайтарады.


## Examples

### Example #1 
\{1, 2} тізіміндегі әр мәнге 1 мәнін қосу.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
