---
title: List.LastN
---

# List.LastN


Retourneert een lijst met het laatste item of de laatste items in de opgegeven lijst. Hiermee kan worden opgegeven hoeveel waarden er moeten worden geretourneerd of er kan een in aanmerking komende voorwaarde worden opgegeven.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Retourneert een lijst met het laatste item of de laatste items in de opgegeven lijst.

-   `list`: de lijst die moet worden onderzocht. Als de lijst leeg is, wordt er een lege lijst geretourneerd.
-   `countOrCondition`: (optioneel) ondersteunt het verzamelen van meerdere items of het filteren van items. Hoewel deze parameter als optioneel wordt vermeld, treedt er een fout op als deze waarde niet is opgegeven of `null` bevat. Deze parameter kan op twee manieren worden opgegeven:
    -   Als er een getal is opgegeven, worden er maximaal zoveel items geretourneerd.
    -   Als er een voorwaarde is opgegeven, worden alle items geretourneerd die aan de voorwaarde voldoen, te beginnen aan het einde van de lijst. Zodra een item niet voldoet aan de voorwaarde, worden er geen verdere items meer in aanmerking genomen.


## Examples

### Example #1
De laatste waarde in de lijst \{3, 4, 5, -1, 7, 8, 2\} zoeken.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
De laatste waarden in de lijst \{3, 4, 5, -1, 7, 8, 2\} opzoeken die groter zijn dan 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
