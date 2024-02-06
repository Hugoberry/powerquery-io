---
title: List.PositionOf
---

# List.PositionOf


Retourneert de verschuiving of verschuivingen van een waarde in een lijst.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Hiermee wordt de offset geretourneerd waarbij de waarde <code>value</code> wordt weergegeven in de lijst <code>list</code>. Retourneert -1 als de waarde niet wordt weergegeven. Een optionele herhalingsparameter <code>occurrence</code> kan worden opgegeven.<ul> <li><code>occurrence</code>: het maximumaantal herhalingen dat moet worden gerapporteerd.</li></ul>


## Examples

### Example #1 
De positie in de lijst \{1, 2, 3} opzoeken waar de waarde 3 staat.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
