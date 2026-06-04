---
title: Text.Repeat
---

# Text.Repeat


Mengembalikan nilai teks yang terdiri daripada teks input yang diulangi bilangan kali yang ditentukan.


## Syntax

```powerquery
Text.Repeat(
    text as text,
    count as number
) as text
```


## Remarks

Mengembalikan nilai teks yang terdiri daripada teks input `text` yang diulangi `count` kali.


## Examples

### Example #1
Ulang teks "a" lima kali.
```powerquery
Text.Repeat("a", 5)
```

Result: 
```powerquery
"aaaaa"
```


### Example #2
Ulang teks "helloworld" tiga kali.
```powerquery
Text.Repeat("helloworld.", 3)
```

Result: 
```powerquery
"helloworld.helloworld.helloworld."
```




## Category
Text.Transformations
