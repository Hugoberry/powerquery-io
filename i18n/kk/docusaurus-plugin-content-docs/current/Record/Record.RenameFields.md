---
title: Record.RenameFields
---

# Record.RenameFields


## Description

\{ old, new } түріндегі тізімнен қайта атауларды қолданады.


## Syntax

```powerquery
Record.RenameFields(
    record as record,
    renames as list,
    optional missingField as MissingField.Type
) as record
```


## Details

Кіріс <code>record</code> ішіндегі <code>renames</code> тізімінде көрсетілген жаңа өріс атауларын қайта атаудан кейін жазбаны қайтарады. Бірнеше қайта атау үшін енгізілген тізімді (\{ \{old1, new1}, \{old2, new2} } пайдалануға болады.


## Examples

### Example #1 
Жазбадан &#34;UnitPrice&#34; өрісінің атауын &#34;Price&#34; деп өзгерту.
```powerquery
Record.RenameFields(
    [OrderID = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {"UnitPrice", "Price"}
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```


### Example #2 
Жазбадан &#34;UnitPrice&#34; өрісін &#34;Price&#34; деп және &#34;OrderNum&#34; өрісін &#34;OrderID&#34; деп өзгерту.
```powerquery
Record.RenameFields(
    [OrderNum = 1, CustomerID = 1, Item = "Fishing rod", UnitPrice = 100.0],
    {
        {"UnitPrice", "Price"},
        {"OrderNum", "OrderID"}
    }
)
```

Result: 
```powerquery
[OrderID = 1, CustomerID = 1, Item = "Fishing rod", Price = 100.0]
```




## Category
Record.Transformations
