---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Mengembalikan nilai variabel yang ditentukan atau nilai default jika variabel tidak ditentukan.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Mengembalikan nilai variabel yang ditentukan `identifier` yang ditetapkan oleh lingkungan evaluasi saat ini. Jika variabel tidak ditentukan, opsional `defaultValue` dikembalikan.



## Category
Values.Implementation
