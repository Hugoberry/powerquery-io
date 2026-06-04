---
title: Record.Combine
---

# Record.Combine


Kombinuje záznamy v danom zozname.


## Syntax

```powerquery
Record.Combine(
    records as list
) as record
```


## Remarks

Kombinuje záznamy v danom zozname `records`. Ak zoznam `records` obsahuje hodnoty bez záznamu, vráti sa chyba.


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
