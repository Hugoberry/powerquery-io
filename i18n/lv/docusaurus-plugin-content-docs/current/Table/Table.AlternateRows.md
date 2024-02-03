---
title: Table.AlternateRows
---

# Table.AlternateRows


## Description

Tiek saglabāta sākotnējā nobīde, un pēc tam tiek pārmaiņus paturētas un izlaistas nākamās rindas.


## Syntax

```powerquery
Table.AlternateRows(
    table as table,
    offset as number,
    skip as number,
    take as number
) as table
```


## Details

Tiek saglabāta sākotnējā nobīde, un pēc tam tiek pārmaiņus paturētas un izlaistas nākamās rindas.    <ul>       <li><code>table</code>: ievades tabula.</li>       <li><code>offset</code>: pirms iterāciju sākšanas saglabājamo rindu skaits.</li>       <li><code>skip</code>: katras iterācijas ietvaros noņemamo rindu skaits.</li>       <li><code>take</code>: katras iterācijas ietvaros paturamo rindu skaits.</li>    </ul>    


## Examples

### Example #1 
Izveidojiet tabulu no tabulas, saglabājot pirmo rindu un pēc tam secīgi izlaižot 1 vērtību un paturot 1 vērtību.
```powerquery
Table.AlternateRows(
    Table.FromRecords({
        [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
        [CustomerID = 2, Name = "Jim", Phone = "987-6543"],
        [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
    }),
    1,
    1,
    1
)
```

Result: 
```powerquery
Table.FromRecords({
    [CustomerID = 1, Name = "Bob", Phone = "123-4567"],
    [CustomerID = 3, Name = "Paul", Phone = "543-7890"]
})
```




## Category
Table.Row operations
