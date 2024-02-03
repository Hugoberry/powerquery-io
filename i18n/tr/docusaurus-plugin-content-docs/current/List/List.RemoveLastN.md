---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Belirtilen sayıda öğeyi listenin sonundan kaldıran bir liste döndürür.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Belirtilen son <code>countOrCondition</code> öğeyi listenin sonundan kaldıran bir <code>list</code> listesi döndürür. <code>list</code>, <code>countOrCondition</code> altında öğeye sahipse boş bir liste döndürülür. <ul> <li>Sayı belirtilirse, bu sayı kadar öğe kaldırılır. </li> <li>Bir koşul belirtilmişse, döndürülen liste <code>list</code> içinde ölçütle eşleşen alttaki ilk öğe ile biter. Tüm öğeler koşulu sağlamadığında, başka öğe değerlendirilmez. </li> <li>Bu parametre null ise yalnızca bir öğe kaldırılır. </li> </ul>


## Examples

### Example #1 
\{1, 2, 3, 4, 5} listesinden son 3 sayı hariç olmak üzere liste oluşturur.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
\{5, 4, 2, 6, 4} listesinden 3&#39;ten az olan bir sayı ile biten bir liste oluşturur.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
