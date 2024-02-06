---
title: List.RemoveLastN
---

# List.RemoveLastN


Retourneert een lijst die het opgegeven aantal elementen van het einde van de lijst verwijdert.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Retourneert een lijst die het de laatste <code>countOrCondition</code> elementen van het einde van lijst <code>list</code> verwijdert. Als <code>list</code> minder dan <code>countOrCondition</code> elementen heeft, wordt er een lege lijst geretourneerd. <ul> <li>Als er een getal wordt opgegeven, wordt er niet meer dan dat aantal items verwijderd. </li> <li>Als er een voorwaarde wordt opgegeven, eindigt de geretourneerde lijst met het eerste element van onderaf in <code>list</code> dat aan de criteria voldoet. Wanneer een item niet aan de voorwaarde voldoet, stopt de bewerking. </li> <li>Als deze parameter null is, wordt slechts één item verwijderd. </li> </ul>


## Examples

### Example #1 
Een lijst van \{1, 2, 3, 4, 5} zonder de laatste drie getallen maken.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Een lijst van \{5, 4, 2, 6, 4} maken die eindigt met een getal kleiner dan 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
