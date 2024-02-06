---
title: List.Skip
---

# List.Skip


Listenin başında belirtilen sayıda öğeyi atlayan bir liste döndürür.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

<code>list</code> listesinin ilk öğesini atlayan bir liste döndürür. <code>list</code> boş bir liste ise boş bir liste döndürülür.Bu işlev, aşağıda listelenen şekilde birden çok değeri atlamayı desteklemek üzere <code>countOrCondition</code> isteğe bağlı parametresini alır. <ul> <li>Sayı belirtilirse bu sayı kadar öğe atlanır. </li> <li>Bir koşul belirtilirse döndürülen liste <code>list</code> içinde ölçütle eşleşen ilk öğe ile başlar. Bir öğe koşulu sağlamadığında, diğer öğeler değerlendirilmez. </li> <li>Bu parametre null ise varsayılan davranış gözlenir. </li> </ul>


## Examples

### Example #1 
\{1, 2, 3, 4, 5} listesinden ilk 3 sayı hariç olmak üzere liste oluşturur.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
\{5, 4, 2, 6, 1} listesinden 3&#39;ten az olan bir sayı ile başlayan bir liste oluşturur.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
