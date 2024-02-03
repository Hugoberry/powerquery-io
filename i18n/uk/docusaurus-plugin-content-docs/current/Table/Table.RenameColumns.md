---
title: Table.RenameColumns
---

# Table.RenameColumns


## Description

Застосовує перейменування у вигляді \{old, new}.


## Syntax

```powerquery
Table.RenameColumns(
    table as table,
    renames as list,
    optional missingField as MissingField.Type
) as table
```


## Details

Вносить задані перейменування у стовпці таблиці <code>table</code>. Операція заміни <code>renames</code> складається зі списку двох значень, старого імені стовпця та нового імені стовпця , які надаються у списку.    Якщо стовпець не існує, повертається виняткова ситуація, якщо додатковий параметр <code>missingField</code> не визначає іншого (наприклад, <code>MissingField.UseNull</code> або <code>MissingField.Ignore</code>).


## Examples

### Example #1 
Замінити в таблиці назву стовпця &#34;CustomerNum&#34; на &#34;CustomerID&#34;.
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
Замінити в таблиці назви стовпців &#34;CustomerNum&#34; на &#34;CustomerID&#34; та &#34;PhoneNum&#34; на &#34;Phone&#34;.
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
Замінити в таблиці назву стовпця &#34;NewCol&#34; на &#34;NewColumn&#34;. Не виконувати жодних дій, якщо його не існує.
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
