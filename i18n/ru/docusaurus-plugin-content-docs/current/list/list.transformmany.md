---
title: List.TransformMany
---

# List.TransformMany


Возвращает список, элементы которого преобразованы из входного списка с помощью указанных функций.


## Syntax

```powerquery
List.TransformMany(
    list as list,
    collectionTransform as function,
    resultTransform as function
) as list
```


## Remarks

Возвращает список элементов, проецирование которых выполняется из списка ввода.  
  
Функция `collectionTransform` преобразует каждый элемент в промежуточный список, а функция `resultTransform` получает исходный элемент и элемент из промежуточного списка, чтобы создать окончательный результат.  
  
Функция `collectionTransform` имеет сигнатуру `(x значит любой) в виде списка => ...`, где `x` является элементом в `list`. Функция `resultTransform` проецирует вид результата и имеет сигнатуру `(x значит любой, y значит любой) как любое => ...`, где `x` является элементом в `list`, а `y` является элементом из списка, созданного путем передачи `x` в `collectionTransform`.


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
