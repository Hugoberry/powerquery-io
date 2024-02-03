---
title: List.Zip
---

# List.Zip


## Description

Vrne seznam tako, da združi elemente na istem mestu na več seznamih.


## Syntax

```powerquery
List.Zip(
    lists as list
) as list
```


## Details

Vzame seznam seznamov, <code>lists</code>, in vrne seznam seznamov tako, da združi elemente na istem mestu.


## Examples

### Example #1 
Stisne dva preprosta seznama, \{1, 2} in \{3, 4}.
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
Stisne dva preprosta seznama različnih dolžin, \{1, 2} in \{3}.
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
