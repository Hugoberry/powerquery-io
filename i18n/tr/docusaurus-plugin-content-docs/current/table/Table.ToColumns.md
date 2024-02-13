---
title: Table.ToColumns
---

# Table.ToColumns


Bir tablodan sütun değerlerine yönelik iç içe yerleştirilmiş tablo listesi oluşturur.


## Syntax

```powerquery
Table.ToColumns(
    table as table
) as list
```


## Remarks

<code>table</code> tablosundan iç içe yerleştirilmiş tablo listesi oluşturur.  Her liste öğesi, sütun değerlerini içeren bir iç listedir.


## Examples

### Example #1 
Tabloda yer alan sütun değerlerinin bir listesini oluşturur.
```powerquery
Table.ToColumns(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"]
    })
)
```

Result: 
```powerquery
{{1, 2}, {"Bob", "Jim"}, {"123-4567", "987-6543"}}
```




## Category
Table.Conversions
