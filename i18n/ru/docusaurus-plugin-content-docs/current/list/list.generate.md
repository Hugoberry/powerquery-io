---
title: List.Generate
---

# List.Generate


Создает список значений.


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

Создает список значений с использованием предоставленных функций. Функция <code>initial</code> создает начальное значение кандидата, которое затем проверяется в <code>condition</code>.    Если значение кандидата утверждено, оно возвращается как часть итогового списка, а следующее значение кандидата создается путем передачи вновь утвержденного значения в <code>next</code>.    Когда значение кандидата не совпадает с <code>condition</code>, процесс создания списка останавливается.    Можно также указать необязательный параметр <code>selector</code> для преобразования элементов в итоговом списке.


## Examples

### Example #1 
Создать список, начав с десяти и выполняя повторяющееся уменьшение на единицу. При этом каждый элемент должен быть больше нуля.
```powerquery
List.Generate(() => 10, each _ > 0, each _ - 1)
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```


### Example #2 
Создать список записей, содержащих x и y, где x - это значение, а y - список. Значение x должно быть меньше 10 и представлять число элементов в списке y. После того как список сформирован, возвращает только значения x.
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