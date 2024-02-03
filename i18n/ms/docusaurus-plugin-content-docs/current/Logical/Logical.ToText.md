---
title: Logical.ToText
---

# Logical.ToText


## Description

Mengembalikan teks &#34;true&#34; atau &#34;false&#34; jika nilai logik ditentukan.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

Mencipta nilai teks daripada nilai logik <code>logicalValue</code>, sama ada <code>true</code> atau <code>false</code>. Jika <code>logicalValue</code> bukan nilai logik, pengecualian dikembalikan.


## Examples

### Example #1 
Cipta nilai teks daripada logik &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
