---
title: List.TransformMany
---

# List.TransformMany


## Description

Возвращает список, элементы которого преобразованы из входного списка с помощью указанных функций.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Details

Возвращает список элементов, проецирование которых выполняется из списка ввода.<br />    <br />    Функция <code>collectionTransform</code> преобразует каждый элемент в промежуточный список, а функция <code>resultTransform</code> получает исходный элемент и элемент из промежуточного списка, чтобы создать окончательный результат.<br />    <br />    Функция <code>collectionTransform</code> имеет сигнатуру <code>(x значит любой) в виде списка => ...</code>, где <code>x</code> является элементом в <code>list</code>.    Функция <code>resultTransform</code> проецирует вид результата и имеет сигнатуру <code>(x значит любой, y значит любой) как любое => ...</code>, где <code>x</code> является элементом в <code>list</code>, а <code>y</code> является элементом из списка, созданного путем передачи <code>x</code> в <code>collectionTransform</code>.


## Examples

### Example #1 
Выполните сведение списка людей и их домашних животных.
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
