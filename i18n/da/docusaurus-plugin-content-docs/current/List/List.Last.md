---
title: List.Last
---

# List.Last


## Description

Returnerer den sidste værdi på listen eller den angivne standard, hvis listen er tom.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Details

Returnerer det sidste element på listen <code>list</code> eller den valgfrie standardværdi, <code>defaultValue</code>, hvis listen er tom.    Hvis listen er tom, og der ikke er angivet en standardværdi, returnerer funktionen <code>null</code>.


## Examples

### Example #1 
Find den sidste værdi på listen \{1, 2, 3}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2 
Find den sidste værdi på listen \{} eller -1, hvis listen er tom.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
