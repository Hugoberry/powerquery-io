---
title: List.TransformMany
---

# List.TransformMany


## Description

Öğeleri girdi listesinden belirtilen işlevler kullanılarak dönüştürülen listeyi döndürür.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Öğeleri giriş listesinden yansıtılan bir liste döndürür.<br />    <br />    <code>collectionTransform</code> işlevi her öğeyi bir ara listeye dönüştürür ve <code>resultTransform</code> işlevi nihai sonucu oluşturmak amacıyla orijinal öğenin yanı sıra ara listeden bir öğe alır.<br />    <br />    <code>collectionTransform</code> işlevi, <code>(x as any) as list => ...</code> imzasını içerir, burada <code>x</code>, <code>list</code> konumunda bulunan bir öğedir.    <code>resultTransform</code> işlevi sonucun şeklini yansıtır ve <code>(x as any, y as any) as any => ...</code> imzasını içerir, burada <code>x</code>, <code>list</code> konumunda bulunan bir öğedir ve <code>y</code>, <code>x</code> öğesi <code>collectionTransform</code> konumuna aktarılarak oluşturulan listeden alınan bir öğedir.


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
