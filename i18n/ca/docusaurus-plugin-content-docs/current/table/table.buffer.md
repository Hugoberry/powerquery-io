---
title: Table.Buffer
---

# Table.Buffer


Emmagatzema a la memòria intermèdia una taula i l'aïlla de canvis externs durant l'avaluació.


## Syntax

```powerquery
Table.Buffer(
    table as table,
    optional options as record
) as table
```


## Remarks

Buffers a table in memory, isolating it from external changes during evaluation. Buffering is shallow. It forces the evaluation of any scalar cell values, but leaves non-scalar values (records, lists, tables, and so on) as-is.

-   `table`: The table to buffer in memory.
-   `options`: (Optional) The following options record values can be used:
    -   `BufferMode`: The buffer mode that describes the type of buffering to be performed. This option can be either `BufferMode.Eager` or `BufferMode.Delayed`.

Using this function might or might not make your queries run faster. In some cases, it can make your queries run more slowly due to the added cost of reading all the data and storing it in memory, as well as the fact that buffering prevents downstream folding. If the data doesn't need to be buffered but you just want to prevent downstream folding, use `Table.StopFolding` instead.


## Examples

### Example #1
Carrega a la memòria totes les files d'una taula SQL perquè les operacions descendents deixin de poder fer consultes a la instància d'SQL Server.
```powerquery
let
    Source = Sql.Database("SomeSQLServer", "MyDb"),
    MyTable = Source{[Item="MyTable"]}[Data],
    BufferMyTable = Table.Buffer(MyTable)
in
    BufferMyTable
```

Result: 
```powerquery
table
```




## Category
Table.Other
