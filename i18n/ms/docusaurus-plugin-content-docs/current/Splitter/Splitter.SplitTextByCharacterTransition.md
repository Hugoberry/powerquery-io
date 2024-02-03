---
title: Splitter.SplitTextByCharacterTransition
---

# Splitter.SplitTextByCharacterTransition


## Description

Mengembalikan fungsi yang memisahkan teks kepada senarai teks menurut transisi daripada satu jenis aksara kepada yang lain. Parameter \{0} dan \{1} boleh sama ada senarai aksara atau fungsi yang mengambil aksara dan mengembalikan benar/palsu.


## Syntax

```powerquery
Splitter.SplitTextByCharacterTransition(
    before as any,
    after as any
) as function
```


## Details

Mengembalikan fungsi yang memisahkan teks kepada senarai teks menurut transisi daripada satu jenis aksara kepada yang lain. Parameter <code>before</code> dan <code>after</code> boleh sama ada senarai aksara atau fungsi yang mengambil aksara dan mengembalikan benar/palsu.


## Examples

### Example #1 
Pisahkan input bila-bila masa huruf besar atau huruf kecil diikuti dengan digit.
```powerquery
Splitter.SplitTextByCharacterTransition({"A".."Z", "a".."z"}, {"0".."9"})("Abc123")
```

Result: 
```powerquery
{"Abc", "123"}
```




## Category
Splitter
