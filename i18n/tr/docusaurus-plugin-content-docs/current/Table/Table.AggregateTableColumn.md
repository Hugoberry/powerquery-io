---
title: Table.AggregateTableColumn
---

# Table.AggregateTableColumn


## Description

Bir tablo sütununu içeren tabloda birden çok sütuna toplar.


## Syntax

```powerquery
Table.AggregateTableColumn(
    table as table,
    column as text,
    aggregations as list
) as table
```


## Details

<code>table</code>[<code>column</code>] içindeki tabloları, tablolar için toplam değerleri içeren birden çok sütuna toplar. <code>aggregations</code> toplanacak tabloları içeren sütunları, değerlerini oluşturmak üzere tablolara uygulamak için toplama işlevlerini ve oluşturulacak toplama sütunlarının adlarını belirtmek için kullanılır.


## Examples

### Example #1 
&lt;code&gt;\{[t = \{[a=1, b=2, c=3], [a=2,b=4,c=6]}, b = 2]}&lt;/code&gt; tablosunda &lt;code&gt;[t]&lt;/code&gt; içindeki tablo sütunlarını &lt;code&gt;[t.a]&lt;/code&gt; toplamına, en büyük ve ek küçük &lt;code&gt;[t.b]&lt;/code&gt; değerine ve &lt;code&gt;[t.a]&lt;/code&gt; içindeki değer sayısına ekler.
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
