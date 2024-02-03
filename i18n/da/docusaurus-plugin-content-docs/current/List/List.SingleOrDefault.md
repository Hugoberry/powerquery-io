---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

Returnerer ét listeelement for en liste med længden én og standardværdien for en tom liste.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

Hvis der kun er ét element på listen <code>list</code>, returneres dette element.    Hvis listen er tom, returnerer funktionen en null-værdi, medmindre der er angivet en valgfri <code>default</code>. Hvis der er mere end ét element på listen, returnerer funktionen en fejl.


## Examples

### Example #1 
Find den eneste værdi på listen \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Find den eneste værdi på listen \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Find den eneste værdi på listen \{}. Hvis listen er tom, returneres -1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
