---
title: Logical.ToText
---

# Logical.ToText


## Description

Menghasilkan teks &#34;benar&#34; atau &#34;salah&#34; dengan nilai logika tertentu.


## Syntax

```powerquery
Logical.ToText(
    logicalValue as logical
) as text
```


## Details

Membuat nilai teks dari nilai logika <code>logicalValue</code>, baik <code>true</code> maupun <code>false</code>. Jika <code>logicalValue</code> bukan nilai logika, maka pengecualian akan dibuat.


## Examples

### Example #1 
Membuat nilai teks dari logika &lt;code&gt;true&lt;/code&gt;.
```powerquery
Logical.ToText(true)
```

Result: 
```powerquery
"true"
```




## Category
Logical
