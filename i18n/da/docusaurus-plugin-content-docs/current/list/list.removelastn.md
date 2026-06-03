---
title: List.RemoveLastN
---

# List.RemoveLastN


Returnerer en liste, der fjerner det angivne antal elementer fra slutningen af listen.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Returnerer en liste, der fjerner de sidste `countOrCondition` elementer fra slutningen af listen `list`. Hvis `list` har mindre end `countOrCondition` elementer, returneres en tom liste.

-   Hvis der er angivet et tal, fjernes op til dette antal elementer.
-   Hvis der er angivet en betingelse, fjernes alle efterfølgende matchende elementer i slutningen af `list` .
-   Hvis denne parameter er null, fjernes kun ét element.


## Examples

### Example #1
Opret en liste ud fra \{1, 2, 3, 4, 5\} uden de sidste 3 tal.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Opret en liste ud fra \{5, 4, 2, 6, 4\}, der slutter med et tal, der er mindre end 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
