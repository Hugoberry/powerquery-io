---
title: Table.View
---

# Table.View


Создает или расширяет таблицу, используя определенные пользователем обработчики операций запросов и действий.


## Syntax

```powerquery
Table.View(
    table as table,
    handlers as record
) as table
```


## Remarks

Возвращает представление <code>table</code>, применяемые к которому операции действуют не по умолчанию, а используя функции-обработчики, указанные в <code>handlers</code>.<br />В случае указания <code>table</code> задавать какие-либо функции-обработчики не обязательно. Если же не указывать <code>table</code>, обязательно необходимы функции-обработчики <code>GetType</code> и <code>GetRows</code>. Если не указать для операции функцию-обработчик, вместо нее операция (если это не <code>GetExpression</code>) применяет к <code>table</code> свои действия по умолчанию.<br />Функции-обработчики должны возвращать значение, семантически эквивалентное результату применения операции к <code>table</code> (или к результирующему представлению для <code>GetExpression</code>).<br />Если функция-обработчик выдает ошибку, к представлению применяются действия операции по умолчанию.<br /><code>Table.View</code> позволяет реализовать для источника данных свертывание — перевод запросов M в запросы конкретного источника (например, создание инструкций T-SQL из запросов M).<br />Более полное описание <code>Table.View</code> см. в опубликованной документации по настраиваемым соединителям Power Query.<br />


## Examples

### Example #1 
Создайте базовое представление, которое не требует доступа к строкам для определения типа или количества строк.
```powerquery
Table.View(
    null,
    [
        GetType = () => type table [CustomerID = number, Name = text, Phone = nullable text],
        GetRows = () => Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
        GetRowCount = () => 1
    ]
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Table construction
