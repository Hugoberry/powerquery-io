---
title: Table.SelectColumns
---

# Table.SelectColumns


Yalnızca belirtilen sütunları içeren bir tablo döndürür.


## Syntax

```powerquery
Table.SelectColumns(
    table as table,
    columns as any,
    optional missingField as MissingField.Type
) as table
```


## Remarks

Yalnızca belirtilen `table` öğesini içeren `columns` öğesini döndürür.

-   `table`: Sağlanan tablo.
-   `columns`: `table` tablosundan döndürülecek sütun listesi. Döndürülen tablodaki sütunlar `columns` içinde listelenen sıradadır.
-   `missingField`: *(İsteğe bağlı)* Sütun yoksa yapılacak işlem. Örneğin: `MissingField.UseNull` veya `MissingField.Ignore`.


## Examples

### Example #1
Yalnızca \[Name\] sütununu ekleyin.
```powerquery
Table.SelectColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Name"
)
```

Result: 
```powerquery
Table.FromRecords({
    [Name = "Bob"],
    [Name = "Jim"],
    [Name = "Paul"],
    [Name = "Ringo"]
})
```


### Example #2
Yalnızca \[CustomerID\] ve \[Name\] sütunlarını ekleyin.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "Name"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob"]})
```


### Example #3
Eklenen sütun mevcut değilse, varsayılan sonuç hatadır.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "NewColumn"
)
```

Result: 
```powerquery
[Expression.Error] The field 'NewColumn' of the record wasn't found.
```


### Example #4
Eklenen sütun mevcut değilse, `MissingField.UseNull` seçeneği null değerlerden oluşan bir sütun oluşturur.
```powerquery
Table.SelectColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerID", "NewColumn"},
    MissingField.UseNull
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, NewColumn = null]})
```




## Category
Table.Column operations
