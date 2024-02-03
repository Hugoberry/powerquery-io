---
title: List.Zip
---

# List.Zip


## Description

Retourneert een lijst met lijsten door items te combineren die dezelfde positie hebben in meerdere lijsten.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Neemt een lijst met lijsten, <code>lists</code> en retourneert een lijst met lijsten met items die dezelfde positie hebben in meerdere lijsten.


## Examples

### Example #1 
Zipt de twee eenvoudige lijsten \{1, 2} en \{3, 4}.
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
Zipt de twee eenvoudige lijsten met verschillende lengtes \{1, 2} en \{3}.
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
