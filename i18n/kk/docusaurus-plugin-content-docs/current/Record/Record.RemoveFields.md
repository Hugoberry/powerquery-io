---
title: Record.RemoveFields
---

# Record.RemoveFields


## Description

Көрсетілген өрістерді кіріс жазбадан жояды.


## Syntax

```powerquery
Record.RemoveFields(
    record as record,
    fields as any,
    optional missingField as MissingField.Type
) as record
```


## Details

<code>fields</code> тізімінде көрсетілген барлық өрістерді кіріс <code>record</code> ішінен жоятын жазбаны қайтарады. Егер көрсетілген өріс жоқ болса, қиыс жағдай туралы хабар қайтарылады.


## Examples

### Example #1 
Жазбадан &#34;Price&#34; өрісін жою.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], "Price")
```

Result: 
```powerquery
[CustomerID = 1, Item = "Fishing rod"]
```


### Example #2 
Жазбадан &#34;Price&#34; және &#34;Item&#34; өрістерін жою.
```powerquery
Record.RemoveFields([CustomerID = 1, Item = "Fishing rod", Price = 18.00], {"Price", "Item"})
```

Result: 
```powerquery
[CustomerID = 1]
```




## Category
Record.Transformations
