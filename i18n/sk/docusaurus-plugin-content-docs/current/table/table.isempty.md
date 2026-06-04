---
title: Table.IsEmpty
---

# Table.IsEmpty


Udáva, či tabuľka obsahuje nejaké riadky.


## Syntax

```powerquery
Table.IsEmpty(
    table as table
) as logical
```


## Remarks

Udáva, či tabuľka `table` obsahuje nejaké riadky. Vráti hodnotu `true`, ak neobsahuje žiadne riadky (t. j. tabuľka je prázdna), inak vráti hodnotu `false`.


## Examples

### Example #1
Určte, či je tabuľka prázdna.
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
Určte, či tabuľka `({})` je prázdna.
```powerquery
Table.IsEmpty(Table.FromRecords({}))
```

Result: 
```powerquery
true
```




## Category
Table.Information
