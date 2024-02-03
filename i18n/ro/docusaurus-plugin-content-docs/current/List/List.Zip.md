---
title: List.Zip
---

# List.Zip


## Description

Returnează o listă de liste prin combinarea elementelor aflate în aceeași poziție în mai multe liste.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Ia o listă de liste, <code>lists</code>, și returnează o listă de liste care combină elementele din aceeași poziție.


## Examples

### Example #1 
Arhivează cele două liste simple \{1, 2} și \{3, 4}.
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
Arhivează cele două liste simple de lungimi diferite \{1, 2} și \{3}.
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
