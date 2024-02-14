---
title: Table.RenameColumns
---

# Table.RenameColumns


\{old, new} biçimindeki yeniden adlandırmaları uygular.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Remarks

<code>table</code> tablosunda verilen yeniden adlandırmaları sütunlara uygular. <code>renames</code> değiştirme işlemi bir listede sağlanan eski ve yeni sütun adı olmak üzere iki değer içeren bir listeden oluşur.    Sütun yoksa, <code>missingField</code> isteğe bağlı parametresi bir alternatif belirtmediği sürece özel durum oluşur (örn. <code>MissingField.UseNull</code> veya <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Tablodaki &#34;CustomerNum&#34; sütun adını &#34;CustomerID&#34; olarak değiştirir.
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
Tablodaki &#34;CustomerNum&#34; sütun adını &#34;CustomerID&#34; olarak ve &#34;PhoneNum&#34; sütun adını &#34;Phone&#34; olarak değiştirir.
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
Tablodaki &#34;NewCol&#34; sütun adını &#34;NewColumn&#34; olarak değiştirir; sütun mevcut değilse yoksayar.
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
