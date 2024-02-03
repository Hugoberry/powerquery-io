---
title: Table.FromValue
---

# Table.FromValue


## Description

Membuat tabel dengan kolom dari nilai yang diberikan.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

Membuat tabel dengan kolom berisi nilai yang diberikan atau daftar nilai, <code>value</code>. Parameter catatan opsional, <code>options</code>, dapat ditentukan untuk mengontrol opsi berikut:    <ul>    <li> <code>DefaultColumnName</code> : Nama kolom yang digunakan saat membuat tabel dari nilai skala atau daftar.</li>    </ul>  


## Examples

### Example #1 
Membuat tabel dari nilai 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
Membuat tabel dari daftar.
```powerquery
Table.FromValue({1, "Bob", "123-4567"})
```

Result: 
```powerquery
Table.FromRecords({
    [Value = 1],
    [Value = "Bob"],
    [Value = "123-4567"]
})
```


### Example #3 
Membuat tabel dari nilai 1, dengan nama kolom ubahsuaian.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
