---
title: Record.HasFields
---

# Record.HasFields


Indica se il record ha campi specificati.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Remarks

Indica se il record <code>record</code> ha campi specificati in <code>fields</code>, restituendo un valore logico (true o false).    È possibile specificare più valori di campi utilizzando un elenco.


## Examples

### Example #1 
Verificare se il record contiene il campo &#34;CustomerID&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Verificare se il record contiene i campi &#34;CustomerID&#34; e &#34;Address&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
