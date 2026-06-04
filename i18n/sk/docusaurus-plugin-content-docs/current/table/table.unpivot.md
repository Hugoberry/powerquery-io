---
title: Table.Unpivot
---

# Table.Unpivot


Preloží množinu stĺpcov v tabuľke na páry atribút-hodnota.


## Syntax

```powerquery
Table.Unpivot(
    table as table,
    pivotColumns as list,
    attributeColumn as text,
    valueColumn as text
) as table
```


## Remarks

Preloží množinu stĺpcov v tabuľke na páry atribút-hodnota v kombinácii so zvyškom hodnôt v každom riadku.


## Examples

### Example #1
Použite stĺpce "a", "b" a "c" v tabuľke `({[ key = "x", a = 1, b = null, c = 3 ], [ key = "y", a = 2, b = 4, c = null ]})` a zrušte ich otočenie na páry atribút-hodnota.
```powerquery
Table.Unpivot(
    Table.FromRecords({
        [key = "x", a = 1, b = null, c = 3],
        [key = "y", a = 2, b = 4, c = null]
    }),
    {"a", "b", "c"},
    "attribute",
    "value"
)
```

Result: 
```powerquery
Table.FromRecords({
    [key = "x", attribute = "a", value = 1],
    [key = "x", attribute = "c", value = 3],
    [key = "y", attribute = "a", value = 2],
    [key = "y", attribute = "b", value = 4]
})
```




## Category
Table.Column operations
