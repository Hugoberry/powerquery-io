---
title: List.Random
---

# List.Random


Rastgele sayı listesi döndürür.


## Syntax

```powerquery
List.Random(
    count as number,
    optional seed as number
) as list
```


## Remarks

Oluşturulacak değer sayısı ve isteğe bağlı bir çekirdek değeri ile 0 ve 1 arasında rastgele bir sayı listesi döndürür.<ul>   <li><code>count</code>: Oluşturulacak rastgele değer sayısı.</li>   <li><code>seed</code>:  <i>[Optional]</i> Rastgele sayı oluşturucusunu oluşturmak için kullanılan sayısal değer. Dahil edilmezse her işlev çağrısında benzersiz bir rastgele sayı listesi döndürülür. Çekirdek değerini bir sayı olarak belirtirseniz her işlev çağrısı aynı rastgele sayı listesini döndürür.</li></ul>


## Examples

### Example #1 
3 rastgele sayıdan oluşan bir liste oluşturur.
```powerquery
List.Random(3)
```

Result: 
```powerquery
{0.992332, 0.132334, 0.023592}
```


### Example #2 
Dağıtım değeri belirterek 3 rastgele sayı içeren bir liste oluşturur.
```powerquery
List.Random(3, 2)
```

Result: 
```powerquery
{0.883002, 0.245344, 0.723212}
```




## Category
List.Generators
