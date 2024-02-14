---
title: List.Numbers
---

# List.Numbers


Verilen ilk değer, sayı ve isteğe bağlı increment değerinden bir sayı listesi döndürür.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Remarks

Verilen ilk değer, sayı ve isteğe bağlı increment değerinden bir sayı listesi döndürür. Varsayılan increment değeri 1'dir.<ul>   <li><code>start</code>: Listedeki ilk değer.</li>   <li><code>count</code>: Oluşturulacak değer sayısı.</li>   <li><code>increment</code>: <i>[İsteğe bağlı]</i> Artım değeri. Dahil edilmezse, değerler 1 artırılır.</li></ul>


## Examples

### Example #1 
Art arda gelen 10 sayıdan oluşan ve 1 ile başlayan bir liste oluşturur.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2 
10 sayı içeren, 1 ile başlayan ve sonraki her sayı için 2 artışı içeren bir liste oluşturur.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
