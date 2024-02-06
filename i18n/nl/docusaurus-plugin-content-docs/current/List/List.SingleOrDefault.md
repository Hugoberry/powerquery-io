---
title: List.SingleOrDefault
---

# List.SingleOrDefault


Retourneert het enige lijstitem voor een lijst met lengte 1 en de standaardwaarde voor een lege lijst.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Remarks

Als er maar één item in de lijst <code>list</code> staat, wordt dat item geretourneerd. Als de lijst leeg is, retourneert de functie null tenzij een optionele <code>default</code> is opgegeven. Als er meer dan één item in de lijst staat, retourneert de functie een fout.


## Examples

### Example #1 
De enkele waarde in de lijst \{1} zoeken.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
De enkele waarde in de lijst \{} zoeken.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
De enkele waarde in de lijst \{} zoeken. Als deze lijst leeg is, wordt -1 geretourneerd.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
