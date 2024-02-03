---
title: Record.HasFields
---

# Record.HasFields


## Description

Indica si el registre té els camps especificats.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Indica si el registre <code>record</code> té els camps especificats a <code>fields</code> i retorna un valor lògic (true o false).    Els valors amb diversos camps es poden especificar mitjançant una llista.


## Examples

### Example #1 
Comprova si el registre té el camp &#34;CustomerID&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Comprova si el registre té els camps &#34;CustomerID&#34; i &#34;Address&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
