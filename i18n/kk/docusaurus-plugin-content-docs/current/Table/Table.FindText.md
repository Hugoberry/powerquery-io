---
title: Table.FindText
---

# Table.FindText


## Description

Кестеде берілген мәтінді қамтитын барлық жолдарды қайтарады.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Details

<code>table</code> кестесіндегі <code>text</code> мәтінін қамтитын жолдарды қайтарады. Егер мәтін табылмаса, бос кесте қайтарылады.


## Examples

### Example #1 
Кестедегі &#34;Bob&#34; болатын жолдарды анықтау.
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
