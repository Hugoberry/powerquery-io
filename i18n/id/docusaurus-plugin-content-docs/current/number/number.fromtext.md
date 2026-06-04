---
title: Number.FromText
---

# Number.FromText


Membuat bilangan dari format teks umum ("15", "3,423.10", "5.0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Mengembalikan nilai `number` dari nilai teks tertentu, `text`.

-   `text`: Representasi tekstual nilai bilangan. Representasi harus berupa format bilangan umum, seperti "15", "3,423.10", atau "5.0E-10".
-   `culture`: Kultur opsional yang mengontrol bagaimana `text` diinterpretasi (misalnya, "en-US").


## Examples

### Example #1
Mengambil nilai bilangan `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Mengambil nilai bilangan `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
