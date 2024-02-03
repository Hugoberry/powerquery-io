---
title: Table.IsEmpty
---

# Table.IsEmpty


## Description

Menunjukkan apakah tabel berisi baris.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Details

Menunjukkan apakah <code>table</code> berisi baris. Menghasilkan <code>true</code> jika tidak ada baris (misalnya, tabel kosong), <code>false</code> jika sebaliknya.


## Examples

### Example #1 
Menentukan apakah tabel kosong.
```powerquery
Table.IsEmpty(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
false
```


### Example #2 
Menentukan apakah tabel &lt;code&gt;(\{})&lt;/code&gt; kosong.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
