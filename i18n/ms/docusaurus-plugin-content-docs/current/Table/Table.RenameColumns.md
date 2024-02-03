---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

Menggunakan nama semula bentuk \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Melaksanakan nama semua yang ditentukan pada lajur dalam jadual <code>table</code>. Operasi penggantian <code>renames</code> terdiri daripada senarai dengan dua nilai, nama lajur lama dan nama lajur baru, diberi dalam senarai.    Jika lajur tidak wujud, pengecualian dikembalikan melainkan parameter pilihan <code>missingField</code> menentukan alternatif (cth. <code>MissingField.UseNull</code> atau <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Gantikan nama lajur &#34;CustomerNum&#34; dengan &#34;CustomerID&#34; dalam jadual.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", Phone = "123-4567"]}),
    {"CustomerNum", "CustomerID"}
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #2 
Gantikan nama lajur &#34;CustomerNum&#34; dengan &#34;CustomerID&#34; dan &#34;PhoneNum&#34; dengan &#34;Phone&#34; dalam jadual.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerNum = 1, Name = "Bob", PhoneNum = "123-4567"]}),
    {
        {"CustomerNum", "CustomerID"},
        {"PhoneNum", "Phone"}
    }
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```


### Example #3 
Gantikan nama lajur &#34;NewCol&#34; dengan &#34;NewColumn&#34; dalam jadual dan abaikan jika lajur itu tidak wujud.
```powerquery
Table.RenameColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    {"NewCol", "NewColumn"},
    MissingField.Ignore
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Column operations
