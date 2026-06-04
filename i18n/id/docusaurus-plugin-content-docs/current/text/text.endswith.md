---
title: Text.EndsWith
---

# Text.EndsWith


Menunjukkan apakah teks berakhir dalam nilai yang ditetapkan.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Menunjukkan apakah teks yang diberikan, `text`, diakhiri dengan nilai yang ditentukan, `substring`. Indikasinya adalah peka huruf besar kecil.

`comparer` adalah `Pembanding` yang digunakan untuk mengontrol perbandingan. Pembanding dapat digunakan untuk menyediakan perbandingan sadar lokal dan kultur atau yang tidak peka huruf besar kecil.

Pembanding internal berikut tersedia dalam bahasa rumus:

-   `Comparer.Ordinal`: Digunakan untuk melakukan perbandingan ordinal akurat
-   `Comparer.OrdinalIgnoreCase`: Digunakan untuk melakukan perbandingan ordinal yang tidak peka huruf besar kecil yang akurat
-   `Comparer.FromCulture`: Digunakan untuk melakukan perbandingan sadar kultur


## Examples

### Example #1
Memastikan "Hello, World" berakhir dengan "world".
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Memastikan "Hello, World" berakhir dengan "World".
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
