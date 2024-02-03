---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

Tiek atgriezts saraksta vienums, ja sarakstā ir tikai viens vienums, bet, ja saraksts ir tukšs, tiek atgriezta noklusējuma vērtība.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

Ja sarakstā <code>list</code> ir tikai viens vienums, tiek atgriezts šis vienums.    Ja saraksts ir tukšs un nav norādīts papildu parametrs <code>default</code>, funkcija atgriež vērtību Null. Ja sarakstā ir vairāki vienumi, funkcija atgriež kļūdu.


## Examples

### Example #1 
Iegūstiet saraksta \{1} vienīgo vērtību.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Iegūstiet saraksta \{} vienīgo vērtību.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Iegūstiet saraksta \{} vienīgo vērtību. Ja saraksts ir tukšs, tiek atgriezta vērtība -1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
