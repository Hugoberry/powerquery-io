---
title: Text.Repeat
---

# Text.Repeat


## Description

Menghasilkan nilai teks yang terdiri atas teks input yang mengulang angka tertentu beberapa kali.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

Menghasilkan nilai teks yang terdiri atas teks input <code>text</code> yang mengulang <code>count</code> beberapa kali.


## Examples

### Example #1 
Mengulang teks &#34;a&#34; lima kali.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Mengulang teks &#34;helloworld&#34; tiga kali.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
