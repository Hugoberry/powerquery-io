---
title: Table.FindText
---

# Table.FindText


## Description

Vrne vse vrstice, ki vsebujejo dano besedilo v tabeli.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Details

Vrne vrstice v tabeli <code>table</code>, ki vsebujejo besedilo <code>text</code>. Če besedila ni mogoče najti, je vrnjena prazna tabela.


## Examples

### Example #1 
Poiščite vrstice v tabeli, ki vsebujejo &#34;Bob&#34;.
```powerquery
Table.FindText(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"],
        [CustomerID = 4, Name = "Ringo", Phone = "232-1550"]
    }),
    "Bob"
)
```

Result: 
```powerquery
Table.FromRecords({[CustomerID = 1, Name = "Bob", Phone = "123-4567"]})
```




## Category
Table.Row operations
