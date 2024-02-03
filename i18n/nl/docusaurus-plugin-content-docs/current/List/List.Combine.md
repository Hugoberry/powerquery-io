---
title: List.Combine
---

# List.Combine


## Description

Retourneert een enkele lijst door meerdere lijsten te combineren.


## Syntax

```powerquery
List.Combine(
    lists as list
) as list
```


## Details

Neemt een lijst met lijsten, <code>lists</code>, en voegt deze samen in een enkele nieuwe lijst.


## Examples

### Example #1 
De twee eenvoudige lijsten \{1, 2} en \{3, 4} combineren.
```powerquery
List.Combine({{1, 2}, {3, 4}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4
}
```


### Example #2 
De twee lijsten \{1, 2} en \{3, \{4, 5}}, waarvan een van de twee een geneste lijst bevat, combineren.
```powerquery
List.Combine({{1, 2}, {3, {4, 5}}})
```

Result: 
```powerquery
{
    1,
    2,
    3,
    {4, 5}
}
```




## Category
List.Transformation functions
