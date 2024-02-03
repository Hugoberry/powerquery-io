---
title: Number.Round
---

# Number.Round


## Description

Menghasilkan bilangan pembulatan. Jumlah digit dan mode pembulatan dapat ditetapkan.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Details

Menghasilkan pembulatan <code>number</code> ke angka terdekat. Jika <code>number</code> adalah null, <code>Number.Round</code> akan menghasilkan null.<br />      <br />      Secara default, <code>number</code> dibulatkan ke bilangan bulat terdekat, dan ikatan terputus dengan pembulatan ke angka genap terdekat (menggunakan <code>RoundingMode.ToEven</code>, yang juga dikenal sebagai "pembulatan banker").<br />      <br />      Namun, nilai default ini dapat ditimpa melalui parameter opsional berikut.      <ul>        <li><code>digits</code>: Menyebabkan <code>number</code> dibulatkan ke angka digit desimal yang ditentukan.</li>        <li><code>roundingMode</code>: Menimpa perilaku pemutusan ikatan default ketika <code>number</code> berada di titik tengah antara dua nilai yang berpotensi dibulatkan      (lihat <code>RoundingMode.Type</code> untuk nilai yang memungkinkan).</li>      </ul>


## Examples

### Example #1 
Membulatkan 1,234 ke bilangan bulat terdekat.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2 
Membulatkan 1,56 ke bilangan bulat terdekat.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3 
Membulatkan 1,2345 hingga dua tempat desimal.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4 
Membulatkan 1,2345 hingga tiga tempat desimal (Pembulatan ke atas).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5 
Membulatkan 1,2345 hingga tiga tempat desimal (Pembulatan ke bawah).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
