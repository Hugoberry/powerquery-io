---
title: List.TransformMany
---

# List.TransformMany


## Description

Повертає список, елементи якого перетворені із вхідного списку за допомогою вказаних функцій.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Повертає список, елементи якого проектуються з вхідного списку.<br />    <br />    Функція <code>collectionTransform</code> перетворює кожен елемент на проміжний список, а функція <code>resultTransform</code> отримує вихідний елемент, а також елемент із проміжного списку для створення кінцевого результату.<br />    <br />    Функція <code>collectionTransform</code> має підпис <code>(x as any) as list => …</code>,  де <code>x</code> є елементом у <code>list</code>.    Функція <code>resultTransform</code> проектує форму результату та має підпис <code>(x as any, y as any) as any => …</code>, де <code>x</code> є елементом у <code>list</code>, а <code>y</code> – елементом зі списку, створеного шляхом передавання <code>x</code> до <code>collectionTransform</code>.


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
