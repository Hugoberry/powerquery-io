---
title: List.Alternate
---

# List.Alternate


## Description

Bir listedeki tüm tek sayılı uzaklık öğelerinden oluşan bir liste döndürür.


## Syntax

```powerquery
List.Alternate(
    list as list,
    count as number,
    optional repeatInterval as number,
    optional offset as number
) as list
```


## Details

Bir listedeki tüm tek sayılı uzaklık öğelerinden oluşan bir liste döndürür. Parametrelere bağlı olarak <code>list</code> listesindeki değerleri alma veya atlama arasında geçiş yapar.    <ul>    <li><code>count</code>: Her defasında atlanan değerlerin sayısını belirtir.</li>    <li><code>repeatInterval</code>: Atlanan değerler arasına kaç değerin eklendiğini belirtmeye yönelik isteğe bağlı bir yineleme aralığı.</li>    <li><code>offset</code>: İlk uzaklıktaki değerleri atlamaya başlamaya yönelik bir isteğe bağlı uzaklık parametresi.</li>    </ul>


## Examples

### Example #1 
\{1..10} listesinden ilk sayıyı atlayan bir liste oluşturur.
```powerquery
List.Alternate({1..10}, 1)
```

Result: 
```powerquery
{2, 3, 4, 5, 6, 7, 8, 9, 10}
```


### Example #2 
\{1..10} listesinden tüm diğer sayıları atlayan bir liste oluşturur.
```powerquery
List.Alternate({1..10}, 1, 1)
```

Result: 
```powerquery
{2, 4, 6, 8, 10}
```


### Example #3 
\{1..10} listesinden 1 ile başlayıp tüm diğer sayıları atlayan bir liste oluşturur.
```powerquery
List.Alternate({1..10}, 1, 1, 1)
```

Result: 
```powerquery
{1, 3, 5, 7, 9}
```


### Example #4 
\{1..10} listesinden 1 ile başlayan, bir değeri atlayıp iki değeri saklayan ve bu şekilde devam eden bir liste oluşturur.
```powerquery
List.Alternate({1..10}, 1, 2, 1)
```

Result: 
```powerquery
{1, 3, 4, 6, 7, 9, 10}
```




## Category
List.Selection
