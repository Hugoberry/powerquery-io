---
title: List.Last
---

# List.Last


Returnerer den sidste værdi på listen eller den angivne standard, hvis listen er tom.


## Syntax

```powerquery
List.Last(
    list as list,
    optional defaultValue as any
) as any
```


## Remarks

Returnerer det sidste element på den angivne liste eller den valgfrie standardværdi, hvis listen er tom.

-   `list`: Den liste, der skal undersøges.
-   `defaultValue`: (Valgfrit) Standardværdien, der skal returneres, hvis listen er tom. Hvis listen er tom, og der ikke er angivet en standardværdi, returnerer funktionen `null`.


## Examples

### Example #1
Find den sidste værdi på listen \{1, 2, 3\}.
```powerquery
List.Last({1, 2, 3})
```

Result: 
```powerquery
3
```


### Example #2
Find den sidste værdi på listen \{\} eller -1, hvis listen er tom.
```powerquery
List.Last({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
