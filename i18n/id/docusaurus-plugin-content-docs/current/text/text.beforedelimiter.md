---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Remarks

Menghasilkan bagian dari `text` sebelum `delimiter` yang ditentukan. Angka opsional `index` menunjukkan kemunculan `delimiter` mana yang harus dipertimbangkan. Daftar opsional `index` menunjukkan kemunculan `delimiter` mana yang harus dipertimbangkan, begitu pula apakah pengindeksan harus dilakukan di awal atau akhir input.


## Examples

### Example #1
Dapatkan bagian dari "111-222-333" sebelum tanda hubung (pertama).
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2
Dapatkan bagian dari "111-222-333" sebelum tanda hubung kedua.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3
Dapatkan bagian dari "111-222-333" sebelum tanda hubung kedua dari belakang.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
