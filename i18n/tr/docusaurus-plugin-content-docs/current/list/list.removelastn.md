---
title: List.RemoveLastN
---

# List.RemoveLastN


Belirtilen sayıda öğeyi listenin sonundan kaldıran bir liste döndürür.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

`list` listesinin sonundaki son `countOrCondition` öğeyi kaldıran bir liste döndürür. `list` `countOrCondition` öğeden daha az öğeye sahipse boş bir liste döndürülür.

-   Bir sayı belirtilirse, o kadar öğe kaldırılır.
-   Bir koşul belirtilirse, `list` sonundaki eşleşen tüm öğeler kaldırılır.
-   Bu parametre null ise yalnızca bir öğe kaldırılır.


## Examples

### Example #1
\{1, 2, 3, 4, 5\} listesinden son 3 sayı hariç olmak üzere liste oluşturur.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
\{5, 4, 2, 6, 4\} listesinden 3'ten az olan bir sayı ile biten bir liste oluşturur.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
