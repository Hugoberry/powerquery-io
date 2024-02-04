---
title: Record.FieldOrDefault
---

# Record.FieldOrDefault


## Description

Devolve o valor do campo especificado num registo ou o valor predefinido se o campo não for encontrado.


## Syntax

```powerquery
Record.FieldOrDefault(
    record as record,
    field as text,
    optional defaultValue as any
) as any
```


## Details

Devolve o valor do campo especificado <code>field</code> no registo <code>record</code>. Se o campo não for encontrado, o <code>defaultValue</code> opcional é devolvido.


## Examples

### Example #1 
Determinar o valor do campo &#34;Telefone&#34; no registo ou devolver null se não existir.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone")
```

Result: 
```powerquery
null
```


### Example #2 
Determinar o valor do campo &#34;Telefone&#34; no registo ou devolver a predefinição se não existir.
```powerquery
Record.FieldOrDefault([CustomerID = 1, Name = "Bob"], "Phone", "123-4567")
```

Result: 
```powerquery
"123-4567"
```




## Category
Record.Selection
