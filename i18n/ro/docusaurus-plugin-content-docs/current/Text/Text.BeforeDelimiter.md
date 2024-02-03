---
title: Text.BeforeDelimiter
---

# Text.BeforeDelimiter


## Description

Text.BeforeDelimiter


## Syntax

```powerquery
Text.BeforeDelimiter(
    text as text,
    delimiter as text,
    optional index as any
) as any
```


## Details

Returnează porțiunea din <code>text</code> de dinainte de <code>delimiter</code> specificat.    O valoare numerică opțională <code>index</code> indică ce apariție a instanței <code>delimiter</code> trebuie luată în calcul.    O listă opțională <code>index</code> indică ce apariție a instanței <code>delimiter</code> trebuie luată în calcul și dacă indexarea trebuie realizată de la începutul sau de la sfârșitul intrării.


## Examples

### Example #1 
Obțineți porțiunea din „111-222-333” de dinainte de (prima) cratimă.
```powerquery
Text.BeforeDelimiter("111-222-333", "-")
```

Result: 
```powerquery
"111"
```


### Example #2 
Obțineți porțiunea din „111-222-333” de dinainte de a doua cratimă.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", 1)
```

Result: 
```powerquery
"111-222"
```


### Example #3 
Obțineți porțiunea din „111-222-333” de dinainte de a doua cratimă de la sfârșit.
```powerquery
Text.BeforeDelimiter("111-222-333", "-", {1, RelativePosition.FromEnd})
```

Result: 
```powerquery
"111"
```




## Category
Text.Transformations
