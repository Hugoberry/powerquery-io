---
title: List.Positions
---

# List.Positions


Retourneert een lijst met verschuivingen voor de invoer.


## Syntax

```powerquery
List.Positions(
    list as list
) as list
```


## Remarks

Hiermee wordt een lijst met offsets geretourneerd voor de invoerlijst <code>list</code>. Wanneer u List.Transform gebruikt voor het wijzigen van een lijst, kan de lijst met posities worden gebruikt om de transformatie toegang tot de positie te geven.


## Examples

### Example #1 
De verschuivingen van waarden in de lijst \{1, 2, 3, 4, null, 5} zoeken.
```powerquery
List.Positions({1, 2, 3, 4, null, 5})
```

Result: 
```powerquery
{0, 1, 2, 3, 4, 5}
```




## Category
List.Selection
