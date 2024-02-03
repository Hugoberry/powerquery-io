---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

Vrátí jednu položku seznamu pro seznam o délce 1 a výchozí hodnotu pro prázdný seznam.


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

Pokud seznam <code>list</code> obsahuje pouze jedinou položku, vrátí tuto položku.    Pokud je seznam prázdný a není určena volitelná hodnota <code>default</code>, funkce vrátí hodnotu null. Pokud seznam obsahuje více než jednu položku, funkce vrátí chybu.


## Examples

### Example #1 
Vyhledá jednu hodnotu v seznamu \{1}.
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
Vyhledá jednu hodnotu v seznamu \{}.
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
Vyhledá jednu hodnotu v seznamu \{}. Pokud je prázdný, vrátí hodnotu -1.
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
