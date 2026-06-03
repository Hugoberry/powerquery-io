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

Retourneert een lijst die het de laatste `countOrCondition` elementen van het einde van lijst `list`verwijdert. Als `list` minder dan `countOrCondition` elementen bevat, wordt er een lege lijst geretourneerd.

-   Als er een aantal is opgegeven, worden maximaal dat aantal items verwijderd.
-   Als er een voorwaarde is opgegeven, worden alle opeenvolgende overeenkomende items aan het einde van `list` verwijderd.
-   Als deze parameter null is, wordt er slechts één item verwijderd.


## Examples

### Example #1
Een lijst van \{1, 2, 3, 4, 5\} zonder de laatste drie getallen maken.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Een lijst van \{5, 4, 2, 6, 4\} maken die eindigt met een getal kleiner dan 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
