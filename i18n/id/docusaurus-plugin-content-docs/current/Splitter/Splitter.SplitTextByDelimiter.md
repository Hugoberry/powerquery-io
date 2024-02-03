---
title: Splitter.SplitTextByDelimiter
---

# Splitter.SplitTextByDelimiter


## Description

Menghasilkan fungsi yang membagi teks menjadi daftar menurut pembatas yang ditetapkan.


## Syntax

```powerquery
Splitter.SplitTextByDelimiter(
    delimiter as text,
    optional quoteStyle as QuoteStyle.Type
) as function
```


## Details

Menghasilkan fungsi yang membagi teks menjadi daftar menurut pembatas yang ditetapkan.


## Examples

### Example #1 
Memisahkan input dengan koma, dan mengabaikan koma yang dikutip.
```powerquery
Splitter.SplitTextByDelimiter(",", QuoteStyle.Csv)("a,""b,c"",d")
```

Result: 
```powerquery
{"a", "b,c", "d"}
```




## Category
Splitter
