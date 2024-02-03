---
title: Table.Last
---

# Table.Last


## Description

Pateikiama paskutinioji nurodytos numatytosios reikšmės eilutė.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Details

Pateikiama paskutinė <code>table</code> eilutė arba pasirenkama numatytoji reikšmė <code>default</code>, jei lentelė yra tuščia.


## Examples

### Example #1 
Raskite paskutinę lentelės eilutę.
```powerquery
Table.Last(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 3, Name = "Paul", Phone = "543-7890"]
```


### Example #2 
Raskite paskutinę lentelės &lt;code&gt;(\{})&lt;/code&gt; eilutę arba pateikiama [a = 0, b = 0], jei lentelė tuščia.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
