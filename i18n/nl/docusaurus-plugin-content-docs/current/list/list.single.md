---
title: List.Single
---

# List.Single


Retourneert het enige lijstitem voor een lijst met lengte één, anders wordt er een fout gegenereerd.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Als er maar één item in de lijst `list` staat, wordt dat item geretourneerd. Als er meer dan één item is of als de lijst leeg is, genereert de functie een fout.


## Examples

### Example #1
De enkele waarde in de lijst \{1\} zoeken.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
De enkele waarde in de lijst \{1, 2, 3\} zoeken.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
