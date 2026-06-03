---
title: Table.RenameColumns
---

# Table.RenameColumns


\{old, new\} biçimindeki yeniden adlandırmaları uygular.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

`table` tablosunda verilen yeniden adlandırmaları sütunlara uygular. `renames` değiştirme işlemi bir listede sağlanan eski ve yeni sütun adı olmak üzere iki değer içeren bir listeden oluşur. Sütun mevcut değilse, isteğe bağlı parametre `missingField` bir alternatif belirtmedikçe (ör. `MissingField.UseNull` veya `MissingField.Ignore`) bir hata oluşur.


## Examples

### Example #1
Tablodaki "CustomerNum" sütun adını "CustomerID" olarak değiştirir.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2
Tablodaki "CustomerNum" sütun adını "CustomerID" olarak ve "PhoneNum" sütun adını "Phone" olarak değiştirir.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3
Tablodaki "NewCol" sütun adını "NewColumn" olarak değiştirir; sütun mevcut değilse yoksayar.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
