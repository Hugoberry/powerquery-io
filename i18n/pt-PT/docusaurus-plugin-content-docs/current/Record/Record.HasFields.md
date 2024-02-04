---
title: Record.HasFields
---

# Record.HasFields


## Description

Indica se o registo tem os campos especificados.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Indica se o registo <code>record</code> tem os campos especificados em <code>fields</code>, devolvendo um valor lógico (true ou false).    É possível especificar os valores de vários campos utilizando uma lista.


## Examples

### Example #1 
Verificar se o registo tem o campo &#34;CustomerID&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Verificar se o registo tem os campos &#34;CustomerID&#34; e &#34;Address&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
