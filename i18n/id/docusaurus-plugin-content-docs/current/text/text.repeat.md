---
title: Text.Repeat
---

# Text.Repeat


Menghasilkan nilai teks yang terdiri atas teks input yang mengulang angka tertentu beberapa kali.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Menghasilkan nilai teks yang terdiri atas teks input `text` yang mengulang `count` beberapa kali.


## Examples

### Example #1
Mengulang teks "a" lima kali.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
Mengulang teks "helloworld" tiga kali.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
