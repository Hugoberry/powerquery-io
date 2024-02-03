---
title: Text.AfterDelimiter
---

# Text.AfterDelimiter


## Description

Text.AfterDelimiter


## Syntax

```powerquery
Text.AfterDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Menghasilkan bagian dari <code>text</code> setelah <code>delimiter</code> yang ditentukan.    Angka opsional <code>index</code> menunjukkan kemunculan <code>delimiter</code> mana yang harus dipertimbangkan.    Daftar opsional <code>index</code> menunjukkan kemunculan <code>delimiter</code> mana yang harus dipertimbangkan, begitu pula apakah pengindeksan harus dilakukan di awal atau akhir input.


## Examples

### Example #1 
Dapatkan bagian dari &#34;111-222-333&#34; setelah tanda hubung (pertama).
```powerquery
Text.AfterDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"222-333"
```


### Example #2 
Dapatkan bagian dari &#34;111-222-333&#34; setelah tanda hubung kedua.
```powerquery
Text.AfterDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"333"
```


### Example #3 
Dapatkan bagian dari &#34;111-222-333&#34; setelah tanda hubung kedua dari belakang.
```powerquery
Text.AfterDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"222-333"
```




## Category
Text.Transformations
