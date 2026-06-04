---
title: List.Single
---

# List.Single


Tiek atgriezts saraksta vienums, ja sarakstā ir tikai viens vienums, pretējā gadījumā tiek izraisīta kļūda.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Ja sarakstā `list` ir tikai viens vienums, tiek atgriezts šis vienums. Ja ir vairāki vienumi vai saraksts ir tukšs, funkcija izraisa kļūdu.


## Examples

### Example #1
Iegūstiet saraksta \{1\} vienīgo vērtību.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
Iegūstiet saraksta \{1, 2, 3\} vienīgo vērtību.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
