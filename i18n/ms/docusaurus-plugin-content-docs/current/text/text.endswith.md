---
title: Text.EndsWith
---

# Text.EndsWith


Menunjukkan sama ada teks berakhir dalam nilai yang ditentukan.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Menunjukkan sama ada teks yang ditentukan, `text`, diakhiri dengan nilai yang ditentukan, `substring`. Penunjuk adalah sensitif huruf.

`comparer` merupakan `Comparer` yang digunakan untuk mengawal perbandingan. Pembanding boleh digunakan untuk memberikan perbandingan tidak sensitif huruf atau perbandingan sedar budaya dan tempatan.

Pembanding terbina dalam berikut tersedia dalam bahasa formula:

-   `Comparer.Ordinal`: Digunakan untuk melaksanakan perbandingan ordinal yang tepat
-   `Comparer.OrdinalIgnoreCase`: Digunakan untuk melaksanakan perbandingan tidak sensitif huruf ordinal yang tepat
-   `Comparer.FromCulture`: Digunakan untuk melaksanakan perbandingan sedar budaya


## Examples

### Example #1
Semak sama ada "Hello, World" berakhir dengan "world".
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Semak sama ada "Hello, World" berakhir dengan "World".
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
