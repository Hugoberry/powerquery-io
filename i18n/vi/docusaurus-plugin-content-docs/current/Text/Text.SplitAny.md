---
title: Text.SplitAny
---

# Text.SplitAny


## Description

Trả về danh sách giá trị văn bản, tách trên ký tự bất kỳ trong dấu tách.


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Details

Trả về danh sách giá trị văn bản là kết quả của việc tách một giá trị văn bản <code>text</code> dựa trên ký tự bất kỳ trong dấu tách được chỉ định, <code>separators</code>.


## Examples

### Example #1 
Tạo một danh sách từ giá trị văn bản &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;.
```powerquery
Text.SplitAny("Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com", "|")
```

Result: 
```powerquery
{
    "Jamie",
    "Campbell",
    "Admin",
    "Adventure Works",
    "www.adventure-works.com"
}
```




## Category
Text.Transformations
