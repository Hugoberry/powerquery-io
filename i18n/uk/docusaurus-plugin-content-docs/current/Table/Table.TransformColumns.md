---
title: Table.TransformColumns
---

# Table.TransformColumns


## Description

Перетворює значення одного або кількох стовпців.


## Syntax

```powerquery
Table.TransformColumns(
    table as table,
    transformOperations as list,
    optional defaultTransformation as function,
    optional missingField as MissingField.Type
) as table
```


## Details

Перетворює <code>table</code>, застосовуючи кожну операцію стовпця, указану в <code>transformOperations</code>, де використовується формат: \{ column name, transformation } або \{ column name, transformation, new column type }.    Якщо задано <code>defaultTransformation</code>, параметр застосовуватиметься до всіх стовпців, які не перелічено в <code>transformOperations</code>.    Якщо стовпець, указаний у <code>transformOperations</code>, не існує, повертається виняток, за умови що за допомогою додаткового параметра <code>missingField</code> не встановлено альтернативну функцію, як-от <code>MissingField.UseNull</code> або <code>MissingField.Ignore</code>.


## Examples

### Example #1 
Перетворити текстові значення в стовпці [A] на числові, а числові значення в стовпці [B] – на текстові.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {
        {"A", Number.FromText},
        {"B", Text.From}
    }
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "2"],
    [A = 5, B = "10"]
})
```


### Example #2 
Перетворити числові значення у відсутньому стовпці [X] на текстові, ігнорувати стовпці, які не існують.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2],
    [A = "5", B = 10]
})
```


### Example #3 
Перетворити числові значення у відсутньому стовпці [X] на текстові, а для стовпців, що не існують, установити стандартне Null-значення.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"X", Number.FromText},
    null,
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = "1", B = 2, X = null],
    [A = "5", B = 10, X = null]
})
```


### Example #4 
Збільшити числові значення в стовпці [B] та перетворити їх на текстові, а також перетворити всі інші стовпці на числові.
```powerquery
Table.TransformColumns(
    Table.FromRecords({
        [A = "1", B = 2],
        [A = "5", B = 10]
    }),
    {"B", each Text.From(_ + 1), type text},
    Number.FromText
)
```

Result: 
```powerquery
Table.FromRecords({
    [A = 1, B = "3"],
    [A = 5, B = "11"]
})
```




## Category
Table.Transformation
