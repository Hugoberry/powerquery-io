---
title: Record.RenameFields
---

# Record.RenameFields


Aplica mudanças de nome a partir de uma lista com o formato \{ old, new }.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Remarks

Devolve um registo depois de mudar os campos existentes na entrada <code>record</code> para os novos nomes de campos especificados na lista <code>renames</code>. Para efetuar várias mudanças de nome, é possível utilizar uma lista aninhada (\{ \{antigo1, novo1}, \{antigo2, novo2} }.


## Examples

### Example #1 
Mudar o nome do campo &#34;UnitPrice&#34; para &#34;Price&#34; no registo.
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
Mudar os nomes dos campos &#34;UnitPrice&#34; para &#34;Preço&#34; e &#34;OrderNum&#34; para &#34;OrderID&#34;  no registo.
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
