---
title: Table.ViewFunction
---

# Table.ViewFunction


Mencipta fungsi yang boleh dipintas oleh pengendali yang ditentukan pada paparan (melalui Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

Mencipta fungsi pandangan berdasarkan `function` yang boleh dikendalikan dalam pandangan yang dicipta oleh `Table.View`.

Pengendali

`OnInvoke` bagi `Table.View` boleh digunakan untuk mentakrifkan pengendali untuk fungsi pandangan.

Dengan pengendali untuk pengendalian terbina dalam, jika tiada pengendali `OnInvoke` ditentukan, atau jika ia tidak mengendalikan fungsi pandangan, atau jika ralat ditimbulkan oleh pengendali, `function` digunakan pada bahagian atas pandangan.

Rujuk dokumentasi penyambung tersuai Power Query yang diterbitkan untuk penerangan yang lebih lengkap bagi `Table.View` dan fungsi pandangan tersuai.



## Category
Table.Table construction
