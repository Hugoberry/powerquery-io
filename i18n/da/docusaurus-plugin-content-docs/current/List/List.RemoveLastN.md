---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Returnerer en liste, der fjerner det angivne antal elementer fra slutningen af listen.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Returnerer en liste, der fjerner de sidste <code>countOrCondition</code> elementer fra slutningen af listen <code>list</code>. Hvis <code>list</code> indeholder mindre end <code>countOrCondition</code> elementer, returneres der en tom liste. <ul> <li>Hvis der er angivet et tal, fjernes elementer op til det angivne antal. </li> <li>Hvis der er angivet en betingelse, slutter den returnerede liste med det første element nederst i <code>list</code>, der opfylder kriterierne. Når et element ikke opfylder betingelsen, tages der ikke flere elementer med i betragtning. </li> <li>Hvis denne parameter er null, fjernes der kun ét element. </li> </ul>


## Examples

### Example #1 
Opret en liste ud fra \{1, 2, 3, 4, 5} uden de sidste 3 tal.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Opret en liste ud fra \{5, 4, 2, 6, 4}, der slutter med et tal, der er mindre end 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
