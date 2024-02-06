---
title: List.Generate
---

# List.Generate


Bir değerler listesi oluşturur.


## Syntax

```powerquery
List.Generate(
    initial as function,
    condition as function,
    next as function,
    optional selector as function
) as list
```


## Remarks

Sağlanan işlevleri kullanarak bir değerler listesi oluşturur. <code>initial</code> işlevi daha sonra <code>condition</code> ile sınanacak bir başlangıç aday değeri oluşturur.    Aday değer onaylanırsa sonuç listesinin parçası olarak döndürülür ve yeni onaylanan değer <code>next</code> öğesine geçirilerek sonraki aday değer oluşturulur.    Bir aday değer <code>condition</code> ile eşleşmediğinde, liste oluşturma işlemi durur.    Sonuç listesindeki öğeleri dönüştürmek için isteğe bağlı <code>selector</code> parametresi de sağlanabilir.


## Examples

### Example #1 
On sayısından başlayıp tekrarlı şekilde bir azaltarak ve her öğenin sıfırdan büyük olmasına dikkat ederek bir liste oluşturun.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
x&#39;in bir değer y&#39;nin ise bir liste olduğu x ve y&#39;ler içeren bir kayıt listesi oluşturur. x 10&#39;dan az kalmalı ve y listesindeki öğelerin sayısını göstermelidir. Liste oluşturulduktan sonra yalnızca x değerlerini döndürür.
```powerquery
List.Generate(
    () => [x = 1, y = {}],
    each [x] < 10,
    each [x = List.Count([y]), y = [y] & {x}],
    each [x]
)
```

Result: 
```powerquery
{1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
```




## Category
List.Generators
