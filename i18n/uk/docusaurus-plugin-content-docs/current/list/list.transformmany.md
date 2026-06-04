---
title: List.TransformMany
---

# List.TransformMany


Повертає список, елементи якого перетворені із вхідного списку за допомогою вказаних функцій.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Повертає список, елементи якого проектуються з вхідного списку.  
  
Функція `collectionTransform` перетворює кожен елемент на проміжний список, а функція `resultTransform` отримує вихідний елемент, а також елемент із проміжного списку для створення кінцевого результату.  
  
Функція `collectionTransform` має підпис `(x as any) as list => …`, де `x` є елементом у `list`. Функція `resultTransform` проектує форму результату та має підпис `(x as any, y as any) as any => …`, де `x` є елементом у `list`, а `y` – елементом зі списку, створеного шляхом передавання `x` до `collectionTransform`.


## Examples

### Example #1
Представте список людей і їхніх улюбленців у вигляді рядка.
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
