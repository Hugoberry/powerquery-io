---
title: Record.HasFields
---

# Record.HasFields


## Description

Ilmaisee, onko tietueella määritetyt kentät.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Ilmaisee, onko tietueella <code>record</code> kohteessa <code>fields</code> määritetyt kentät palauttamalla loogisen arvon (true tai false).    Useita kenttien nimiä voidaan määrittää luettelon avulla.


## Examples

### Example #1 
Tarkista, onko tietueella kenttä &#34;CustomerID&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Tarkista, onko tietueella kentät &#34;CustomerID&#34; ja &#34;Address&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
