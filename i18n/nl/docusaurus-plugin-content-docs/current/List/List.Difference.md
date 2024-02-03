---
title: List.Difference
---

# List.Difference


## Description

Retourneert het verschil van de twee opgegeven lijsten.


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Hiermee worden de items in lijst <code>list1</code> geretourneerd die niet worden weergegeven in lijst <code>list2</code>. Dubbele waarden worden ondersteund. Een optionele vergelijkingscriteriawaarde, <code>equationCriteria</code>, kan worden opgegeven voor het aansturen van gelijkheidstesten. 


## Examples

### Example #1 
Zoek de items in de lijst \{1, 2, 3, 4, 5} die niet worden weergegeven in \{4, 5, 3}.
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
De items in de lijst \{1, 2} zoeken die niet verschijnen in \{1, 2, 3}.
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
