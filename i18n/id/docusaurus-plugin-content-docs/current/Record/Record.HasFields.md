---
title: Record.HasFields
---

# Record.HasFields


## Description

Menunjukkan apakah data memiliki bidang yang ditetapkan.


## Syntax

```powerquery
Record.HasFields(
    record as record,
    fields as any
) as logical
```


## Details

Menunjukkan apakah data <code>record</code> memiliki bidang yang ditetapkan dalam <code>fields</code>, dengan menghasilkan nilai logika (benar atau salah).    Beberapa nilai bidang dapat ditetapkan menggunakan daftar.


## Examples

### Example #1 
Memastikan data memiliki bidang &#34;CustomerID&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], "CustomerID")
```

Result: 
```powerquery
true
```


### Example #2 
Memastikan data memiliki bidang &#34;CustomerID&#34; dan &#34;Address&#34;.
```powerquery
Record.HasFields([CustomerID = 1, Name = "Bob", Phone = "123-4567"], {"CustomerID", "Address"})
```

Result: 
```powerquery
false
```




## Category
Record.Information
