---
title: Record.Combine
---

# Record.Combine


## Description

Kombinuje záznamy v danom zozname.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Details

Kombinuje záznamy v danom zozname <code>records</code>. Ak zoznam <code>records</code> obsahuje hodnoty bez záznamu, vráti sa chyba.


## Examples

### Example #1 
Vytvorte kombinovaný záznam zo záznamov.
```powerquery
Record.Combine({
    [CustomerID = 1, Name = "Bob"],
    [Phone = "123-4567"]
})
```

Result: 
```powerquery
[CustomerID = 1, Name = "Bob", Phone = "123-4567"]
```




## Category
Record.Transformations
