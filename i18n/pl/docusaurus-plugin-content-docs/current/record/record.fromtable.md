---
title: Record.FromTable
---

# Record.FromTable


Tworzy rekord na podstawie tabeli w formie \{[Name = name, Value = value]}.


## Syntax

```powerquery
Record.FromTable(
    table as table
) as record
```


## Remarks

Zwraca rekord na podstawie tabeli rekordów <code>table</code> zawierającej nazwy i wartości pól <code>\{[Name = name, Value = value]}</code>. Jeśli nazwy pól nie są unikatowe, jest zwracany wyjątek.


## Examples

### Example #1 
Utwórz rekord na podstawie tabeli w formie Table.FromRecords(\{[Name = &#34;CustomerID&#34;, Value = 1], [Name = &#34;Name&#34;, Value = &#34;Bob&#34;], [Name = &#34;Phone&#34;, Value = &#34;123-4567&#34;]}).
```powerquery
Record.FromTable(
    Table.FromRecords({
        [Name = "CustomerID", Value = 1],
        [Name = "Name", Value = "Bob"],
        [Name = "Phone", Value = "123-4567"]
    })
)
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Serialization
