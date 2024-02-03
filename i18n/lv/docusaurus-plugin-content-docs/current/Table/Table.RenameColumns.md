---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

Tiek pārdēvēta forma \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Tabulā <code>table</code> tiek veikta norādītā kolonnu pārdēvēšana. Aizstāšanas operācijā <code>renames</code> ir ietverts saraksts, kurā ir divas vērtības — vecais kolonnas nosaukums un jaunais kolonnas nosaukums.    Ja kolonna nepastāv, tiek aktivizēts izņēmums, ja neobligātais parametrs <code>missingField</code> nenorāda alternatīvu (piem., <code>MissingField.UseNull</code> vai <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Aizvietojiet tabulā kolonnas nosaukumu &#34;CustomerNum&#34; ar &#34;CustomerID&#34;.
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
Aizvietojiet tabulā kolonnas nosaukumu &#34;CustomerNum&#34; ar &#34;CustomerID&#34; un &#34;PhoneNum&#34; ar &#34;Phone&#34;.
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
Aizstājiet tabulā kolonnas nosaukumu &#34;NewCol&#34; ar &#34;NewColumn&#34; un ignorējiet, ja kolonna nepastāv.
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
