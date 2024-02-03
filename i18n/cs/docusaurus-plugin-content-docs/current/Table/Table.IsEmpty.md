---
title: Table.IsEmpty
---

# Table.IsEmpty


## Description

Určuje, jestli tabulka obsahuje řádky.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Details

Určuje, jestli tabulka <code>table</code> obsahuje řádky. Vrátí hodnotu <code>true</code>, pokud nejsou zjištěné žádné řádky (pokud je například tabulka prázdná), jinak vrátí hodnotu <code>false</code>.


## Examples

### Example #1 
Určí, jestli je tabulka prázdná.
```powerquery
Table.IsEmpty(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    })
)
```

Result: 
```powerquery
false
```


### Example #2 
Určí, zda je tabulka &lt;code&gt;(\{})&lt;/code&gt; prázdná.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
