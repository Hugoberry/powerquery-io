---
title: Record.RenameFields
---

# Record.RenameFields


## Description

Aplica o(s) renomeamento(s) da lista no formato \{ old, new }.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Devolve un rexistro despois de renomear campos da entrada <code>record</code> aos novos nomes de campo especificados na lista <code>renames</code>. Para renomear varios, pódese utilizar unha lista aniñada (\{ \{old1, new1}, \{old2, new2} }.


## Examples

### Example #1 
Renomear o campo &#34;UnitPrice&#34; a &#34;Price&#34; do rexistro.
```powerquery
Record.RenameFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {"UnitPrice", "Price"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2 
Renomear os campos &#34;UnitPrice&#34; a &#34;Price&#34; e &#34;OrderNum&#34; a &#34;OrderID&#34;  do rexistro.
```powerquery
Record.RenameFields(
    [OrderNum = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {
        {"UnitPrice", "Price"},
        {"OrderNum", "OrderID"}
    }
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
