---
title: Binary.From
---

# Binary.From


Создает двоичное значение из заданного значения


## Syntax

```powerquery
Binary.From(
    value as any,
    optional encoding as BinaryEncoding.Type
) as binary
```


## Remarks

Возвращает значение `binary`, полученное из предоставленного значения `value`. Если данное `value` равно `NULL`, то `Binary.From` возвращает `NULL`. Если данное `value` представляет собой значение `binary`, то `value` и возвращается. Преобразовать в `binary` можно значения следующих типов:

-   `text`. Значение `binary` берется из текстового представления. Подробнее см. `Binary.FromText`.

Если `value` имеет какой-либо другой тип, возвращается ошибка.


## Examples

### Example #1
Получить значение `binary` для `"1011"`.
```powerquery
Binary.From("1011")
```

Result: 
```powerquery
Binary.FromText("1011", BinaryEncoding.Base64)
```




## Category
Binary
