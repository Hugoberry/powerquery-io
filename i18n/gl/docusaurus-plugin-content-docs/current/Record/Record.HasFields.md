---
title: Record.HasFields
---

# Record.HasFields


## Description

Indica se o rexistro ten os campos especificados.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Indica se o rexistro <code>record</code> ten os campos especificados en <code>fields</code> devolvendo un valor lóxico (verdadeiro ou falso)    Utilizando unha lista poden especificarse varios valores de campo.


## Examples

### Example #1 
Comprobar se o rexistro ten o campo &#34;CustomerID&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Comprobar se o rexistro ten os campos &#34;CustomerID&#34; e &#34;Address&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
