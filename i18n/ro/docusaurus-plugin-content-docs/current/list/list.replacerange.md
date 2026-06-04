---
title: List.ReplaceRange
---

# List.ReplaceRange


Înlocuieşte numărul de valori începând de la poziţia cu valorile de înlocuire.


## Syntax

```powerquery
List.ReplaceRange(
    list as list,
    index as number,
    count as number,
    replaceWith as list
) as list
```


## Remarks

Înlocuieşte valorile `count` din `list` cu lista `replaceWith`, începând de la poziţia specificată, `index`.


## Examples

### Example #1
Înlocuiţi \{7, 8, 9\} din lista \{1, 2, 7, 8, 9, 5\} cu \{3, 4\}.
```powerquery
List.ReplaceRange({1, 2, 7, 8, 9, 5}, 2, 3, {3, 4})
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
