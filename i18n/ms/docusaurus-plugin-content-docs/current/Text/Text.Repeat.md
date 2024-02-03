---
title: Text.Repeat
---

# Text.Repeat


## Description

Mengembalikan nilai teks yang terdiri daripada teks input yang diulangi bilangan kali yang ditentukan.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Details

Mengembalikan nilai teks yang terdiri daripada teks input <code>text</code> yang diulangi <code>count</code> kali.


## Examples

### Example #1 
Ulang teks &#34;a&#34; lima kali.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2 
Ulang teks &#34;helloworld&#34; tiga kali.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
