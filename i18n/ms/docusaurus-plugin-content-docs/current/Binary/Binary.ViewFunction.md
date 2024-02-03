---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

Mencipta fungsi yang boleh dipintas oleh pengendali yang ditentukan pada pandangan (melalui Binary.View).


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

Mencipta fungsi pandangan berdasarkan <code>function</code> yang boleh dikendalikan dalam pandangan yang dicipta oleh <code>Binary.View</code>.<br />Pengendali <code>OnInvoke</code> bagi <code>Binary.View</code> boleh digunakan untuk mentakrifkan pengendali untuk fungsi pandangan.<br />Seperti pengendali untuk operasi terbina dalam, jika tiada pengendali <code>OnInvoke</code> ditentukan, atau jika ia tidak mengendalikan fungsi pandangan, atau jika ralat dibangkitkan oleh pengendali, <code>function</code> digunakan di atas pandangan.<br />Rujuk dokumentasi penyambung tersuai Power Query yang diterbitkan untuk penerangan yang lebih lengkap bagi <code>Binary.View</code> dan fungsi pandangan tersuai.<br />



## Category
Binary
