---
title: Text.Contains
---

# Text.Contains


## Description

Returns whether the text contains the substring.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Details

Detects whether <code>text</code> contains the value <code>substring</code>. Returns true if the value is found. This function doesn't support wildcards or regular expressions.      <br />      <br />      The optional argument <code>comparer</code> can be used to specify case-insensitive or culture and locale-aware comparisons.      The following built-in comparers are available in the formula language:      <ul>        <li><code>Comparer.Ordinal</code>: Used to perform a case-sensitive ordinal comparison</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Used to perform a case-insensitive ordinal comparison</li>        <li> <code>Comparer.FromCulture</code>: Used to perform a culture-aware comparison</li>      </ul>


## Examples

### Example #1 
Find if the text &#34;Hello World&#34; contains &#34;Hello&#34;.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Find if the text &#34;Hello World&#34; contains &#34;hello&#34;.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Find if the text &#34;Hello World&#34; contains &#34;hello&#34;, using a case-insensitive comparer.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
