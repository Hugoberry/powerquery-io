---
title: Record.HasFields
---

# Record.HasFields


## Description

Menunjukkan sama ada rekod mempunyai medan yang ditentukan.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Menunjukkan sama ada rekod <code>record</code> mempunyai medan ditentukan dalam <code>fields</code>, dengan mengembalikan nilai logik (benar atau palsu).    Berbilang nilai medan boleh ditentukan menggunakan senarai.


## Examples

### Example #1 
Semak sama ada rekod mempunyai medan &#34;CustomerID&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Semak sama ada rekod mempunyai medan &#34;CustomerID&#34; dan &#34;Address&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
