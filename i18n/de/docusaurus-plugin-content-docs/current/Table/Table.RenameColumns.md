---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

Wendet Umbenennungen im Format &#34;\{old, new}&#34; an.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Nimmt die angegebenen Umbenennungen der Spalten in der Tabelle "<code>table</code>" vor. Ein Ersetzungsvorgang (<code>renames</code>) besteht aus einer Liste mit zwei Werten (alter und neuer Spaltenname), die in einer Liste bereitgestellt wird.    Ist die Spalte nicht vorhanden, wird eine Ausnahme ausgelöst, sofern nicht mithilfe des optionalen Parameters "<code>missingField</code>" eine Alternative angegeben wurde (beispielsweise <code>MissingField.UseNull</code> oder <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Ersetzt den Spaltennamen &#34;CustomerNum&#34; in der Tabelle durch &#34;CustomerID&#34;.
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
Ersetzt den Spaltennamen &#34;CustomerNum&#34; in der Tabelle durch &#34;CustomerID&#34; und &#34;PhoneNum&#34; durch &#34;Phone&#34;.
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
Ersetzt den Spaltennamen &#34;NewCol&#34; in der Tabelle durch &#34;NewColumn&#34;. Wenn die Spalte nicht vorhanden ist, wird der Vorgang ignoriert.
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
