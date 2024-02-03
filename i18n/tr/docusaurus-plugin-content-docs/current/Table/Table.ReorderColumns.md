---
title: Table.ReorderColumns
---

# Table.ReorderColumns


## Description

Belirtilen sırada sütunları içeren bir tablo döndürür.


## Syntax

```powerquery
Table.ReorderColumns(
    table as table,
    columnOrder as list,
    optional missingField as MissingField.Type
) as table
```


## Details

<code>table</code> girdisinden <code>columnOrder</code> tarafından belirtilen sırada sütunları içeren bir tablo döndürür. Listede belirtilmeyen sütunlar yeniden sıralanmaz.     Sütun yoksa, <code>missingField</code> isteğe bağlı parametresi bir alternatif belirtmediği sürece özel durum oluşur (örn. <code>MissingField.UseNull</code> veya <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Tabloda [Phone] ve [Name] sütunlarının sırasını değiştirir.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Phone = "123-4567", Name = "Bob"]}),
    {"Name", "Phone"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
Tabloda [Phone] ve [Address] sütunlarının sırasını değiştirir veya &#34;MissingField.Ignore&#34; kullanır. [Address] var olmadığı için tabloyu değiştirmez.
```powerquery
Table.ReorderColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"Phone", "Address"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
