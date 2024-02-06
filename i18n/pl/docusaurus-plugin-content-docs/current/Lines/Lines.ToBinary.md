---
title: Lines.ToBinary
---

# Lines.ToBinary


Konwertuje listę wartości tekstowych na wartość binarną, używając określonego kodowania i separatora wierszy. Określony w parametrze lineSeparator separator wierszy jest dołączany do każdego wiersza.  Jeśli separator nie zostanie określony, będą używane znaki powrotu karetki i wysuwu wiersza.


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

Konwertuje listę wartości tekstowych na wartość binarną, używając określonego kodowania i separatora wierszy. Określony w parametrze lineSeparator separator wierszy jest dołączany do każdego wiersza.  Jeśli separator nie zostanie określony, będą używane znaki powrotu karetki i wysuwu wiersza.



## Category
Lines
