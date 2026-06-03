---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


Bir tablo sütununu içeren tabloda birden çok sütuna toplar.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Remarks

`table`\[`column`\] içindeki tabloları, tablolar için toplam değerleri içeren birden çok sütuna toplar. `aggregations` toplanacak tabloları içeren sütunları, değerlerini oluşturmak üzere tablolara uygulamak için toplama işlevlerini ve oluşturulacak toplama sütunlarının adlarını belirtmek için kullanılır.


## Examples

### Example #1
`{[t = {[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}` tablosunda `[t]` içindeki tablo sütunlarını `[t.a]` toplamına, en büyük ve ek küçük `[t.b]` değerine ve `[t.a]` içindeki değer sayısına ekler.
```powerquery
Table.AggregateTableColumn(
    Table.FromRecords(
        {
            [
                t = Table.FromRecords({
                    [a = 1, b = 2, c = 3],
                    [a = 2, b = 4, c = 6]
                }),
                b = 2
            ]
        },
        type table [t = table [a = number, b = number, c = number], b = number]
    ),
    "t",
    {
        {"a", List.Sum, "sum of t.a"},
        {"b", List.Min, "min of t.b"},
        {"b", List.Max, "max of t.b"},
        {"a", List.Count, "count of t.a"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[#"sum of t.a" = 3, #"min of t.b" = 2, #"max of t.b" = 4, #"count of t.a" = 2, b = 2]})
```




## Category
Table.Transformation
