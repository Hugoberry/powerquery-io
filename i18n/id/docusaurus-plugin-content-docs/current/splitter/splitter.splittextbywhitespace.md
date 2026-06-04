---
title: Splitter.SplitTextByWhitespace
---

# Splitter.SplitTextByWhitespace


Menghasilkan fungsi yang membagi teks menjadi daftar teks pada spasi.


## Syntax

```powerquery
Splitter.SplitTextByWhitespace(
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Remarks

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
