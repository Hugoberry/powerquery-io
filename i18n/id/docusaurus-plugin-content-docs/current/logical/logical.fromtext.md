---
title: Logical.FromText
---

# Logical.FromText


Membuat nilai logika dari nilai teks "benar" dan "salah".


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Remarks

Membuat nilai logika dari nilai teks `text`, baik "benar" maupun "salah". Jika `text` berisi string yang berbeda, kesalahan akan muncul. Nilai teks `text` tidak peka huruf besar-kecil.


## Examples

### Example #1
Membuat nilai logika dari string teks "benar".
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2
Membuat nilai logika dari string teks "a".
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
