---
title: Table.Partition
---

# Table.Partition


Tabloyu belirtilen grup ve sütun sayısına bağlı olarak tablo listesi olarak bölümler.


## Syntax

```powerquery
Table.Partition(
    table as table,
    column as text,
    groups as number,
    hash as function
) as list
```


## Remarks

`table` öğesini `column` değerine ve `hash` işlevine bağlı olarak `groups` tablo listesi olarak bölümler. `hash` işlevi, satırın karma değerini almak üzere `column` satırının değerine uygulanır. `groups` karma değer modulo işleci, satırın döndürülen tabloların hangilerine ekleneceğini belirler.

-   `table`: Bölümlenecek tablo.
-   `column`: Satırın hangi döndürülen tabloda olduğunu belirlemek üzere karma sütunu.
-   `groups`: Girdi tablosunun bölümleneceği tablo sayısı.
-   `hash`: Karma değeri almak üzere uygulanan işlev.


## Examples

### Example #1
`({[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})` tablosunu sütunların değerini karma işlevi olarak kullanarak \[a\] sütunu üzerinde 2 tabloya bölümler.
```powerquery
Table.Partition(
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 1, b = 4],
        [a = 2, b = 4],
        [a = 1, b = 4]
    }),
    "a",
    2,
    each _
)
```

Result: 
```powerquery
{
    Table.FromRecords({
        [a = 2, b = 4],
        [a = 2, b = 4]
    }),
    Table.FromRecords({
        [a = 1, b = 4],
        [a = 1, b = 4]
    })
}
```




## Category
Table.Row operations
