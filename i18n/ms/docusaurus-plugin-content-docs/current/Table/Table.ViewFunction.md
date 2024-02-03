---
title: Table.ViewFunction
---

# Table.ViewFunction


## Description

Mencipta fungsi yang boleh dipintas oleh pengendali yang ditentukan pada paparan (melalui Table.View).


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Details

Mencipta fungsi pandangan berdasarkan <code>function</code> yang boleh dikendalikan dalam pandangan yang dicipta oleh <code>Table.View</code>.<br />Pengendali <code>OnInvoke</code> bagi <code>Table.View</code> boleh digunakan untuk mentakrifkan pengendali untuk fungsi pandangan.<br />Dengan pengendali untuk pengendalian terbina dalam, jika tiada pengendali <code>OnInvoke</code> ditentukan, atau jika ia tidak mengendalikan fungsi pandangan, atau jika ralat ditimbulkan oleh pengendali, <code>function</code> digunakan pada bahagian atas pandangan.<br />Rujuk dokumentasi penyambung tersuai Power Query yang diterbitkan untuk penerangan yang lebih lengkap bagi <code>Table.View</code> dan fungsi pandangan tersuai.<br />



## Category
Table.Table construction
