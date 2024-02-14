---
title: Table.AlternateRows
---

# Table.AlternateRows


Bevarar den ursprungliga förskjutningen och växlar sedan mellan att använda och hoppa över efterföljande rader.


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

Bevarar den ursprungliga förskjutningen och växlar sedan mellan att använda och hoppa över efterföljande rader.    <ul>       <li><code>table</code>: Indatatabellen.</li>       <li><code>offset</code>: Antalet rader som ska bevaras innan iterationer startas.</li>       <li><code>skip</code>: Antalet rader som ska tas bort i varje iteration.</li>       <li><code>take</code>: Antalet rader som ska bevaras i varje iteration.</li>    </ul>    


## Examples

### Example #1 
Skapa en tabell från tabellen som, med början från den första raden, hoppar över 1 värde och sedan bevarar 1 värde.
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
