---
title: Lines.ToBinary
---

# Lines.ToBinary


指定されたエンコードと lineSeparator を使用して、テキストのリストをバイナリ値に変換します。指定された lineSeparator は、各行に追加されます。指定されない場合は、復帰文字と改行文字が使用されます。


## Syntax

```powerquery
Lines.ToBinary(
    lines as list,
    optional lineSeparator as text,
    optional encoding as TextEncoding.Type,
    optional includeByteOrderMark as logical
) as binary
```


## Remarks

指定されたエンコードと lineSeparator を使用して、テキストのリストをバイナリ値に変換します。指定された lineSeparator は、各行に追加されます。指定されない場合は、復帰文字と改行文字が使用されます。



## Category
Lines
