---
title: List.FirstN
---

# List.FirstN


Retourneert de eerste set met items in de lijst door op te geven hoeveel items er moeten worden geretourneerd of door een in aanmerking komende voorwaarde op te geven.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Remarks

 <ul>  <li>Als er een getal wordt opgegeven, wordt er niet meer dan dat aantal items geretourneerd. </li>  <li>Als er een voorwaarde wordt opgegeven, worden alle items geretourneerd die in eerste instantie aan de voorwaarde voldoen. Wanneer een item niet aan de voorwaarde voldoet, stopt de bewerking. </li> </ul>


## Examples

### Example #1 
De eerste waarden zoeken in de lijst \{3, 4, 5, -1, 7, 8, 2} die groter zijn dan 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
