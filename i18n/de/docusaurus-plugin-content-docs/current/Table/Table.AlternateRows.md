---
title: Table.AlternateRows
---

# Table.AlternateRows


Behält den Ausgangsoffset bei und wechselt dann zwischen Verwendung und Überspringung der anschließenden Zeilen.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Remarks

Behält den Ausgangsoffset bei und wechselt dann zwischen Verwendung und Überspringung der anschließenden Zeilen.    <ul>       <li><code>table</code>: Die Eingabetabelle.</li>       <li><code>offset</code>: Die Anzahl der beizubehaltenden Zeilen bis zum Beginn der Iterationen.</li>       <li><code>skip</code>: Die Anzahl von Zeilen, die pro Iteration entfernt werden sollen.</li>       <li><code>take</code>: Die Anzahl von Zeilen, die pro Iteration erhalten bleiben sollen.</li>    </ul>    


## Examples

### Example #1 
Gibt eine Tabelle aus der Tabelle zurück, die in der ersten Zeile beginnt, einen Wert überspringt und dann einen Wert beibehält.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
