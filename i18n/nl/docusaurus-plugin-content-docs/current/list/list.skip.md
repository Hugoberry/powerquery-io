---
title: List.Skip
---

# List.Skip


Retourneert een lijst die het opgegeven aantal elementen aan het begin van de lijst overslaat.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Hiermee wordt een lijst geretourneerd waarmee het eerste element van lijst `list`wordt overgeslagen. Als `list` een lege lijst is, wordt er een lege lijst geretourneerd. Bij deze functie wordt een optionele parameter toegepast, `countOrCondition`, om het overslaan van meerdere waarden te ondersteunen, zoals hieronder vermeld.

-   Als er een aantal is opgegeven, worden maximaal dat aantal items overgeslagen.
-   Als er een voorwaarde is opgegeven, worden alle opeenvolgende overeenkomende items aan het begin van `list` overgeslagen.
-   Als deze parameter null is, wordt het standaardgedrag gehanteerd.


## Examples

### Example #1
Een lijst van \{1, 2, 3, 4, 5\} zonder de eerste drie getallen maken.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Een lijst van \{5, 4, 2, 6, 1\} maken die begint met een getal kleiner dan 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
