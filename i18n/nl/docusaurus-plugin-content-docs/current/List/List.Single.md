---
title: List.Single
---

# List.Single


## Description

Retourneert het enige lijstitem voor een lijst met lengte 1. In alle andere gevallen wordt er een uitzondering gegenereerd.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Details

Als er maar één item in de lijst <code>list</code> staat, wordt dat item geretourneerd. Als er meer dan één item in de lijst staat of de lijst leeg is, retourneert functie geeft een uitzondering.


## Examples

### Example #1 
De enkele waarde in de lijst \{1} zoeken.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
De enkele waarde in de lijst \{1, 2, 3} zoeken.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
