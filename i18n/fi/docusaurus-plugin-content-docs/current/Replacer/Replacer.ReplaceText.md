---
title: Replacer.ReplaceText
---

# Replacer.ReplaceText


## Description

Korvaa tekstin annetun syötteen sisällä.


## Syntax

```powerquery
Replacer.ReplaceText(
    text as text,
    old as text,
    new as text
) as text
```


## Details

Korvaa tekstin <code>old</code> alkuperäisessä kohteessa <code>text</code> tekstillä <code>new</code>. Tätä korvaustoimintoa voi käyttää kohteissa <code>List.ReplaceValue</code> ja <code>Table.ReplaceValue</code>.


## Examples

### Example #1 
Korvaa teksti &#34;hE&#34; tekstillä &#34;He&#34; merkkijonossa &#34;hEllo world&#34;.
```powerquery
Replacer.ReplaceText("hEllo world", "hE", "He")
```

Result: 
```powerquery
"Hello world"
```




## Category
Replacer
