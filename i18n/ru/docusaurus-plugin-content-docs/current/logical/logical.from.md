---
title: Logical.From
---

# Logical.From


Создает логическое значение из заданного.


## Syntax

```powerquery
Logical.From(
    value as any
) as logical
```


## Remarks

Возвращает значение `logical`, полученное из предоставленного значения `value`. Если данное `value` равно `NULL`, то `Logical.From` возвращает `NULL`. Если данное `value` представляет собой значение `logical`, то `value` и будет возвращено. Преобразовать в `logical` можно значения следующих типов:

-   `text`. Значение `logical` берется из текстового значения `"true"` (истина) или `"false"` (ложь). Подробнее см. `Logical.FromText`.
-   `number`. Значение будет `false`, если `value` равно `0`, в противном случае — `true`.

Если `value` имеет какой-либо другой тип, возвращается ошибка.


## Examples

### Example #1
Преобразовать `2` в значение `logical`.
```powerquery
Logical.From(2)
```

Result: 
```powerquery
true
```




## Category
Logical
