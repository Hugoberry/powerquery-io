---
title: Table.FillDown
---

# Table.FillDown


Propaga il valore di una cella precedente alle celle con valori Null sottostanti nella colonna.


## Syntax

```powerquery
Table.FillDown(
    table as table,
    columns as list
) as table
```


## Remarks

Restituisce una tabella da <code>table</code> dove il valore di una cella precedente viene propagato alle celle con valori Null sottostanti in <code>columns</code>.


## Examples

### Example #1 
Restituire una tabella con i valori Null della colonna [Place] riempita con i valori sottostanti dalla tabella.
```powerquery
Table.FillDown(
    Table.FromRecords({
        [Place = 1, Name = "Bob"],
        [Place = null, Name = "John"],
        [Place = 2, Name = "Brad"],
        [Place = 3, Name = "Mark"],
        [Place = null, Name = "Tom"],
        [Place = null, Name = "Adam"]
    }),
    {"Place"}
)
```

Result: 
```powerquery
Table.FromRecords({
    [Place = 1, Name = "Bob"],
    [Place = 1, Name = "John"],
    [Place = 2, Name = "Brad"],
    [Place = 3, Name = "Mark"],
    [Place = 3, Name = "Tom"],
    [Place = 3, Name = "Adam"]
})
```




## Category
Table.Transformation
