---
title: List.PositionOfAny
---

# List.PositionOfAny


Retourneert de eerste verschuiving van een waarde in een lijst.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Remarks

Hiermee wordt de offset in lijst <code>list</code> geretourneerd van de eerste herhaling van een waarde in een lijst <code>values</code>. Retourneert -1 als er geen herhaling is gevonden. Een optionele herhalingsparameter <code>occurrence</code> kan worden opgegeven.<ul> <li><code>occurrence</code>: het maximumaantal herhalingen dat kan worden geretourneerd.</li></ul>


## Examples

### Example #1 
De eerste positie in de lijst \{1, 2, 3} opzoeken waar de waarde 2 of 3 staat.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
