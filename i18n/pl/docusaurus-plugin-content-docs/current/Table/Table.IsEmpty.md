---
title: Table.IsEmpty
---

# Table.IsEmpty


## Description

Wskazuje, czy tabela zawiera jakiekolwiek wiersze.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Details

Wskazuje, czy tabela <code>table</code> zawiera jakiekolwiek wiersze. Zwraca wartość <code>true</code>, jeśli tabela nie zawiera żadnych wierszy (jest pusta); w przeciwnym razie zwraca wartość <code>false</code>.


## Examples

### Example #1 
Ustal, czy tabela jest pusta.
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
Ustal, czy tabela &lt;code&gt;(\{})&lt;/code&gt; jest pusta.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
