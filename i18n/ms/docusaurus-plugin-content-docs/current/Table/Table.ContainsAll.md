---
title: Table.ContainsAll
---

# Table.ContainsAll


## Description

Menunjukkan sama ada semua rekod yang ditentukan muncul sebagai baris dalam jadual.


## Syntax

```powerquery
Table.ContainsAll(
    table as table,
    rows as list,
    optional equationCriteria as any
) as logical
```


## Details

Menunjukkan sama ada semua rekod yang ditentukan dalam senarai rekod <code>rows</code>, muncul sebagai baris dalam <code>table</code>.    Parameter pilihan <code>equationCriteria</code>, mungkin ditentukan untuk mengawal perbandingan antara baris pada jadual.


## Examples

### Example #1 
Tentukan sama ada jadual mengandungi semua baris, membandingkan lajur sahaja [CustomerID].
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    },
    "CustomerID"
)
```

Result: 
```powerquery
true
```


### Example #2 
Tentukan sama ada jadual mengandungi semua baris.
```powerquery
Table.ContainsAll(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    {
        [CustomerID = 1, Name = "Bill"],
        [CustomerID = 2, Name = "Fred"]
    }
)
```

Result: 
```powerquery
false
```




## Category
Table.Membership
