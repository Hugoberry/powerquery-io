---
title: Table.FindText
---

# Table.FindText


## Description

Vráti všetky riadky obsahujúce daný text v tabuľke.


## Syntax

```powerquery
Table.FindText(
    table as table,
    text as text
) as table
```


## Details

Vráti riadky v tabuľke <code>table</code> obsahujúce text <code>text</code>. Ak sa text nenájde, vráti sa prázdna tabuľka.


## Examples

### Example #1 
Nájdite v tabuľke riadky obsahujúce hodnotu Bob.
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
