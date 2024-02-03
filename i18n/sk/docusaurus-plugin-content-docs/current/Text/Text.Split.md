---
title: Text.Split
---

# Text.Split


## Description

Rozdelí text do zoznamu textových hodnôt na základe stanoveného oddeľovača.


## Syntax

```powerquery
Text.Split(
    text as text,
    separator as text
) as list
```


## Details

Vráti zoznam textových hodnôt, ktorý je výsledkom rozdelenia textovej hodnoty <code>text</code> na základe stanoveného oddeľovača <code>separator</code>.


## Examples

### Example #1 
Vytvorte zoznam z textovej hodnoty &#34;Name|Address|PhoneNumber&#34; oddelenej znakom &#34;|&#34;.
```powerquery
Text.Split("Name|Address|PhoneNumber", "|")
```

Result: 
```powerquery
{
    "Name",
    "Address",
    "PhoneNumber"
}
```




## Category
Text.Transformations
