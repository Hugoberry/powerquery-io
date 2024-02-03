---
title: Text.Insert
---

# Text.Insert


## Description

Chèn một giá trị văn bản vào một giá trị khác tại một vị trí cho sẵn.


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Details

Trả về kết quả chèn giá trị văn bản <code>newText</code> vào một giá trị văn bản <code>text</code> tại vị trí <code>offset</code>. Vị trí bắt đầu tại số 0.


## Examples

### Example #1 
Chèn &#34;C&#34; giữa &#34;B&#34; và &#34;D&#34; trong &#34;ABD&#34;.
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
