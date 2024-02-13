---
title: List.Single
---

# List.Single


Возвращает один элемент списка для списка из одного элемента, в противном случае вызывает исключение.


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

Если в списке <code>list</code> только один элемент, возвращает этот элемент.    Если в списке больше одного элемента или список пуст, функция вызывает исключение.


## Examples

### Example #1 
Найти единственное значение в списке \{1}.
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
Найти единственное значение в списке \{1, 2, 3}.
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
