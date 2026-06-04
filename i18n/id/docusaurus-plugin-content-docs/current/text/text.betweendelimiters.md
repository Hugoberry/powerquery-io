---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


Text.BetweenDelimiters


## Syntax

```powerquery
Text.BetweenDelimiters(
    text as text,
    startDelimiter as text,
    endDelimiter as text,
    optional startIndex as any,
    optional endIndex as any
) as any
```


## Remarks

Menghasilkan bagian dari `text` antara `startDelimiter` dan `endDelimiter` yang ditentukan. Angka opsional `startIndex` menunjukkan kemunculan `startDelimiter` mana yang harus dipertimbangkan. Daftar opsional `startIndex` menunjukkan kemunculan `startDelimiter` mana yang harus dipertimbangkan, begitu pula apakah pengindeksan harus dilakukan di awal atau akhir input. `endIndex` serupa, kecuali pengindeksan dilakukan berdasarkan `startIndex`.


## Examples

### Example #1
Dapatkan bagian dari "111 (222) 333 (444)" antara tanda kurung buka (pertama) dan tanda kurung tutup (pertama) yang mengikutinya.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2
Dapatkan bagian dari "111 (222) 333 (444)" antara tanda kurung buka kedua dan kurung tutup kedua yang mengikutinya.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3
Dapatkan bagian dari "111 (222) 333 (444)" antara tanda kurung buka kedua dari tanda kurung tutup terakhir dan kedua yang mengikutinya.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
