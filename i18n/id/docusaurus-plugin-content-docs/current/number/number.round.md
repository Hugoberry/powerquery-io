---
title: Number.Round
---

# Number.Round


Menghasilkan bilangan pembulatan. Jumlah digit dan mode pembulatan dapat ditetapkan.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Menghasilkan pembulatan `number` ke angka terdekat. Jika `number` adalah null, `Number.Round` akan menghasilkan null.  
  
Secara default, `number` dibulatkan ke bilangan bulat terdekat, dan ikatan terputus dengan pembulatan ke angka genap terdekat (menggunakan `RoundingMode.ToEven`, yang juga dikenal sebagai "pembulatan banker").  
  
Namun, nilai default ini dapat ditimpa melalui parameter opsional berikut.

-   `digits`: Menyebabkan `number` dibulatkan ke angka digit desimal yang ditentukan.
-   `roundingMode`: Menimpa perilaku pemutusan ikatan default ketika `number` berada di titik tengah antara dua nilai yang berpotensi dibulatkan (lihat `RoundingMode.Type` untuk nilai yang memungkinkan).


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
