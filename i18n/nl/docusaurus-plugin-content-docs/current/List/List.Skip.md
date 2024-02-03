---
title: List.Skip
---

# List.Skip


## Description

Retourneert een lijst die het opgegeven aantal elementen aan het begin van de lijst overslaat.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Hiermee wordt een lijst geretourneerd waarmee het eerste element van lijst <code>list</code> wordt overgeslagen. Als <code>list</code> een lege lijst is, wordt een lege lijst geretourneerd.Deze functie gebruikt een optionele parameter, <code>countOrCondition</code>, voor het ondersteunen van het overslaan van meerdere waarden zoals in de onderstaande lijst. <ul> <li>Als een getal is opgegeven, wordt maximaal dat aantal items overgeslagen. </li> <li>Als een voorwaarde is opgegeven, begint de geretourneerde lijst met het eerste element in <code>list</code> dat aan de criteria voldoet. Zodra een item niet aan de voorwaarde voldoet, worden geen verdere items meer behandeld. </li> <li>Als deze parameter null is, wordt het standaardgedrag is waargenomen. </li> </ul>


## Examples

### Example #1 
Een lijst van \{1, 2, 3, 4, 5} zonder de eerste drie getallen maken.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Een lijst van \{5, 4, 2, 6, 1} maken die begint met een getal kleiner dan 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
