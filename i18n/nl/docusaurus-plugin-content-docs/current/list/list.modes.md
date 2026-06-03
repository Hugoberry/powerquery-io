---
title: List.Modes
---

# List.Modes


Retourneert een lijst met de waarden die het meest voorkomen in de andere lijst.


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

Retourneert de meest voorkomende items in `list`. Als de lijst leeg is, treedt er een fout op. Als er meerdere items met dezelfde maximumfrequentie worden weergegeven, worden ze allemaal geretourneerd. Er kan een optionele vergelijkingscriteriawaarde, `equationCriteria`, worden opgegeven om gelijkheidstesten te beheren.


## Examples

### Example #1
De items worden opgegeven die het meeste voorkomen in de lijst `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
