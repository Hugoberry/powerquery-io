---
title: Lines.ToBinary
---

# Lines.ToBinary


## Description

Converts a list of text into a binary value using the specified encoding and lineSeparator.The specified lineSeparator is appended to each line.  If not specified then the carriage return and line feed characters are used.


## Syntax

```powerquery
Lines.ToBinary(
    lines as list,
    optional lineSeparator as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Details

Converts a list of text into a binary value using the specified encoding and lineSeparator.The specified lineSeparator is appended to each line.  If not specified then the carriage return and line feed characters are used.



## Category
Lines
