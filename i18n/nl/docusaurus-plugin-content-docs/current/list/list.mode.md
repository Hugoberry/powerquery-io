---
title: List.Mode
---

# List.Mode


Retourneert de meest voorkomende waarde uit de lijst.


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

Retourneert het item dat het meest voorkomt in `list`. Als de lijst leeg is, treedt er een fout op. Als er meerdere items met dezelfde maximumfrequentie worden weergegeven, wordt de laatste gekozen. Er kan een optionele vergelijkingscriteriawaarde, `equationCriteria`, worden opgegeven om gelijkheidstesten te beheren.


## Examples

### Example #1
Het item opzoeken dat het meest voorkomt in de lijst `{"A", 1, 2, 3, 3, 4, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
Het item opzoeken dat het meest voorkomt in de lijst `{"A", 1, 2, 3, 3, 4, 5, 5}`.
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
