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

<code>table</code> öğesini <code>column</code> değerine ve <code>hash</code> işlevine bağlı olarak <code>groups</code> tablo listesi olarak bölümler.    <code>hash</code> işlevi, satırın karma değerini almak üzere <code>column</code> satırının değerine uygulanır. <code>groups</code> karma değer modulo işleci, satırın döndürülen tabloların hangilerine ekleneceğini belirler.    <ul>       <li><code>table</code>: Bölümlenecek tablo.</li>       <li><code>column</code>: Satırın hangi döndürülen tabloda olduğunu belirlemek üzere karma sütunu.</li>       <li><code>groups</code>: Girdi tablosunun bölümleneceği tablo sayısı.</li>       <li><code>hash</code>: Karma değeri almak üzere uygulanan işlev.</li>    </ul>  


## Examples

### Example #1 
&lt;code&gt;(\{[a = 2, b = 4], [a = 6, b = 8], [a = 2, b = 4], [a = 1, b = 4]})&lt;/code&gt; tablosunu sütunların değerini karma işlevi olarak kullanarak [a] sütunu üzerinde 2 tabloya bölümler.
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
