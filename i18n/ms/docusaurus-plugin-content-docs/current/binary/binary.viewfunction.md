---
title: Binary.ViewFunction
---

# Binary.ViewFunction


Mencipta fungsi yang boleh dipintas oleh pengendali yang ditentukan pada pandangan (melalui Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

Mencipta fungsi pandangan berdasarkan `function` yang boleh dikendalikan dalam pandangan yang dicipta oleh `Binary.View`.

Pengendali `OnInvoke` bagi `Binary.View` boleh digunakan untuk mentakrifkan pengendali untuk fungsi pandangan.

Seperti pengendali untuk operasi terbina dalam, jika tiada pengendali `OnInvoke` ditentukan, atau jika ia tidak mengendalikan fungsi pandangan, atau jika ralat dibangkitkan oleh pengendali, `function` digunakan di atas pandangan.

Rujuk dokumentasi penyambung tersuai Power Query yang diterbitkan untuk penerangan yang lebih lengkap bagi `Binary.View` dan fungsi pandangan tersuai.



## Category
Binary
