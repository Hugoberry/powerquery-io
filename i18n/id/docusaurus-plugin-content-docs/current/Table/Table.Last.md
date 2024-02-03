---
title: Table.Last
---

# Table.Last


## Description

Menghasilkan baris terakhir atau nilai default yang ditetapkan.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Details

Menghasilkan baris terakhir dalam <code>table</code> atau nilai default opsional, <code>default</code>, jika tabel kosong.


## Examples

### Example #1 
Mencari baris terakhir dalam tabel.
```powerquery
Table.Last(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 3, Name = "Paul", Phone = "543-7890"]
```


### Example #2 
Mencari baris terakhir dalam tabel &lt;code&gt;(\{})&lt;/code&gt; atau menghasilkan [a = 0, b = 0] jika kosong.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
