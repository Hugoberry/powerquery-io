---
title: Number.FromText
---

# Number.FromText


Mencipta nombor daripada format teks biasa ("15", "3,423.10", "5.0E-10").


## Syntax

```powerquery
Number.FromText(
    text as text,
    optional culture as text
) as number
```


## Remarks

Mengembalikan nilai `number` daripada nilai teks yang ditentukan, `text`.

-   `text`: Dapatkan perwakilan teks bagi nilai nombor. Perwakilan mesti dalam format nombor lazim, seperti "15", "3,423.10” atau "5.0E-10".
-   `culture`: Budaya pilihan yang mengawal cara `text` ditafsirkan (contohnya, "en-US").


## Examples

### Example #1
Dapatkan nilai nombor bagi `"4"`.
```powerquery
Number.FromText("4")
```

Result: 
```powerquery
4
```


### Example #2
Dapatkan nilai nombor bagi `"5.0e-10"`.
```powerquery
Number.FromText("5.0e-10")
```

Result: 
```powerquery
5E-10
```




## Category
Number.Conversion and formatting
