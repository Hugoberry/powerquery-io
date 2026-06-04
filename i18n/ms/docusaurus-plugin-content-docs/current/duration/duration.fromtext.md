---
title: Duration.FromText
---

# Duration.FromText


Mengembalikan nilai tempoh daripada bentuk masa berlalu teks (d.h:m:s).


## Syntax

```powerquery
Duration.FromText(
    text as text
) as duration
```


## Remarks

Mengembalikan nilai tempoh daripada teks yang ditentukan, `text`. Format berikut boleh diuraikan oleh fungsi ini:

-   (-)hh:mm(:ss(.ff))
-   (-)ddd(.hh:mm(:ss(.ff)))

(Semua julat adalah terangkum)

-   ddd: Bilangan hari.
-   jh: Bilangan jam, antara 0 dan 23.
-   mm: Bilangan minit, antara 0 dan 59.
-   ss: Bilangan saat, antara 0 dan 59.
-   : Pecahan saat, antara 0 dan 9999999.


## Examples

### Example #1
Menukar `"2.05:55:20"` kepada nilai `duration`.
```powerquery
Duration.FromText("2.05:55:20")
```

Result: 
```powerquery
#duration(2, 5, 55, 20)
```




## Category
Duration
