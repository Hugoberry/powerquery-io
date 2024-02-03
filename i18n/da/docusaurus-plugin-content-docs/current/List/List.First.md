---
title: List.First
---

# List.First


## Description

Returnerer den første værdi på listen eller den angivne standard, hvis listen er tom.


## Syntax

```powerquery
List.First(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Returnerer det første element på listen <code>list</code> eller den valgfrie standardværdi, <code>defaultValue</code>, hvis listen er tom.    Hvis listen er tom, og der ikke er angivet en standardværdi, returnerer funktionen <code>null</code>.


## Examples

### Example #1 
Find den første værdi på listen \{1, 2, 3}.
```powerquery
List.First({1, 2, 3})
```

Result: 
```powerquery
1
```


### Example #2 
Find den første værdi på listen \{}. Hvis listen er tom, returneres -1.
```powerquery
List.First({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
