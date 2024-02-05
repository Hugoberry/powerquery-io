---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

Returnerar det enstaka listobjektet för en lista med längden ett och standardvärdet för en tom lista.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

Om det bara finns ett objekt i listan, returnerar <code>list</code> det objektet.    Om listan är tom returnerar funktionen null såvida inte en valfri <code>default</code> har angetts. Om det finns mer än ett objekt i listan returnerar funktionen ett fel.


## Examples

### Example #1 
Sök efter det enskilda värdet i listan \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Sök efter det enskilda värdet i listan \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Sök efter det enskilda värdet i listan \{}. Returnera -1 om listan är tom.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
