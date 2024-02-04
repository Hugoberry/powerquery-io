---
title: Record.FromTable
---

# Record.FromTable


## Description

Erstellt einen Datensatz auf der Grundlage einer Tabelle im Format &#34;\{[Name = name, Value = value]}&#34;.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Details

Gibt einen Datensatz auf der Grundlage einer Datensatztabelle (<code>table</code>) mit Feld- und Wertnamen (<code>\{[Name = name, Value = value]}</code>) zurück. Sind die Feldnamen nicht eindeutig, wird eine Ausnahme ausgelöst.


## Examples

### Example #1 
Erstellt einen Datensatz auf der Grundlage der Tabelle im Format &#39;Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]})&#39;.
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
