---
title: Logical.FromText
---

# Logical.FromText


## Description

Mencipta nilai logik daripada nilai teks &#34;true&#34; dan &#34;false&#34;.


## Syntax

```powerquery
Logical.FromText(
    text as text
) as logical
```


## Details

Mencipta nilai logik daripada nilai teks <code>text</code>, sama ada "true" atau "false". Jika <code>text</code> mengandungi rentetan berlainan, pengecualian dikembalikan. Nilai teks <code>text</code> adalah sensitif huruf besar atau kecil.


## Examples

### Example #1 
Cipta nilai logik daripada rentetan teks &#34;true&#34;.
```powerquery
Logical.FromText("true")
```

Result: 
```powerquery
true
```


### Example #2 
Cipta nilai logik daripada rentetan teks &#34;a&#34;.
```powerquery
Logical.FromText("a")
```

Result: 
```powerquery
[Expression.Error] Could not convert to a logical.
```




## Category
Logical
