---
title: Table.First
---

# Table.First


Menghasilkan baris pertama atau nilai default yang ditetapkan.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Remarks

Menghasilkan baris pertama dalam `table` atau nilai default opsional, `default`, jika tabel kosong.


## Examples

### Example #1
Mencari baris pertama dalam tabel.
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
Mencari baris pertama dalam tabel `({})` atau menghasilkan \[a = 0, b = 0\] jika kosong.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
