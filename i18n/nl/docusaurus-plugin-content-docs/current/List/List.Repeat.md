---
title: List.Repeat
---

# List.Repeat


Retourneert een lijst die een aantal herhalingen van de oorspronkelijke lijst is.


## Syntax

```powerquery
List.Repeat(
    list as list,
    count as number
) as list
```


## Remarks

Retourneert een lijst die <code>count</code> herhalingen van de oorspronkelijke lijst <code>list</code> is.


## Examples

### Example #1 
Een lijst met drie keer herhaalde \{1, 2} maken.
```powerquery
List.Repeat({1, 2}, 3)
```

Result: 
```powerquery
{1, 2, 1, 2, 1, 2}
```




## Category
List.Transformation functions
