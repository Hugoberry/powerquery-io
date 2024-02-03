---
title: Table.FromValue
---

# Table.FromValue


## Description

Mencipta jadual dengan lajur daripada nilai yang ditentukan.


## Syntax

```powerquery
Table.FromValue(
    value as any,
    optional options as record
) as table
```


## Details

Mencipta jadual dengan lajur yang mengandungi nilai yang diberikan atau senarai nilai, <code>value</code>. Parameter rekod pilihan, <code>options</code>, boleh ditentukan untuk mengawal pilihan berikut:    <ul>    <li> <code>DefaultColumnName</code> : Nama lajur yang digunakan semasa membina jadual daripada senarai atau nilai skalar.</li>    </ul>  


## Examples

### Example #1 
Cipta jadual daripada nilai 1.
```powerquery
Table.FromValue(1)
```

Result: 
```powerquery
Table.FromRecords({[Value = 1]})
```


### Example #2 
Mencipta jadual daripada senarai.
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
Wujudkan jadual daripada nilai 1 dengan nama lajur tersuai.
```powerquery
Table.FromValue(1, [DefaultColumnName = "MyValue"])
```

Result: 
```powerquery
Table.FromRecords({[MyValue = 1]})
```




## Category
Table.Table construction
