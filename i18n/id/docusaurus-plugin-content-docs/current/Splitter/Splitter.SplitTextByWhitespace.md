---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


## Description

Menghasilkan fungsi yang membagi teks menjadi daftar teks pada spasi.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Menghasilkan fungsi yang membagi teks menjadi daftar teks pada spasi.


## Examples

### Example #1 
Memisahkan input dengan karakter spasi kosong, dan memperlakukan kutipan seperti karakter lain.
```powerquery
Splitter.SplitTextByWhitespace(QuoteStyle.None)("a b#(tab)c")
```

Result: 
```powerquery
{"a", "b", "c"}
```




## Category
Splitter
