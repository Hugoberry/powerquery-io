---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

Anvender nye navne i formatet \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Udfører de angivne omdøbninger på kolonnerne i tabellen <code>table</code>. En erstatningshandling <code>renames</code> består af en liste med to værdier, det gamle kolonnenavn og det nye kolonnenavn, som findes på en liste.    Hvis kolonnen ikke findes, udløses der en undtagelse, medmindre den valgfrie parameter <code>missingField</code> angiver et alternativ (f.eks. <code>MissingField.UseNull</code> eller <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Erstat kolonnenavnet &#34;CustomerNum&#34; med &#34;CustomerID&#34; i tabellen.
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
Erstat kolonnenavnet &#34;CustomerNum&#34; med &#34;CustomerID&#34; og &#34;PhoneNum&#34; med &#34;Phone&#34; i tabellen.
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
Erstat kolonnenavnet &#34;NewCol&#34; med &#34;NewColumn&#34; i tabellen, og ignorer det, hvis kolonnen ikke findes.
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
