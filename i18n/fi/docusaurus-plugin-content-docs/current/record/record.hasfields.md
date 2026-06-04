---
title: Record.HasFields
---

# Record.HasFields


Ilmaisee, onko tietueella määritetyt kentät.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

Ilmaisee, onko tietueella `record` kohteessa `fields` määritetyt kentät palauttamalla loogisen arvon (true tai false). Useita kenttien nimiä voidaan määrittää luettelon avulla.


## Examples

### Example #1
Tarkista, onko tietueella kenttä "CustomerID".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2
Tarkista, onko tietueella kentät "CustomerID" ja "Address".
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
