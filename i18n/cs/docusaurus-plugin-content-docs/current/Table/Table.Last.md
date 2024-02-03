---
title: Table.Last
---

# Table.Last


## Description

Vrátí poslední řádek nebo zadanou výchozí hodnotu.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Details

Vrátí poslední řádek tabulky <code>table</code> nebo volitelnou výchozí hodnotu <code>default</code>, pokud je tabulka prázdná.


## Examples

### Example #1 
Najde poslední řádek tabulky.
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
Najde poslední řádek tabulky &lt;code&gt;(\{})&lt;/code&gt; nebo vrátí řádek [a = 0, b = 0], pokud je tabulka prázdná.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
