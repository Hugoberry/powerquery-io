---
title: Record.HasFields
---

# Record.HasFields


## Description

Indica si el registro tiene los campos especificados.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Indica si el registro <code>record</code> tiene los campos especificados en <code>fields</code> devolviendo un valor lógico (true o false).    Se pueden especificar varios valores de campo con una lista.


## Examples

### Example #1 
Comprobar si el registro tiene el campo &#34;CustomerID&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Comprobar si el registro tiene el campo &#34;CustomerID&#34; y &#34;Address&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
