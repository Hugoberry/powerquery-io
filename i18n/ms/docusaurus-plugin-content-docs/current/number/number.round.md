---
title: Number.Round
---

# Number.Round


Mengembalikan tanda dibundarkan. Bilangan digit dan mod pembundaran boleh ditentukan.


## Syntax

```powerquery
Number.Round(
    number as number,
    optional digits as number,
    optional roundingMode as RoundingMode.Type
) as number
```


## Remarks

Mengembalikan hasil pembundaran `number` kepada nombor yang terdekat. Jika `number` adalah nol, `Number.Round` mengembalikan nol.  
  
Secara lalai, `number` dibundarkan kepada integer terdekat, dan ikata dipecahkan dengan membundarkan kepada nombor genap yang terhampir (menggunakan `RoundingMode.ToEven`, juga dikenali sebagai "pembundaran jurubank").  
  
Namun, lalai ini boleh diatasi melalui parameter pilihan berikut.

-   `digits`: Sebab `number` untuk dibundarkan kepada bilangan digit perpuluhan tertentu.
-   `roundingMode`: Mengatasi tingkah laku pemecahan ikatan lalai apabila `number` pada titik tengah antara dua nilai berpotensi yang dibundarkan (rujuk `RoundingMode.Type` untuk nilai yang mungkin).


## Examples

### Example #1
Bundarkan 1.234 kepada integer terdekat.
```powerquery
Number.Round(1.234)
```

Result: 
```powerquery
1
```


### Example #2
Bundarkan 1.56 kepada integer terdekat.
```powerquery
Number.Round(1.56)
```

Result: 
```powerquery
2
```


### Example #3
Bundarkan 1.2345 kepada dua tempat perpuluhan.
```powerquery
Number.Round(1.2345, 2)
```

Result: 
```powerquery
1.23
```


### Example #4
Bundarkan 1.2345 kepada tiga tempat perpuluhan (Bundar ke atas).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Up)
```

Result: 
```powerquery
1.235
```


### Example #5
Bundarkan 1.2345 kepada tiga tempat perpuluhan (Bundar ke bawah).
```powerquery
Number.Round(1.2345, 3, RoundingMode.Down)
```

Result: 
```powerquery
1.234
```




## Category
Number.Rounding
