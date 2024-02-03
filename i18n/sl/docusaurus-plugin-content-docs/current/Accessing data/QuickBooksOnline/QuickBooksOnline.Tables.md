---
title: QuickBooksOnline.Tables
---

# QuickBooksOnline.Tables


## Description

Uvozite podatke iz storitve QuickBooks Online.


## Syntax

```powerquery
QuickBooksOnline.Tables(
    optional options as record
) as table
```


## Details

        Vrne tabelo, v kateri so navedene tabele, ki so na voljo v storitvi QuickBooks Online. Navedete lahko izbirni parameter zapisa <code>options</code>, s katerim nadzorujete te možnosti:          <ul>            <li><code>ConnectionTimeout</code>: trajanje, ki nadzoruje čas čakanja, preden je preklican poskus vzpostavitve povezave s strežnikom.</li>            <li><code>CommandTimeout</code>: trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana.</li>          </ul>        Parameter zapisa je na primer naveden kot [možnost1 = vrednost1, možnost2 = vrednost2...].    


