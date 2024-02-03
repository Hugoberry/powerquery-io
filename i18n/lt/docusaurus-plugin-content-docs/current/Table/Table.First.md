---
title: Table.First
---

# Table.First


## Description

Pateikiama pirmoji nurodytos numatytosios reikšmės eilutė.


## Syntax

```powerquery
Table.First(
    table as table,
    optional default as any
) as any
```


## Details

Pateikiama pirmoji <code>table</code> eilutė arba pasirenkama numatytoji reikšmė <code>default</code>, jei lentelė yra tuščia.


## Examples

### Example #1 
Raskite pirmąją lentelės eilutę.
```powerquery
Table.First(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```


### Example #2 
Raskite pirmąją lentelės &lt;code&gt;(\{})&lt;/code&gt; eilutę arba pateikiama [a = 0, b = 0], jei lentelė tuščia.
```powerquery
Table.First(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
