---
title: Text.BetweenDelimiters
---

# Text.BetweenDelimiters


## Description

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


## Details

Menghasilkan bagian dari <code>text</code> antara <code>startDelimiter</code> dan <code>endDelimiter</code> yang ditentukan.    Angka opsional <code>startIndex</code> menunjukkan kemunculan <code>startDelimiter</code> mana yang harus dipertimbangkan.    Daftar opsional <code>startIndex</code> menunjukkan kemunculan <code>startDelimiter</code> mana yang harus dipertimbangkan, begitu pula apakah pengindeksan harus dilakukan di awal atau akhir input.    <code>endIndex</code> serupa, kecuali pengindeksan dilakukan berdasarkan <code>startIndex</code>.


## Examples

### Example #1 
Dapatkan bagian dari &#34;111 (222) 333 (444)&#34; antara tanda kurung buka (pertama) dan tanda kurung tutup (pertama) yang mengikutinya.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")")
```

Result: 
```powerquery
"222"
```


### Example #2 
Dapatkan bagian dari &#34;111 (222) 333 (444)&#34; antara tanda kurung buka kedua dan kurung tutup kedua yang mengikutinya.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", 1, 0)
```

Result: 
```powerquery
"444"
```


### Example #3 
Dapatkan bagian dari &#34;111 (222) 333 (444)&#34; antara tanda kurung buka kedua dari tanda kurung tutup terakhir dan kedua yang mengikutinya.
```powerquery
Text.BetweenDelimiters("111 (222) 333 (444)", "(", ")", {1, RelativePosition.FromEnd}, {1, RelativePosition.FromStart})
```

Result: 
```powerquery
"222) 333 (444"
```




## Category
Text.Transformations
