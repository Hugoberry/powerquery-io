---
title: Table.PrefixColumns
---

# Table.PrefixColumns


## Description

Vrne tabelo, v kateri je pred vsemi stolpci navedeno dano besedilo.


## Syntax

```powerquery
Table.PrefixColumns(
    table as table,
    prefix as text
) as table
```


## Details

Vrne tabelo, v kateri sta pred imeni vseh stolpcev iz <code>table</code> navedena dano besedilo <code>prefix</code> in pika v obliki <code>prefix</code><code>.ColumnName</code>.


## Examples

### Example #1 
Pred stolpci v tabeli navedite &#34;MojaTabela&#34;.
```powerquery
Table.PrefixColumns(
    Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]}),
    "MyTable"
)
```

Result: 
```powerquery
Table.FromRecords({[MyTable.CustomerID = 1, MyTable.Name = "Bob", MyTable.Phone = "123-4567"]})
```




## Category
Table.Column operations
