---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

Import data daripada QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        Mengembalikan jadual yang menyenaraikan jadual yang tersedia dalam QuickBooks Online. Parameter rekod pilihan, <code>opsyen</code>, boleh ditentukan untuk mengawal opsyen berikut:           <ul>            <li><code>ConnectionTimeout</code>:Tempoh yang mengawal masa menunggu sebelum meninggalkan percubaan untuk membuat sambungan ke pelayan. </li>            <li><code>CommandTimeout</code>: Tempoh yang mengawal masa pertanyaan sebelah pelayan dibenarkan berjalan sebelum dibatalkan. </li>          </ul>        Parameter rekod ditentukan sebagai [option1 = value1, option2 = value2...].    


