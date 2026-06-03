---
title: Variable.ValueOrDefault
---

# Variable.ValueOrDefault


Belirtilen değişkenin değerini veya değişken tanımlanmamışsa varsayılan değeri döndürür.


## Syntax

```powerquery
Variable.ValueOrDefault(
    identifier as text,
    optional defaultValue as any
) as any
```


## Remarks

Geçerli değerlendirme ortamı tarafından tanımlanan belirtilen değişken `identifier`'in değerini döndürür. Değişken tanımlanmamışsa, isteğe bağlı `defaultValue` döndürülür.



## Category
Values.Implementation
