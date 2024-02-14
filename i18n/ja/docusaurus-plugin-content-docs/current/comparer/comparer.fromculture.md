---
title: Comparer.FromCulture
---

# Comparer.FromCulture


指定されたカルチャと大文字と小文字の区別に基づいて比較関数を返します。


## Syntax

```powerquery
Comparer.FromCulture(
    culture as text,
    optional ignoreCase as logical
) as function
```


## Remarks

<code>culture</code> を使用し、<code>ignoreCase</code> で指定された大文字と小文字の区別を使用して比較を実行する比較関数を返します。<br />      <br />      比較関数は 2 つの引数を承認し、最初の値が 2 番目の値以下であるか、等しいか、大きいかに基づいて -1、0、または 1 を返します。<br />      <br />      <code>ignoreCase</code> の既定値は false です。<code>culture</code> は、.NET Framework でサポートされているロケールのいずれかである必要があります (例: "en-US")。    


## Examples

### Example #1 
「a」と「A」を、「en-US」ロケールを使用して比較し、値が等しいかどうかを判断します。
```powerquery
Comparer.FromCulture("en-US")("a", "A")
```

Result: 
```powerquery
-1
```


### Example #2 
「a」と「A」を、「en-US」ロケールを使用して比較し、値が等しいかどうかを判断します (大文字と小文字は区別しません)。
```powerquery
Comparer.FromCulture("en-US", true)("a", "A")
```

Result: 
```powerquery
0
```




## Category
Comparer
