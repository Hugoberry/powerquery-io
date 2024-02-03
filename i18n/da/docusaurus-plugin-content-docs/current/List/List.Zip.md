---
title: List.Zip
---

# List.Zip


## Description

Returnerer en liste over lister ved at kombinere elementer på samme position i flere lister.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Tager en liste over lister, <code>lists</code>, og returnerer en liste over lister, der kombinerer elementer på samme position.


## Examples

### Example #1 
Zipper de to enkle lister \{1, 2} og \{3, 4}.
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
Zipper de to enkle lister med forskellige længder \{1, 2} og \{3}.
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
