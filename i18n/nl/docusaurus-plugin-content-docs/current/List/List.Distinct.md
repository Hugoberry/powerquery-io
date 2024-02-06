---
title: List.Distinct
---

# List.Distinct


Retourneert een lijst met de waarden waarin dubbele waarden zijn verwijderd.


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Retourneert een lijst die alle waarden in de lijst <code>list</code> bevat en waarin dubbele waarden zijn verwijderd. Als de lijst leeg is, is het resultaat een lege lijst.


## Examples

### Example #1 
De dubbele waarden verwijderen uit de lijst \{1, 1, 2, 3, 3, 3}.
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
