---
title: Table.Last
---

# Table.Last


## Description

Returnează ultimul rând sau o valoare implicită specificată.


## Syntax

```powerquery
Table.Last(
    table as table,
    optional default as any
) as any
```


## Details

Returnează ultimul rând din <code>table</code> sau o valoare implicită opţională, <code>default</code>, dacă tabelul este necompletat.


## Examples

### Example #1 
Găsiți ultimul rând al tabelului.
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
Găsiţi ultimul rând al tabelului &lt;code&gt;(\{})&lt;/code&gt; sau returnaţi [a = 0, b = 0] dacă este necompletat.
```powerquery
Table.Last(Table.FromRecords({}), [a = 0, b = 0])
```

Result: 
```powerquery
[a = 0, b = 0]
```




## Category
Table.Row operations
