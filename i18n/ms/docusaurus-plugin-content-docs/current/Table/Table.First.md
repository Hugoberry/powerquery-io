---
title: Table.First
---

# Table.First


## Description

Mengembalikan baris pertama atau nilai lalai yang ditentukan.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Details

Mengembalikan baris pertama <code>table</code> atau nilai lalai pilihan, <code>default</code>, jika jadual kosong.


## Examples

### Example #1 
Cari baris pertama jadual .
```powerquery
Table.First(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Cari baris pertama jadual &lt;code&gt;(\{})&lt;/code&gt; atau kembalikan [a = 0, b = 0] jika kosong.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
