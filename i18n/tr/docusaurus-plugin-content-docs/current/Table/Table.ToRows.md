---
title: Table.ToRows
---

# Table.ToRows


Bir tablodan satır değerlerine yönelik iç içe yerleştirilmiş tablo listesi oluşturur.


## Syntax

```powerquery
Table.ToRows(
    table as table
) as list
```


## Remarks

<code>table</code> tablosundan iç içe yerleştirilmiş tablo listesi oluşturur.  Her liste öğesi, satır değerlerini içeren bir iç listedir.


## Examples

### Example #1 
Tabloda yer alan satır değerlerinin bir listesini oluşturur.
```powerquery
Table.ToRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
{
    {1, "Bob", "123-4567"},
    {2, "Jim", "987-6543"},
    {3, "Paul", "543-7890"}
}
```




## Category
Table.Conversions
