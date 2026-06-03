---
title: List.TransformMany
---

# List.TransformMany


Öğeleri girdi listesinden belirtilen işlevler kullanılarak dönüştürülen listeyi döndürür.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Öğeleri giriş listesinden yansıtılan bir liste döndürür.  
  
`collectionTransform` işlevi her öğeyi bir ara listeye dönüştürür ve `resultTransform` işlevi nihai sonucu oluşturmak amacıyla orijinal öğenin yanı sıra ara listeden bir öğe alır.  
  
`collectionTransform` işlevi, `(x as any) as list => ...` imzasını içerir, burada `x`, `list` konumunda bulunan bir öğedir. `resultTransform` işlevi sonucun şeklini yansıtır ve `(x as any, y as any) as any => ...` imzasını içerir, burada `x`, `list` konumunda bulunan bir öğedir ve `y`, `x` öğesi `collectionTransform` konumuna aktarılarak oluşturulan listeden alınan bir öğedir.


## Examples

### Example #1
Kişiler ve sahip oldukları evcil hayvanlar listesini düzleştirin.
```powerquery
List.TransformMany(
    {
        [Name = "Alice", Pets = {"Scruffy", "Sam"}],
        [Name = "Bob", Pets = {"Walker"}]
    },
    each [Pets],
    (person, pet) => [Name = person[Name], Pet = pet]
)
```

Result: 
```powerquery
{
    [Name = "Alice", Pet = "Scruffy"],
    [Name = "Alice", Pet = "Sam"],
    [Name = "Bob", Pet = "Walker"]
}
```




## Category
List.Transformation functions
